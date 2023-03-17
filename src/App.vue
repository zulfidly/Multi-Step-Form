<script setup>
  import { watchEffect } from "vue"
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import { navi } from "./views/Step1Form.vue"
  import { total } from "./views/Step4Form.vue"
  import { showToast } from "./components/SelectPlanReminder.vue"
  import SelectPlanFirst from "./components/SelectPlanReminder.vue"
  import WallMobile from "./components/icons/bg-sidebar-mobile.vue"
  import WallDesktop from "./components/icons/bg-sidebar-desktop.vue"
  import github from "./components/icons/attr-gh-fm.vue"

  const router = useRouter()
  router.push("/") // land on home upon browser reload

  watchEffect(() =>  {
      navi.prev = router.options.routes[navi.curr].previous
      navi.next = router.options.routes[navi.curr].next 
      // console.log(navi)
  })

  function getCurrIndex(e) {
    navi.curr = Number(e.target.textContent) - 1
  }

</script>

<template>
  <github id="attr"></github>

  <Transition name="toast" mode="in-out">
    <SelectPlanFirst v-if="showToast"/>
  </Transition>

  <div id="ctnr1">
    <WallMobile class="wallMobile"/>
    <WallDesktop class="wallDesktop"/>

    <nav class="stepIndex">
      <div class="stepNumberCtnr">
          <RouterLink @click="getCurrIndex" class="stepNumber" :class="{stepNumberHighlighter: navi.curr==0?true:false}" to="/">1</RouterLink>
          <section class="stepNumberDescription">
              <h4>STEP 1</h4>
              <h4 class="descriptionTitle">YOUR INFO</h4>
          </section>
      </div>
      <div class="stepNumberCtnr">
          <RouterLink @click="getCurrIndex" class="stepNumber" :class="{stepNumberHighlighter: navi.curr==1?true:false}" to="/step2">2</RouterLink>
          <section class="stepNumberDescription">
              <h4>STEP 2</h4>
              <h4 class="descriptionTitle">SELECT PLANS</h4>
          </section>
      </div>
      <div class="stepNumberCtnr">
          <RouterLink @click="getCurrIndex" class="stepNumber" :class="{stepNumberHighlighter: navi.curr==2?true:false}" to="/step3">3</RouterLink>
          <section class="stepNumberDescription">
              <h4>STEP 3</h4>
              <h4 class="descriptionTitle">ADD-ONS</h4>
          </section>
      </div>
      <div class="stepNumberCtnr">
          <RouterLink @click="getCurrIndex" class="stepNumber" :class="{stepNumberHighlighter: navi.curr==3?true:false}" to="/step4">4</RouterLink>
          <section class="stepNumberDescription">
              <h4>STEP 4</h4>
              <h4 class="descriptionTitle">SUMMARY</h4>
          </section>
      </div>
      <div class="stepNumberCtnr">
      </div>
    </nav>
  </div>

  <div id="ctnr2">
    <RouterView v-slot="{ Component }">
      <Transition name="tranRV" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <nav class="naviBtnCtnr" v-show="navi.currExt !== '/thankyou'">
      <div>
        <RouterLink @click="navi.curr--" :to="`${navi.prev}`">
          <button class="goBack"  v-show="navi.prev">Go Back</button>
        </RouterLink>
      </div>
      <div class="">
        <RouterLink @click="navi.curr++" :to="`${navi.next}`" v-if="navi.next!=='/thankyou'">
          <button class="nextStep" >Next Page</button>
        </RouterLink>

        <RouterLink  :to="`${navi.next}`"  v-else v-show="total !== 0">
          <button class="nextStep">Confirm</button>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>
<style scoped>
#attr {
  position: absolute;
  bottom: 100px;
  left: 30px;
}
  .wallMobile {
    display: block;
  }
  .wallDesktop {
    display: none;
  }
  #ctnr1, #ctnr2 {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tranRV-enter-from {
    transform: scale(0.1);
    opacity: 0;
  }
  .tranRV-enter-active {
    transition: all var(--anime-speed) ease-out;
  }
  .tranRV-enter-to {
    transform: scale(1);
    opacity: 1;
  }
  .tranRV-leave-from {
    transform: translateY(0%);
    opacity: 1;
  }
  .tranRV-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
  .tranRV-leave-active {
    transition: all var(--anime-speed) ease-in;
  }
  .stepIndex {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 15px;
    margin: 15px 0px;
  }
  .stepNumberCtnr {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    padding: 5px;
    color: var(--color-text);
  }
  .stepNumber {
    width: 50px;
    height: 50px;
    border: 2px solid var(--color-text-invert);
    border-radius: 9999px;
    background: transparent;
    color: var(--color-text-invert);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;  
    align-items: center;
  }
  .stepNumberHighlighter {
    background-color: rgb(189, 117, 91);
  }
  .stepNumberDescription {
    padding: 5px;
    display: none;
  margin-left: 10px;  }
  .descriptionTitle {
    font-weight: 700;
    letter-spacing: 1.5px;
  } 

  h4 {
    color: var(--color-text);
  }
  .nextStep {
        width: 130px;
        height: 40px;
        border-radius: 10px;
        background-color: var(--color-text-invert);
        color: var(--color-text);
        font-size: 1rem;
        border: transparent;
        cursor: pointer;
    }
  .goBack {
      width: 130px;
      height: 40px;
      border-radius: 10px;
      background-color: var(--color-text-invert);
      color: var(--color-text);
      font-size: 1rem;
      border: transparent;
      cursor: pointer;
  }
  .naviBtnCtnr {
    width: 375px;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    position: fixed;
    bottom: 15px;
    left: 0;
    background-color: var(--color-background-soft);
  }

@media (min-width: 1024px) {
  #attr {
  position: absolute;
  bottom: 40px;
  left: 64%;
}
  .wallMobile {
    display: none;
  }
  .wallDesktop {
    display: block;
  }
  #ctnr1, #ctnr2 {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    margin: 15px;
    overflow: hidden;
  }
  .stepIndex {
    position: absolute;
    z-index: 3;
    flex-flow: column nowrap;
  }
  .stepNumberDescription {
    display: block;
  }
  #ctnr2 {
    position: relative;
  }
  .naviBtnCtnr {
    position: absolute;
    bottom: 0;
  }
}
</style>
