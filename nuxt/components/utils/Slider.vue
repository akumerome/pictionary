<template>
    <input type="range" :value="value" :min="min" :max="max" :step="step" :disabled="disabled"
        @input="update_value($event.target.value)" :class="[is_disabled()]">
</template>

<script>

export default {
    props: {
        value: {
            type: String,
            default: 0,
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        step: {
            type: Number,
            default: 1,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: '#000000',
        },
        size: {
            type: String,
            default: 'md',
        },
    },
    data() {
        return {
            tracker_height: 0,
            thumb_size: 0,
        }
    },
    mounted() {
        this.determine_size();
    },
    methods: {
        update_value(new_value) {
            this.$emit('update:value', new_value);
        },
        calculate_unity() {
            return 100 / (this.max - this.min);
        },
        is_disabled() {
            return this.disabled ? 'disabled' : '';
        },
        determine_size() {

            switch (this.size) {
                case '2xs':
                    this.tracker_height = '1px';
                    this.thumb_size = '0.375rem';
                    break;
                case 'xs':
                    this.tracker_height = '0.125rem';
                    this.thumb_size = '0.5rem';
                    break;
                case 'sm':
                    this.tracker_height = '0.25rem';
                    this.thumb_size = '0.75rem';
                    break;
                case 'md':
                    this.tracker_height = '0.5rem';
                    this.thumb_size = '1rem';
                    break;
                case 'lg':
                    this.tracker_height = '0.75rem';
                    this.thumb_size = '1.25rem';
                    break;
                case 'xl':
                    this.tracker_height = '1rem';
                    this.thumb_size = '1.5rem';
                    break;
                case '2xl':
                    this.tracker_height = '1.25rem';
                    this.thumb_size = '1.75rem';
                    break;
                default:
                    this.tracker_height = '0.5rem';
                    this.thumb_size = '1rem';
                    break;
            }
        }
    },
    watch: {
        size: {
            handler: 'determine_size',
            immediate: false,
        },
    },
    computed: {
        completed_slider_percentage() {
            const completed_slider_percentage = (this.value - this.min) * this.calculate_unity();
            return `${completed_slider_percentage}%`;
        }
    }
};
</script>

<style scoped>
input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: v-bind(tracker_height);
    background: linear-gradient(90deg, v-bind(color) v-bind(completed_slider_percentage), rgb(214, 214, 214) v-bind(completed_slider_percentage));
    outline: none;
    border-radius: 25px;
}

input[type=range]:focus {
    outline: none;
    /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: v-bind(thumb_size);
    height: v-bind(thumb_size);
    background: radial-gradient(circle, white 60%, v-bind(color) 50%);
    border: 2px solid v-bind(color);
    border-radius: 50%;
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    width: v-bind(thumb_size);
    height: v-bind(thumb_size);
    background: radial-gradient(circle, white 60%, v-bind(color) 50%);
    border: 2px solid v-bind(color);
    border-radius: 50%;
    cursor: pointer;
}

input[type="range"]::-ms-thumb {
    width: v-bind(thumb_size);
    height: v-bind(thumb_size);
    background: radial-gradient(circle, white 60%, v-bind(color) 50%);
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
}
</style>
