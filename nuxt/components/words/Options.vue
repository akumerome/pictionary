<template>
    <div class="absolute inset-0 w-1/3 h-1/4 m-auto grid grid-cols-2 gap-2">
        <button v-for="option in options" class="option-button">
            {{ option }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        options: Array
    },
}
</script>

<style>
.option-button {
background-color: rgb(252 211 77);
border-radius: 0.5rem;
font-family: Permanent Marker;
font-size: 1.875rem; /* 30px */
line-height: 2.25rem; /* 36px */
}
</style>