import Vue from 'vue'
import App from './App.vue'
// import SW from '../serviceWorker';
// SW;
Vue.config.productionTip = false

// Register the service worker if available.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js').then(function (reg) {
      console.log('Successfully registered service worker', reg);
      Notification.requestPermission(result => {
        if (result === 'granted') {
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification('Vibration Sample', {
              body: 'Buzz! Buzz!',
              tag: 'vibration-sample'
            });
          });
        }
      });

  }).catch(function (err) {
      console.warn('Error whilst registering service worker', err);
  });
}

new Vue({
  render: h => h(App),
}).$mount('#app')
