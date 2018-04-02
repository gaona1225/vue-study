<template>
    <div class = "bg-grey-lighter px-8 py-q6 min-h-screen">
        <div class = "max-w-sm w-full mx-auto">
            <tagsInput v-model = "tags"></tagsInput>
        </div>
    </div>
</template>

<script type="text/javascript">
import tagsInput from './tags-input'
export default {
    name: 'Tags',
    components: {
        tagsInput
    },
    data () {
        return {
            tags: ['Testing', 'Design']
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang = "scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto:700');
body {
    padding: 20px;
}
.tags-input {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-width: 1px;
    border-radius: .25rem;
    padding-left: .5rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .25rem;
    border: 1px solid #dae1e7;
}
.tags-input-tag {
    display: inline-flex;
    line-height: 1;
    align-items: center;
    font-size: .875rem;
    background-color: #bcdefa;
    color: #1c3d5a;
    border-radius: .25rem;
    user-select: none;
    padding: .25rem;
    margin-right: .5rem;
    margin-bottom: .25rem;
}
.tags-input-tag:last-of-type {
    margin-right: 0;
}
.tags-input-remove {
    color: #2779bd;
    font-size: 1.125rem;
    line-height: 1;
}
.tags-input-remove:first-child {
    margin-right: .25rem;
}
.tags-input-remove:last-child {
    margin-left: .25rem;
}
.tags-input-remove:focus {
    outline: 0;
}
.tags-input-text {
    flex: 1;
    outline: 0;
    padding-top: .25rem;
    padding-bottom: .25rem;
    margin-left: .5rem;
    margin-bottom: .25rem;
    min-width: 10rem;
    border: none;
}
.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}
</style>
