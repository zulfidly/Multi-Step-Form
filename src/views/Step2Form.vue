<script setup>
    import { watchEffect, reactive, computed } from "vue"
    import { onBeforeMount } from "vue"
    import { useRoute } from "vue-router"
    import { navi } from "./Step1Form.vue"
    import { isYearly } from "../components/OptionsSlider.vue"
    import iconArcade from "../components/icons/icon-arcade.vue"
    import iconAdvanced from "../components/icons/icon-advanced.vue"
    import iconPro from "../components/icons/icon-pro.vue"
    import PackageOptions from "../components/PackageOptions.vue"
    import OptionSlider from "../components/OptionsSlider.vue"
    
    const route = useRoute()
    onBeforeMount(() => {
        navi.currExt = route.path
        navi.curr = 1

        // console.log(navi)
    })       

    const testComputed1 = computed(() => {
        if(isYearly.value) return plan.arcade.yearly +" /year"
        else return plan.arcade.monthly +" /month"
    })
    const testComputed2 = computed(() => {
        if(isYearly.value) return plan.arcade.promotion
        else return ""
    })
</script>

<script>
    export const cl_Plan = reactive({
        Arcade: false,
        Advanced: false,
        Pro: false,
    })
    export const step2 = reactive({
        plan: undefined,
        billing: undefined,
        cost: 0,
    })
    function cl_selectedPlanMngr(x) {
        if(x == "Arcade") cl_Plan.Arcade = true; else cl_Plan.Arcade = false;
        if(x == "Advanced") cl_Plan.Advanced = true; else cl_Plan.Advanced = false;
        if(x == "Pro") cl_Plan.Pro = true; else cl_Plan.Pro = false;
    }

    watchEffect(() => { cl_selectedPlanMngr(step2.plan)   })
    watchEffect(() => { step2ToggleMonthlyYearly(step2.plan, isYearly.value) })

    function step2ToggleMonthlyYearly(title, isYearly) {
        step2.plan = title
        step2.billing = isYearly? "yearly" : "monthly"
        step2.cost = getCost(step2.plan)
        // console.log(step2)
    }
    const plan = {
        arcade: { monthly: 9, yearly: 90, promotion:"2 months free" },
        advanced: { monthly: 12, yearly: 120, promotion:"2 months free" },
        pro: { monthly: 15, yearly: 150, promotion:"2 months free" },
    }
    function step2clicked(e) {
        step2.plan = e.target.dataset.plan
        step2.billing = isYearly.value? "yearly" : "monthly"
        step2.cost = getCost(step2.plan)
        // console.log(step2)
    }

    function getCost(x) {
        if(x == "Arcade") {
            if(isYearly.value) return plan.arcade.yearly
            else return plan.arcade.monthly
        }
        else if(x == "Advanced") {
            if(isYearly.value) return plan.advanced.yearly
            else return plan.advanced.monthly
        }
        else if(x == "Pro") {
            if(isYearly.value) return plan.pro.yearly
            else return plan.pro.monthly
        } else {
            // console.log("ERROR getting plan title")
            return 0
        }
    }

</script>

<template >
    <div class="step2MainCtnr">
        <div class="board1">
            <h1>Select your plan</h1>
            <h3>You have the option of monthly or yearly billing.</h3>
        </div>

        <div class="board2">
            <div class="board2a">
                <button class="cl_step2" :class="{ highlightPlan: cl_Plan.Arcade }">
                    <iconArcade/>
                    <PackageOptions>
                        <template #packageTitle>Arcade</template>
                            <template #pricing>${{ testComputed1 }}</template>
                            <template #promotion> {{ testComputed2 }}</template>
                    </PackageOptions>
                    <span class="btnSensor" 
                        data-plan="Arcade"
                        @click="step2clicked">
                    </span>
                </button>
                <button class="cl_step2" :class="{ highlightPlan: cl_Plan.Advanced }">
                    <iconAdvanced/>
                    <PackageOptions>
                        <template #packageTitle>Advanced</template>
                            <template v-if="isYearly" #pricing>${{ plan.advanced.yearly }} /year</template>
                            <template v-else #pricing>${{ plan.advanced.monthly }} /month</template>
                            <template v-if="isYearly" #promotion> {{ plan.advanced.promotion }}</template>
                            <template v-else #promotion></template>
                    </PackageOptions>
                    <span class="btnSensor" 
                        data-plan="Advanced"
                        @click="step2clicked">
                    </span>
                </button>
                <button class="cl_step2" :class="{ highlightPlan: cl_Plan.Pro }">
                    <iconPro/>
                    <PackageOptions>
                        <template #packageTitle>Pro</template>
                        <template v-if="isYearly" #pricing>${{ plan.pro.yearly }} /year</template>
                        <template v-else #pricing>${{ plan.pro.monthly }} /month</template>
                        <template v-if="isYearly" #promotion> {{ plan.pro.promotion }}</template>
                        <template v-else #promotion></template>
                    </PackageOptions>
                    <span class="btnSensor"
                        data-plan="Pro"
                        @click="step2clicked">
                    </span>
                </button>
            </div>
            <OptionSlider/>
        </div>
    </div>

</template>


<style scoped>
    .step2MainCtnr {
        background-color: var(--color-background);
        border-radius: 10px;
        padding: 1rem 0;
    }
    .board1 {
        width: 375px;
        height: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding: 0 1rem ;
        gap: 0.5rem;
        opacity: 1;
    }
    .board2 {
        width: 375px;
        height: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
        opacity: 1;
    }
    .board2a {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }
    .highlightPlan {
        background-color: var(--color-border);
        border: 1px solid var(--color-text);
    }
    .cl_step2 {
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-columns: auto 2fr;
        gap: 20px;
        align-items: center;
        border-radius: 10px;
        padding: 3px 15px;
        transition: background-color 0.7s;
    }
    button {
        border: transparent;
        background-color: transparent;
        cursor: pointer;
        text-align: left;
    }
    @media (min-width: 1024px) {
        .cl_step2 {
            height: 100px;
        }
        .step2MainCtnr {
            padding: 3rem 0;

        }
        .board1, .board2 {
            width: var(--width-userBoard-desktop);
        }
        .board2a {
            flex-flow: row nowrap;
        }
    }
</style>