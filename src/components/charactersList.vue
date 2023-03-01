<script>
import { store } from "../data/store";
import CharacterCard from "./CharacterCard.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: { CharacterCard },
};
</script>

<template>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
        <div class="bg-dark">
            <span class="text-light fw-bold">Found</span>
        </div>
        <CharacterCard v-for="character in store.characters" :key="id" :image="character.card_images[0].image_url"
            :name="character.name" :archetype="character.archetype" />
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss";

.row {
    overflow: scroll;
}

.bg-dark {
    height: 3rem;
    width: 87%;
}
</style>