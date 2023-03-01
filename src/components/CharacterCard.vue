<script>
export default {
    props: {
        image: String,
        name: String,
        archetype: String,
    },
};
</script>

<template>
    <div class="col text-center mx-3 p-0">
        <img v-bind:src="image" class="img-fluid" alt="">
        <h3 class="text-light">{{ name }}</h3>
        <p>{{ archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
/*@use "../assets/scss/partials/variables.scss";*/

.col {
    background-color: orange;
}
</style>