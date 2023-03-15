<script setup>
    import { onBeforeMount, ref } from "vue"
    import { useRoute } from "vue-router"
    import { navi } from "./Step1Form.vue"
    import iconThankYou  from "../components/icons/icon-thank-you.vue"


    const route = useRoute()
    onBeforeMount(() => {
        navi.currExt = route.path
        navi.curr = 3
        // console.log(navi)
    })  
</script>

<template>
    <div class="userBoard flexCenter">
        <iconThankYou />
        <h1>Thank you !</h1>
        <h3>Thanks for confirming your subscription !</h3>
        <h3>We hope you have fun using our platform. If you ever need support, please feel free to email us at :</h3>
        <h3>support@lorem.com</h3>
    </div>
</template>

<style scoped>
    .flexCenter {
        align-items: center;
        text-align: center;
    }
    svg {
        width: 100px;
        height: auto;
    }

</style>