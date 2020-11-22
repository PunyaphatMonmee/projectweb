import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.config.productionTip = false


const config = {
    apiKey: "AIzaSyBckVzf0mO9ksMXswyHWD_ywPRvY78j6cg",
    authDomain: "censiri-f5218.firebaseapp.com",
    databaseURL: "https://censiri-f5218.firebaseio.com",
    projectId: "censiri-f5218",
    storageBucket: "censiri-f5218.appspot.com",
    messagingSenderId: "1068082440558",
    appId: "1:1068082440558:web:c8e9c53f24f1289867f97f",
    measurementId: "G-HZX145YX9N"
};
firebase.initializeApp(config)
Vue.use(BootstrapVue)
    // var db = firebase.firestore();
    // db.collection("users")
    //     .add({
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815,
    //     })
    //     .then(function(docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //         console.error("Error adding document: ", error);
    //     });

// new Vue({
//     el: '#tel',
//     data: {
//         phone: '555555'
//     },
//     template: '<div>{{ message }}</div>'
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')