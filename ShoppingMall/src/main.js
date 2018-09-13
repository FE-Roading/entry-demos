// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store/index.js'
import "@/assets/css/config.scss";

import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Tab,
    Tabs, Cell, CellGroup, PullRefresh, Icon, Tabbar, TabbarItem, Card, Stepper,
    CheckboxGroup, Checkbox, CellSwipe, AddressList, AddressEdit, Rate, Dialog, Loading, Actionsheet } from 'vant'

Vue.use(Row).use(Button).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field)
    .use(NavBar).use(Tab).use(Tabs).use(CellGroup).use(Cell).use(PullRefresh).use(Icon).use(Tabbar)
    .use(TabbarItem).use(Card).use(Stepper).use(CheckboxGroup).use(Checkbox).use(CellSwipe).use(AddressList)
    .use(AddressEdit).use(Rate).use(Dialog).use(Loading).use(Actionsheet)

Vue.use(Vueaxios, axios)

Vue.filter('moneyFormat', (money = 0) => { return money.toFixed(2) })

/* eslint-disable no-new */
let app=new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
app.axios.defaults.withCredentials=true
