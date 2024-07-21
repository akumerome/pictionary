<template>
    <li><span class="user-name">{{ message.user.name }}:</span> {{ message.message }}</li>
</template>

<script>

export default {
    props: {
        message: Object
    },
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {

    },
    computed: {
       
    }
};
</script>

<style scoped>
.user-name {
    color: v-bind('message.user.color');
    font-weight: 700;
}
</style>