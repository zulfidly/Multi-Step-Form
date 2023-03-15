import { createRouter, createWebHistory } from 'vue-router'
import step1 from '../views/Step1Form.vue'
//https://www.youtube.com/watch?v=PBqQO-keR1s
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form1',
      curr: 1,
      previous: null,
      next: "/step2",
      component: step1
    },
    {
      path: '/step2',
      name: 'form2',
      curr: 2,
      previous: "/",
      next: "/step3",
      component: () => import('../views/Step2Form.vue')
    },
    {
      path: '/step3',
      name: 'form3',
      curr: 3,
      previous: "/step2",
      next: "/step4",
      component: () => import('../views/Step3Form.vue')
    },
    {
      path: '/step4',
      name: 'form4',
      curr: 4,
      previous: "/step3",
      next: "/thankyou",
      component: () => import('../views/Step4Form.vue')
    },
    {
      path: "/thankyou",
      name: 'formTQ',
      curr: 4,
      previous: "/step4",
      next: null,
      component: () => import('../views/ThankYou.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      curr: null,
      name: "not_found",
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
// console.log(router)