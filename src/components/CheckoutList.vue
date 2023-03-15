<script setup>
    import { step2 } from "../views/Step2Form.vue"
    import { step3 } from "../views/Step3Form.vue"
    import { toggleState, isYearlyComputed } from "./OptionsSlider.vue";
</script>

<template>
    <div class="checkItemsCtnr">
        <slot name="Plan">
            <div class="PlanItems">
                <h2>{{ step2.plan }} ({{ step2.billing }})</h2>
                <h2>${{ step2.cost }}
                    <span v-if="isYearlyComputed=='yearly'"> /yr</span>
                    <span v-else="isYearlyComputed=='monthly'"> /mo</span>
                </h2>
            </div>
        </slot>
        
        <slot>
            <button @click="toggleState" class="btn_changeBillingCycle">Change to 
                <span v-if="isYearlyComputed=='yearly'"> monthly</span>
                <span v-else="isYearlyComputed=='mothly'"> yearly</span>
            </button>
        </slot>
        <slot name="border">
            <div class="border"></div>
        </slot>
    
        <div>
            <slot name="AddOns">
                <div class="addOnItems" v-if="step3.OnlineService.checked" >
                    <h3>
                        {{ step3.OnlineService.addOns }}
                    </h3>
                    <h3>
                        ${{ step3.OnlineService.cost }} 
                        <span v-if="isYearlyComputed=='yearly'">/yr</span>
                        <span v-else="isYearlyComputed=='monthly'">/mo</span>
                    </h3>
                </div>
        
                <div class="addOnItems" v-if="step3.LargerStorage.checked" >
                    <h3>
                        {{ step3.LargerStorage.addOns }}
                    </h3>
                    <h3>
                        ${{ step3.LargerStorage.cost }} 
                        <span v-if="isYearlyComputed=='yearly'">/yr</span>
                        <span v-else="isYearlyComputed=='monthly'">/mo</span>
                    </h3>
                </div>

                <div class="addOnItems" v-if="step3.CustomProfile.checked" >
                    <h3>
                        {{ step3.CustomProfile.addOns }}
                    </h3>
                    <h3>
                        ${{ step3.CustomProfile.cost }} 
                        <span v-if="isYearlyComputed=='yearly'">/yr</span>
                        <span v-else="isYearlyComputed=='monthly'">/mo</span>
                    </h3>
                </div>
            </slot>
        </div>
    </div>

</template>

<style scoped>
    .checkItemsCtnr {
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
    }
    .btn_changeBillingCycle {
        color: var(--color-text);
        border: 1px solid var(--color-border);
        background: var(--color-text-invert);
        padding: 5px;
        border-radius: 5px;
    }
    .addOnItems, .PlanItems {
        display: flex;
        justify-content: space-between;
    } 
    .border {
            border-bottom: 1px solid var(--color-text);
    }


</style>