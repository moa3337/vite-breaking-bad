<script>
import axios from "axios";

export default {
    data() {
        return {
            characters: [],
        };
    },

    created() {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0").then((response) => {
            console.log(response);
            this.characters = response.data.data;
        });
    },
};
</script>

<template>
    <div class="row">
        <div class="col" v-for="character in characters">
            <img v-bind:src="character.image_url" alt="">
            <h3>{{ character.name }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>