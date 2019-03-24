<template>
    <div>
        <div class="text-center">
            <h1>
                Snippets
            </h1>

            <hr>

            <button
                class="btn btn-primary"
                @click="createSnippet"
            >
                Create a new one
            </button>
        </div>

        <hr>

        <div v-for="snippet in snippets.slice().reverse()">
            <div class="row">
                <div class="col-12">
                    <snippet
                        :key="snippet.id"
                        :snippet="snippet"
                        @update="updateSnippet"
                        @delete="deleteSnippet"
                    ></snippet>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            snippets: [],
        }
    },
    mounted () {
        this.refresh();
    },
    methods: {
        refresh () {
            axios
                .get('snippets')
                .then(response => this.snippets = response.data);
        },
        createSnippet () {
            axios
                .post(`snippets`, {
                    content: '// new snippet',
                    language: 'php',
                })
                .then(this.refresh);
        },
        updateSnippet (snippet) {
            const {id, content, language} = snippet;

            axios
                .patch(`snippets/${id}`, {
                    content,
                    language,
                });
        },
        deleteSnippet (id) {
            axios
                .delete(`snippets/${id}`)
                .then(this.refresh);
        },
    },
}
</script>
