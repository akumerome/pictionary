<template>
    <button @click="erase()" class="w-10 h-10 flex justify-center items-center bg-rose-300 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-eraser">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
            <path d="M18 13.3l-6.3 -6.3" />
        </svg>
    </button>
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
    methods: {
        erase() {
            console.log("AAAAA")
            socket.emit('canvas-erased');
        },
    },
};
</script>