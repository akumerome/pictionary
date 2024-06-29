<template>
    <button @click="erase()" class="bg-rose-300">ERASE</button>
</template>

<script>
import { useAppStore } from '../stores/app.js';

export default {
    data() {
        return {
            store: useAppStore(),
        }
    },
    methods: {
        erase() {
            this.store.setEraseCanvas(true);
        },
    },
};
</script>