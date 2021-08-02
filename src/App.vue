<template>
    <div id="app">
        <!--    <h1>{{message}}</h1>-->
        <!--    <router-link to="/home">主页</router-link>-->
        <!--    <router-link to="/message">信息</router-link>-->
        <!--    <router-view></router-view>-->
        <router-view></router-view>
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
    import MainTabBar from "@/components/MainTabBar";


    export default {
        name: 'app',
        components: {MainTabBar},
        data() {
            return {
                message: '欢迎来到Vue~~~~~'
            }
        },
        component: {
            MainTabBar
        }
    }
</script>

<style>
    @import "./assets/css/base.css";
</style>
