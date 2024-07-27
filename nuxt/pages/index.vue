<template>
    <div class="relative">
        <div class="pt-8 flex gap-x-2">
            <div class="relative">
                <game-canvas></game-canvas>
                <div class="absolute top-0 w-[515px] h-fit bg-amber-200 p-2 flex flex-col gap-2">
                    <div class="flex items-center gap-x-2">
                        <game-palette></game-palette>
                        <game-eraser></game-eraser>
                    </div>
                    <game-brush></game-brush>
                </div>
            </div>
            <chat></chat>
        </div>
        <words-options v-if="words_options.length > 0" :options="words_options"></words-options>
    </div>
</template>

<script>
import { useAppStore } from '../stores/app.js';
import { socket } from '@/socket.js';

export default {
    data() {
        return {
            store: useAppStore(),
        }
    },
    mounted() {
        this.get_words_options();
    },
    methods: {
        get_words_options() {
            socket.emit('get-words-options');
        }
    },
    watch: {

    },
    computed: {
        words_options() {
            return this.store.get_words_options();
        },
    }
};
</script>