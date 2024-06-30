<template>
        <button @click="selectColor()" class="color w-8 h-8 rounded-full" :class="isSelectedColor()"></button>
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

.color {
    background-color: v-bind('color');
}

</style>