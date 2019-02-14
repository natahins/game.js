<template>
    <Playground />
</template>


<script>
import { Games } from 'js/classes/Games';
import { default as Playground } from './Playground.vue';

export default {
    name: 'Game',
    components: {
        Playground
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            matrix: new Games(this.name).load()
        }
    },
    created() {

    },
    methods: {
    }
}
</script>
