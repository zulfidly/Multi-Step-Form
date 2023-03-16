<script setup>
    import { reactive } from "vue"
    import { onBeforeMount } from "vue"
    import { useRoute } from "vue-router"

    const route = useRoute()

    onBeforeMount(() => {
        navi.currExt = route.path
        navi.curr = 0
        // console.log("onBeforeMount: ", navi)
    })       
     
</script>

<script>
    export const navi = reactive({
        curr: 0,
        currExt: "/",
        prev: null,
        next: "/step2",
    })
</script>

<template >
    <div class="userBoard">
        <h1>Personal info</h1>
        <h3>
            Please provide your name, email address, and phone number.
        </h3>

        <section>
            <h4>Name</h4>
            <form @submit.prevent>
                <input type="text" placeholder="e.g. N!xau ǂToma" required/>
            </form>
        </section>
        <section>
            <h4>Email Address</h4>
            <form @submit.prevent>
                <input type="email" placeholder="e.g. xixo@lorem.com"/>
            </form>
        </section>
        <section>
            <h4>Phone Number</h4>
            <form @submit.prevent>
                <input type="number" placeholder="e.g. +27 1234 9876"/>
            </form>
        </section>
    </div>
</template>

<style scoped>
    input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: transparent;
        padding: 0 10px;
    }
    ::placeholder {
        color: rgb(197, 190, 190);
    }
</style>