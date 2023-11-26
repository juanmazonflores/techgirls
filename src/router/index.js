import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/ProfileView.vue'),
	},
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/SearchView.vue'),
	},
	{
		path: '/friends',
		name: 'friends',
		component: () => import('../views/FriendsView.vue'),
	},
	{
		path: '/settings',
		name: 'settings',
		component: () => import('../views/SettingView.vue'),
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router