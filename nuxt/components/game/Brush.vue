<template>
    <div class="px-4 grid grid-cols-12 items-center gap-x-3.5">
        <utils-slider class="col-span-11" size="sm" :value="thickness" :min="10" :max="30" :step="2"
            :color="selectedColor" @update:value="thickness = $event"></utils-slider>
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
            thickness: '10',
        }
    },
    methods: {
        select_thickness() {
            this.store.setBrushThickness(this.thickness);
        }
    },
    watch: {
        thickness: {
            handler: 'select_thickness',
            immediate: false,
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