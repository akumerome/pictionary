<template>
    <div class="p-2 w-fit h-fit flex gap-1">
        <game-color v-for="color in colors" :color="color"></game-color>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colors: ['#FF0000', '#FFA902', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#7F02FE', '#FF00FF', '#888A87', '#653E26', '#FFFFFF', '#000000']
        }
    },
    mounted() {

    },
    methods: {
        
    }
};
</script>

<style scoped>

</style>