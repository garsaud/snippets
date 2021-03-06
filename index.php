<?php

// Static router configuration
$url = parse_url($_SERVER['REQUEST_URI'])['path'];

if ($url === '/') {
    // render the view
    readfile('view.html');
    exit;
}

if (is_file(__DIR__.$url)) {
    // render static files
    return false;
}

// Loading dependencies
require 'vendor/autoload.php';

use Slim\App;
use Medoo\Medoo;

$app = new App();

// Setting up database
touch('database.sqlite');

$db = new Medoo([
    'database_type' => 'sqlite',
    'database_file' => 'database.sqlite',
]);

$db->query(<<<SQL
    CREATE TABLE IF NOT EXISTS snippets (
        id INTEGER NOT NULL PRIMARY KEY,
        content text NOT NULL,
        language text,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
SQL);

// REST router configuration
$app->get('/snippets', function ($request, $response, $args) use ($db) {
    return $response->withJson(
        $db->select('snippets', '*')
    );
});

$app->post('/snippets', function ($request, $response, $args) use ($db) {
    $db->insert(
        'snippets',
        $request->getParsedBody()
    );

    return $response;
});

$app->patch('/snippets/{id}', function ($request, $response, $args) use ($db) {
    $db->update(
        'snippets',
        $request->getParsedBody(),
        ['id' => $args['id']]
    );

    return $response;
});

$app->delete('/snippets/{id}', function ($request, $response, $args) use ($db) {
    $db->delete(
        'snippets',
        ['id' => $args['id']]
    );

    return $response;
});

$app->run();
