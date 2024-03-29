// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
		configPath: "tailwind.config",
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true
	},
	css: ["~/assets/css/36days.scss"]
})
