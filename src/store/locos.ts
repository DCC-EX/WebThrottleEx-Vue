import { defineStore } from "pinia";

export const savedLocoStore = defineStore('savedLocos', {
    state:() => {
        return {
        locos: [

        ]
    }
    }
})