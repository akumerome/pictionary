<template>
        <button @click="selectColor()" class="w-12 h-12 rounded-full" :class="[getColor(), isSelectedColor()]"></button>
</template>

<script>
import { useAppStore } from '../stores/app.js';

export default {
    props: {
        color: String
    },
    data() {
        return {
            store: useAppStore(),
        }
    },
    mounted() {

    },
    methods: {
        getColor() {
            return `bg-[${this.color}]`
        },
        isSelectedColor() {
            return this.selectedColor === this.color ? 'border-8' : 'border-2';
        },
        selectColor() {
            this.store.setSelectedColor(this.color);
        }
    },
    computed: {
        selectedColor() {
            return this.store.getSelectedColor();
        },
    }
};
</script>

<style scoped>

</style>