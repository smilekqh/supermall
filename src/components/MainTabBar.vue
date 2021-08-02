<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="blue">
            <img slot="item-icon" src="~assets/img/tabbar/naruto.jpg">
            <img slot="item-icon-active" src="~assets/img/tabbar/naruto_active.jpg">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="blue">
            <img slot="item-icon" src="@/assets/img/tabbar/jireya.jpg">
            <img slot="item-icon-active" src="@/assets/img/tabbar/dingdang.jpeg">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="blue">
            <img slot="item-icon" src="@/assets/img/tabbar/gara.jpg">
            <img slot="item-icon-active" src="@/assets/img/tabbar/yitachi_active.jpg">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="blue">
            <img slot="item-icon" src="@/assets/img/tabbar/obido.png">
            <img slot="item-icon-active" src="@/assets/img/tabbar/siyimon_active.jpg">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "@/components/tabbar/TabBar";
    import TabBarItem from "@/components/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>