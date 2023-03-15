<script setup>
  import { ref, computed } from "vue"
  
  
  
</script>

<script>
  export const isYearly = ref(false)
  export var isYearlyComputed = computed(() => { if(isYearly.value) return "yearly"; else return "monthly"})
  const active = ref(false)

  export function toggleState() {
      if(isYearly.value) isYearly.value = false
      else isYearly.value = true
      active.value = !active.value
  }
  
</script>

<template>
  <div class="billCycleOptions">
    <h2>Monthly</h2>
    <div class="optSlider"   @click="toggleState">
      <span class="optSliderCircle" :class="{right: active}"></span>
    </div>
    <h2>Yearly</h2>
  </div>
</template>

<style scoped>
.billCycleOptions {
  width: 100%;
  height: 60px;
  background-color: var(--color-background-mute);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  border-radius: 10px;
}
.optSlider {
    width: var(--optSlider-ctnr-W);
    height: var(--optSlider-ctnr-H);
    background-color: #2196F3;
    border-radius: calc(var(--optSlider-ctnr-H)/2);
    position: relative;
    margin: 0 20px;
    cursor: pointer;
  }
  .optSliderCircle {
    width: var(--optSlider-circle-H);
    height: var(--optSlider-circle-H);
    position: absolute;
    inset: 50% 0 0 25%;
    transform: translate(-50%, -50%);
    background-color: yellow;
    border-radius: 9999px;
    transition: all .2s;
  }

  .right {
    transform: translate(100%, -50%);
  }

  @media (min-width: 1024px) {
    .billCycleOptions {
      height: 50px;
    }
    h2 {
      font-size: 1rem;
    }
  }
  </style>