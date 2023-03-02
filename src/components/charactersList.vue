<script>
import { store } from "../data/store";
import CharacterCard from "./CharacterCard.vue";
import BaseSearch from "./BaseSearch.vue";
import axios from "axios";

export default {
    data() {
        return {
            store,
            endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
        };
    },
    components: { CharacterCard, BaseSearch },

    methods: {
        fatchCharacters(url) {
            axios.get(url)
                .then((reponse) => {
                    store.characters = reponse.data.data;
                });
        },

        filterPage(term) {
            console.log(term);
            this.fatchCharacters(`${this.endpoint}?archetype=${term}`);
        },
    },

};
</script>

<template>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
        <BaseSearch @on-search="filterPage" text="search charatres" />
        <div class="bg-dark">
            <span class="text-light fw-bold">Found</span>
        </div>
        <CharacterCard v-for="character in store.characters" :key="id" :image="character.card_images[0].image_url"
            :name="character.name" :archetype="character.archetype" />
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss";

.bg-dark {
    height: 3rem;
    width: 87%;
}
</style>