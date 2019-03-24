import Vue from 'vue';

import '../css/bootstrap.css';

import Snippet from '../vue/snippet.vue';
Vue.component('snippet', Snippet);

import Suggestions from 'v-suggestions';
import 'v-suggestions/dist/v-suggestions.css';
Vue.component('suggestions', Suggestions);

import 'prismjs';
import 'prismjs/themes/prism.css';
import VuePrismEditor from 'vue-prism-editor';
import 'vue-prism-editor/dist/VuePrismEditor.css';
Vue.component('prism-editor', VuePrismEditor);

import App from '../vue/app.vue';
new Vue({
    el: '#app',
    render: h => h(App),
});
