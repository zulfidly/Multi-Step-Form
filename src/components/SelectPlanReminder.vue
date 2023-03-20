<template>
    <div class="userMsg">O'ohh, have you select a Plan yet ?</div>
</template>

<script>
    import { ref } from "vue"
    export const showToast = ref(false);

    export const triggerToast = () => {
        showToast.value=true
        setTimeout(() => {showToast.value=false;}, 1000)
  }

</script>

<style>
    .blinkStep2 {
        animation: blink-step-2 0.3s ease 0s 3;
    }
    @keyframes blink-step-2 {
          0% {    background-color: transparent;            }
        100% {    background-color: rgb(206, 193, 75);    }
    }
</style>

<style>
  .toast-enter-active {
    animation: wobble 0.3s ease;
  }
  .toast-leave-active {
    animation: fade-out 3s ease-out 1s;
  }
  @keyframes wobble {
      0% { transform: translateY(-60px); opacity: 0;}
     50% { transform: translateY(  10px); opacity: 1;}
     60% { transform: translateX( 8px); }
     70% { transform: translateX(-8px); }
     80% { transform: translateX( 4px); }
     90% { transform: translateX(-4px); }
    100% { transform: translateX( 0px); opacity: 1;}
  }
  @keyframes fade-out {
      0% { opacity: 1;}
    100% { opacity: 0;}
  }
</style>

<style scoped>
    .userMsg {
        width: 80vw;
        height: 60px;
        color: var(--vt-c-indigo);
        font-weight: 600;
        background-color: rgb(255, 165, 61);
        position: fixed;
        top: 10px; 
        opacity: 1;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        border-radius: 15px;
    }
    @media (min-width: 1024px) {
        .userMsg{
            font-size: 1.5rem;
        }
    
    }

</style>