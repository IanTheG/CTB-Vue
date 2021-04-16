import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    fadeAnimation() {
      const containers = Array.from(document.querySelectorAll('.box'))
      const options = {
        rootMargin: '0px',
        threshold: 0.75,
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          if (entry.intersectionRatio >= 0.75) {
            target.classList.add("is-visible")
          } else {
            target.classList.remove("is-visible")
          }
        })
      }, options)
      
      containers.forEach((container) => {
        const childElements = container.children
        if (childElements) {
          const containerChildren = Array.from(childElements)
      
          containerChildren.forEach((el, index) => {
            el.style.setProperty("--delay", `${index * 250}ms`);
          });

          observer.observe(container)
        }
      })
    },
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
