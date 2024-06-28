<template>
        <div class="w-12 h-12 rounded-full border-8" :class="getColor()"></div>
</template>

<script>
export default {
    props: {
        color: String
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        getColor() {
            return `bg-[${this.color}]`
        }
    }
};
</script>

<style scoped>

</style>