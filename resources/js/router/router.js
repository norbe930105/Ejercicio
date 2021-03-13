import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonasComponent from "../components/frontend/PersonasComponent";
import DashboardComponent from "../components/frontend/DashboardComponent";

const layoutFrontend = () => import(`../layout/frontend/layoutFrontend.vue`);

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "front",
            component: layoutFrontend,
            children: [
                {path: '/', component: DashboardComponent},
                {path: '/personas', component: PersonasComponent},
            ]
        },
    ]
})

// router.beforeEach((to, from, next) => {
//
//     if(to.name === "front") next()
//     else{
//         if(to.fullPath === "/admin"){
//             console.log('llego')
//             console.log(next('/admin/login'))
//         }
//             next('login')
//     }
//         // if (to.name === 'login') { next() } else {
//         //     if (to.name !== 'notAuthorized') {
//         //         const scopes = sessionStorage.getItem('scopes')
//         //         if (scopes.includes(to.meta.scopes)) { next() } else { next('notAuthorized') }
//         //     } else { next() }
//         // }
//         })

export default router;
