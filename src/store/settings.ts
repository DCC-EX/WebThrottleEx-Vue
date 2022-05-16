import { defineStore } from "pinia";

export const settingsStore = defineStore('settings', {
    state:() => {
        return {
        theme: 'light'
    }
    }
})