import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/adminLogin.vue'
import firebase from "firebase";
import swal from 'sweetalert';


// function check(to, from, next) {
//     firebase.auth().onAuthStateChanged((user) => {
//         if (!user) {
//             // alert("No Logged /in");
//             swal("NO Authorization!", "You clicked the button!", "error");
//             next({
//                 path: "/adminLogin",
//             });
//         } else {
//             alert(from);
//             next();

//         }
//     });
// }
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        name: 'About',

        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/adminLogin',
        name: 'adminLogin',

        component: () =>
            import ('../views/adminLogin.vue')
    },
    {
        path: '/adminsignup',
        name: 'adminsignup',
        // beforeEnter: check,
        component: () =>
            import ('../views/adminsignup.vue')
    }, {
        path: '/adminedit',
        name: 'adminedit',
        // beforeEnter: check,
        component: () =>
            import ('../views/adminedit.vue')
    }, {
        path: '/admininsert',
        name: 'admininsert',
        // beforeEnter: check,
        component: () =>
            import ('../views/admininsert.vue')
    },
    {
        path: '/adminupdateimg',
        name: 'adminupdateimg',
        // beforeEnter: check,
        component: () =>
            import ('../views/adminupdateimg.vue')
    },
    {
        path: '/adminupdate',
        name: 'adminupdate',
        // beforeEnter: check,
        component: () =>
            import ('../views/adminupdate.vue')
    },
    {
        path: '/adminlogout',
        name: 'adminlogout',

        component: () =>
            import ('../views/adminlogout.vue')
    },
    {
        path: '/adminvar',
        name: 'adminvar',

        component: () =>
            import ('../views/adminvar.vue')
    },
    {
        path: '/adminmaivar',
        name: 'adminmaivar',

        component: () =>
            import ('../views/adminmaivar.vue')
    },
    {
        path: '/adminone',
        name: 'adminone',

        component: () =>
            import ('../views/adminone.vue')
    },
    {
        path: '/admintwo',
        name: 'admintwo',

        component: () =>
            import ('../views/admintwo.vue')
    },
    {
        path: '/adminupdateimg',
        name: 'adminupdateimg',

        component: () =>
            import ('../views/adminupdateimg.vue')
    }, {
        path: '/userfirstpage',
        name: 'userfirstpage',

        component: () =>
            import ('../views/userfirstpage.vue')
    }, {
        path: '/forgotpassword',
        name: 'forgotpassword',
        // beforeEnter: check,
        component: () =>
            import ('../views/forgotpassword.vue')
    }, {
        path: '/usermain',
        name: 'usermain',

        component: () =>
            import ('../views/usermain.vue')
    }, {
        path: '/usermainvar',
        name: 'usermainvar',

        component: () =>
            import ('../views/usermainvar.vue')
    }, {
        path: '/usermainmaivar',
        name: 'usermainmaivar',

        component: () =>
            import ('../views/usermainmaivar.vue')
    }, {
        path: '/userone',
        name: 'userone',

        component: () =>
            import ('../views/userone.vue')
    }, {
        path: '/usertwo',
        name: 'usertwo',

        component: () =>
            import ('../views/usertwo.vue')
    }, {
        path: '/userrent',
        name: 'userrent',

        component: () =>
            import ('../views/userrent.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router