/**
 * ---------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------
 * */

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const routesList = { index: 'index', projects: 'projects' }

    return {
        provide: {
            typedRouter: nuxtApp.$router,
            routesList,
        },
    }
})
