<script>
import { stringifyExpression } from '@vue/compiler-core';

export default {
    data() {
        return {
            term: ""
        };
    },

    props: {
        //text: string,
    },

    emits: ["on-search"],

    methods: {
        clear() {
            this.term = "";
        },

        search() {
            this.$emit("on-search", this.term);
        },
    },
};
</script>

<template>
    <form @submit.prevent='ghg'>
        <select @click="search" v-model="term" :text="text" class="form-select" aria-label="Default select example">
            <option selected>select menu</option>
            <option value="1">trappola</option>
            <option value="2">magia</option>
            <option value="3">mostro</option>
        </select>
        <button class="btn btn-success" type="button" @click="clear">RESET</button>
    </form>
</template>

<style></style>