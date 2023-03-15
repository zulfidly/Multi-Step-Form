<script setup>
    import { onUpdated, reactive, watchEffect } from "vue"
    import { onBeforeMount } from "vue"
    import { useRoute } from "vue-router"
    import { navi } from "./Step1Form.vue"

    import PickAddOns from "../components/PickAddOns.vue"
    import { isYearly } from "../components/OptionsSlider.vue"
    import { cl_Plan } from "./Step2Form.vue"
    import iconCheckmark from "../components/icons/icon-checkmark.vue"
    import iconCheckmarkPath from "../components/icons/icon-checkmark-path.vue"

    const route = useRoute()
    onBeforeMount(() => {
        navi.currExt = route.path
        navi.curr = 2
        // console.log(navi)
  })       

</script>
    
<script>
    export const step3 = reactive({
        OnlineService: { checked: false, billing: "monthly", cost: 0, addOns: "Online service"},
        LargerStorage: { checked: false, billing: "monthly", cost: 0, addOns: "Larger storage"},
        CustomProfile: { checked: false, billing: "monthly", cost: 0, addOns: "Customizable profile"},
    })

    watchEffect(() => { updateOnlineService(step3.OnlineService.checked)})
    watchEffect(() => { updateLargerStorage(step3.LargerStorage.checked)})
    watchEffect(() => { updateCustomProfile(step3.CustomProfile.checked)})
    function updateOnlineService(x) {
        if(x) {
            step3.OnlineService.billing = isYearly.value?"yearly":"monthly"
            step3.OnlineService.cost = isYearly.value? addOns.onlineSrvc.price.yearly : addOns.onlineSrvc.price.monthly
        } else {
            step3.OnlineService.billing = ""
            step3.OnlineService.cost = 0
        }
        // console.log(step3)
    }
    function updateLargerStorage(x) {
        if(x) {
            step3.LargerStorage.billing = isYearly.value?"yearly":"monthly"
            step3.LargerStorage.cost = isYearly.value? addOns.largerStor.price.yearly : addOns.largerStor.price.monthly
        } else {
            step3.LargerStorage.billing = ""
            step3.LargerStorage.cost = 0
        }
        // console.log(step3)
    }
    function updateCustomProfile(x) {
        if(x) {
            step3.CustomProfile.billing = isYearly.value?"yearly":"monthly"
            step3.CustomProfile.cost = isYearly.value? addOns.customProf.price.yearly : addOns.customProf.price.monthly
        } else {
            step3.CustomProfile.billing = ""
            step3.CustomProfile.cost = 0
        }
        // console.log(step3)
    }

    function step3summary(e) {
        // console.log(e.target.dataset.option)
        if(!(cl_Plan.Arcade || cl_Plan.Advanced || cl_Plan.Pro)) {
            console.log("no step 2 selected")
            return
        }

        let q = e.target.dataset.option
        if(q == "OnlineService") {
            step3.OnlineService.checked = !step3.OnlineService.checked 
            if(step3.OnlineService.billing=="monthly") step3.OnlineService.cost = addOns.onlineSrvc.price.monthly
            else if(step3.OnlineService.billing=="yearly") step3.OnlineService.cost = addOns.onlineSrvc.price.yearly
        }
        if(q == "LargerStorage") {
            step3.LargerStorage.checked = !step3.LargerStorage.checked 
            if(step3.LargerStorage.billing=="monthly") step3.LargerStorage.cost = addOns.largerStor.price.monthly
            else if(step3.LargerStorage.billing=="yearly") step3.LargerStorage.cost = addOns.largerStor.price.yearly
        }
        if(q == "CustomProfile") {
            step3.CustomProfile.checked = !step3.CustomProfile.checked 
            if(step3.CustomProfile.billing=="monthly") step3.CustomProfile.cost = addOns.customProf.price.monthly
            else if(step3.CustomProfile.billing=="yearly") step3.CustomProfile.cost = addOns.customProf.price.yearly
        }
        // console.log(step3)
    }
    const addOns = {
    onlineSrvc: {
      title: "Online service",
      descr: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      } 
    },
    largerStor: {
      title: "Larger storage",
      descr: "Extra 1TB of cloud storage",
      price: {
        monthly: 2,
        yearly: 20,
      } 
    },
    customProf: {
      title: "Customizable profile",
      descr: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      } 
    }
  }

</script>

<template >
    <div class="userBoard">
        <h1>Pick add-ons</h1>
        <h2> Add-ons help enhance your gaming experience.</h2>
        <button class="cl_step3"  :class="{highlightAddOn:step3.OnlineService.checked}">
            <PickAddOns>
                <template #tickbox>
                    <iconCheckmark :class="{svgChecked:step3.OnlineService.checked}">
                            <template #path><iconCheckmarkPath :class="{pathChecked:step3.OnlineService.checked}"></iconCheckmarkPath></template>
                    </iconCheckmark>
                </template>
                <template #addOnTitle>{{addOns.onlineSrvc.title}}</template>
                <template #addOnDesc>{{addOns.onlineSrvc.descr}}</template>
                <template v-if="isYearly" #addOnPrice>+${{addOns.onlineSrvc.price.yearly}}/year</template>
                <template v-else #addOnPrice>+${{addOns.onlineSrvc.price.monthly}}/month</template>
            </PickAddOns>
            <span class="btnSensor" 
                data-option="OnlineService"
                @click="step3summary"
                >
            </span>
        </button>

        <button class="cl_step3"  :class="{highlightAddOn:step3.LargerStorage.checked}">
            <PickAddOns>
                <template #tickbox>
                    <iconCheckmark :class="{svgChecked:step3.LargerStorage.checked}">
                            <template #path><iconCheckmarkPath :class="{pathChecked:step3.LargerStorage.checked}"></iconCheckmarkPath></template>
                    </iconCheckmark>
                </template>
                <template #addOnTitle>{{addOns.largerStor.title}}</template>
                <template #addOnDesc>{{addOns.largerStor.descr}}</template>
                <template v-if="isYearly" #addOnPrice>+${{addOns.largerStor.price.yearly}}/year</template>
                <template v-else #addOnPrice>+${{addOns.largerStor.price.monthly}}/month</template>
            </PickAddOns>
            <span class="btnSensor" 
                data-option="LargerStorage"
                @click="step3summary"
                >
            </span>
        </button>

        <button class="cl_step3" :class="{highlightAddOn:step3.CustomProfile.checked}">
            <PickAddOns>
                <template #tickbox>
                    <iconCheckmark :class="{svgChecked:step3.CustomProfile.checked}">
                            <template #path><iconCheckmarkPath :class="{pathChecked:step3.CustomProfile.checked}"></iconCheckmarkPath></template>
                    </iconCheckmark>
                </template>
                <template #addOnTitle>{{addOns.customProf.title}}</template>
                <template #addOnDesc>{{addOns.customProf.descr}}</template>
                <template v-if="isYearly" #addOnPrice>+${{addOns.customProf.price.yearly}}/year</template>
                <template v-else #addOnPrice>+${{addOns.customProf.price.monthly}}/month</template>
            </PickAddOns>
            <span class="btnSensor" 
                data-option="CustomProfile"
                @click="step3summary"
                >
            </span>
        </button>
    </div>
</template>

<style scoped>
    .highlightAddOn {
        /* background-color: var(--color-border); */
        border: 1px solid var(--color-text);
    }
    .cl_step3 {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        gap: 0 10px;
        border-radius: 10px;
        padding: 15px 10px;
        transition: background-color 0.7s;
    }
    button {
        border: transparent;
        background-color: transparent;
        cursor: pointer;
        text-align: left;
    }

    
</style>