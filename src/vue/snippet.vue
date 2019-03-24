<template>
    <div>
        <div class="row">
            <suggestions
                class="col-6"
                v-model="snippet.language"
                :options="{}"
                :on-input-change="a => languages"
                @input="$emit('update', snippet)"
            ></suggestions>
            <div class="col-6 text-right">
                <button
                    class="btn btn-sm btn-danger"
                    @click="$emit('delete', snippet.id)"
                >
                    Delete
                </button>
            </div>
        </div>

        <div class="row">
            <prism-editor
                class="col-12"
                v-model="snippet.content"
                :language="snippet.language"
                :line-numbers="true"
                @change="$emit('update', snippet)"
            ></prism-editor>
        </div>
    </div>
</template>

<script>
import PrismEditor from 'vue-prism-editor'

export default {
    props: {
        snippet: {
            type: Object,
            required: true,
        },
    },
    data () {
        return {
            languages: [
                'js',
                'css',
                'php',
                'scss',
                'sql',
            ],
        };
    },
}
</script>
