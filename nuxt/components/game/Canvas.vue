<template>
    <canvas ref="canvas" class="canvas" width="750" height="750" @mousedown="canvasClicked()"
        @mouseup="canvasUnclicked()" @mouseleave="canvasUnclicked()" @mousemove="handleMouseMove">
        Your browser does not support the HTML canvas tag.
    </canvas>
</template>

<script>
import { useAppStore } from '../stores/app.js';

export default {
    data() {
        return {
            store: useAppStore(),
            canvas: null,
            context: null,
            isClicked: false,
        }
    },
    mounted() {
        const canvas = this.$refs.canvas;
        if (canvas.getContext) {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
        } else {
            console.error('Canvas not supported');
        }
    },
    methods: {
        canvasClicked() {
            this.isClicked = true;
        },
        canvasUnclicked() {
            this.isClicked = false;
        },
        handleMouseMove(e) {
            if (this.isClicked) {
                // Calculate cursor position
                const rect = this.canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Drawing a circle
                this.context.beginPath();
                this.context.arc(x, y, this.brushThickness, 0, Math.PI * 2); // (x-coordinate of the center, y-coordinate of the center, radius, startAngle, endAngle)
                this.context.fillStyle = this.color; // Fill color
                this.context.fill(); // Fill the circle

            }
        },
        erase() {
            if (this.isErased) {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.store.setEraseCanvas(false);            
            }
        }
    },
    watch: {
        isErased: {
            handler: 'erase',
            immediate: false,
        },
    },
    computed: {
        color() {
            return this.store.getSelectedColor();
        },
        isErased() {
            return this.store.getEraseCanvas();
        },
        brushThickness() {
            return (this.store.getBrushThickness() / 2);
        },
    }
};
</script>

<style scoped>
.canvas {
    border: 1px solid black;
    width: 750px;
    height: 750px;
}
</style>