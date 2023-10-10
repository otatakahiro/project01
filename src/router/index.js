import { createWebHistory,createRouter } from "vue-router";
import BreakfastMenu from '../components/menus/BreakfastMenu.vue'
import DishesMenu from '../components/menus/DishesMenu.vue'
import SideMenu from '../components/menus/SideMenu.vue'
import MonthlyMenu from '../components/menus/MonthlyMenu.vue'
import SweetsMenu from '../components/menus/SweetsMenu.vue'
import BeverageMenu from '../components/menus/BeverageMenu.vue'


const routes = [

    {
        path:'/',
        alias:'/breakfast',
        name:'breakfast-menu',
        component: BreakfastMenu
    },
    {
        path:'/jpndish',
        alias:'/jpndish',
        name:'jpndish-menu',
        component: DishesMenu
    },
    {
        path:'/jpnside',
        alias:'/jpnside',
        name:'jpnside-menu',
        component: SideMenu
    },
    {
        path:'/monthly',
        alias:'/monthly',
        name:'monthly-menu',
        component: MonthlyMenu
    },
    {
        path:'/sweets',
        alias:'/sweets',
        name:'sweets-menu',
        component: SweetsMenu
    },
    {
        path:'/beverages',
        alias:'/beverages',
        name:'beverages-menu',
        component: BeverageMenu
    }
];


const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;