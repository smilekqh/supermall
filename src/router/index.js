import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')




Vue.config.productionTip = false

// 1.安装路由插件
Vue.use(VueRouter)

// 2.配置路由映射关系
const routes = [
    {
        path:'',
        // redirect 重定向
        redirect :'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path:'/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
    //linkActiveClass :'active'
})

export default router
