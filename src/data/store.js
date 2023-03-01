import { reactive } from "vue";

export const store = reactive({
    characters: [],
    endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0",
});