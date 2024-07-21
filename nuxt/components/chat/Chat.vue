<template>
    <div class="chat border-2 border-black grow">
        <ul class="messages" ref="messages">
            <li></li>
            <chat-message v-for="message in messages" :message="message"></chat-message>
        </ul>
        <form class="sender" action="" @submit.prevent="send">
            <input id="input" autocomplete="off" v-model="text" />
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
import { useAppStore } from '../stores/app.js';

export default {
    data() {
        return {
            store: useAppStore(),
            text: '',
            messages: [
                {
                    user: {
                        id: 1,
                        name: "Vincent",
                        color: '#FF0000',
                    },
                    message: 'First message'
                },
                {
                    user: {
                        id: 2,
                        name: "Frida",
                        color: '#FF00FF',
                    },
                    message: 'Second message'
                },
                {
                    user: {
                        id: 3,
                        name: "Leonardo",
                        color: '#F0F0FF',
                    },
                    message: 'Third message'
                },
                {
                    user: {
                        id: 1,
                        name: "Vincent",
                        color: '#FF0000',
                    },
                    message: 'Fourth message'
                },
                {
                    user: {
                        id: 4,
                        name: "Rosa",
                        color: '#00FFFF',
                    },
                    message: 'Fifth message'
                },
                {
                    user: {
                        id: 3,
                        name: "Leonardo",
                        color: '#F0F0FF',
                    },
                    message: 'Sixth message'
                },
            ],
        }
    },
    methods: {
        send() {
            if (this.text.length > 0) {
                this.messages.push({ user: { id: 1, name: "Vincent", color: '#FF0000' }, message: this.text });
                this.text = '';

                // nextTick function executes code after some data has changed and the virtual DOM has been updated based on the data change, but before the browser has rendered that change on the page
                nextTick(() => {
                    const messages_container = this.$refs.messages;
                    messages_container.scrollTop = messages_container.scrollHeight;
                });
            }
        },
    }
};
</script>

<style>
.chat {
    display: flex;
    flex-direction: column;
    height: 750px;
    overflow: hidden;
    border: 2px solid black;
}

.sender {
    background: rgba(0, 0, 0, 0.15);
    padding: 0.25rem;
    display: flex;
    min-height: 3rem;
    height: 3rem;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
}

#input {
    border: none;
    padding: 0 1rem;
    flex-grow: 1;
    border-radius: 2rem;
    margin: 0.25rem;
}

#input:focus {
    outline: none;
}

.sender>button {
    background: #333;
    border: none;
    padding: 0 1rem;
    margin: 0.25rem;
    border-radius: 3px;
    outline: none;
    color: #fff;
}

.messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
}

.messages>li {
    min-height: 40px;
    padding: 0.5rem 1rem;
}

.messages>li:first-child {
    flex-grow: 1;
}
</style>
