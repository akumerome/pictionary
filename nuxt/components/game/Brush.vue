<template>
    <div class="px-4 grid grid-cols-12 items-center gap-x-3.5">
        <URange class="col-span-11" size="sm" v-model="thickness" :step="2" :min="10" :max="30"
            @change="selectThickness()" />
        <div class="col-span-1 min-w-[30px] min-h-[30px] flex justify-center items-center">
            <div class="color border-2 rounded-full" :style="{ 'width': thickness + 'px', 'height': thickness + 'px' }">
            </div>
        </div>
    </div>
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