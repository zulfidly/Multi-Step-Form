<script setup>
    import { computed } from "vue"
    import { onBeforeMount } from "vue"
    import { useRoute } from "vue-router"
    import { navi } from "./Step1Form.vue"
    import CheckoutList from "../components/CheckoutList.vue";
    import { isYearlyComputed } from "../components/OptionsSlider.vue"
    import { step2 } from "./Step2Form.vue"
    import { step3 } from "./Step3Form.vue"


    const route = useRoute()
    onBeforeMount(() => {
        navi.currExt = route.path
        navi.curr = 3
        // console.log(navi)
    })       
</script>

<script>
   export var total = computed(() => { return step2.cost + step3.OnlineService.cost + step3.LargerStorage.cost + step3.CustomProfile.cost })
</script>

<template>
    <div class="userBoard">
        <h1>Finishing Up</h1>
        <h3>Double-check everything looks OK before confirming</h3>

        <div class="checkoutItemsBoard">
            <CheckoutList>
                <template #Plan></template>
                <template #border></template>                
                <template #AddOns></template>
            </CheckoutList>
        </div>

        <div class="checkoutItemsBoard2">
            <h2>Total ({{ isYearlyComputed }})</h2>
            <h2>${{ total }}</h2>
        </div>
    </div>

</template>

<style scoped>
    .checkoutItemsBoard {
        background-color: var(--color-background-mute);
        padding: 20px 10px;
        border-radius: 10px;
    }
    .checkoutItemsBoard2 {
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;
        border-radius: 10px;
    }
</style>