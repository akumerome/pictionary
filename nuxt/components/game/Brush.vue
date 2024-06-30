<template>
    <UCard>
        <div class="flex items-center gap-x-5">
            <URange size="sm" v-model="thickness" :step="2" :min="10" :max="30" @change="selectThickness()" />
            <div class="color border-2 rounded-full" :style="{ 'width': thickness + 'px', 'height': thickness + 'px' }"></div>
        </div>
    </UCard>
</template>

<script>
import { useAppStore } from '../stores/app.js';

export default {
    data() {
        return {
            store: useAppStore(),
            thickness: 10,
        }
    },
    methods: {
        selectThickness() {
            this.store.setBrushThickness(this.thickness);
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
    background-color: v-bind('selectedColor');
}

</style>