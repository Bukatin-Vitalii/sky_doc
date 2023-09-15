import svgLoader from 'vite-svg-loader'
import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	css: ["@/assets/styles/index.scss"],
	vite: {
		plugins: [
			svgLoader({
				svgo: false,
			}),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use \'sass:math\'; @use "@/assets/styles/utils" as *;',
				},
			},
		},
	},
	modules: ['nuxt-swiper', '@nuxtjs/i18n'],
	i18n: {
		vueI18n: './plugins/localization/i18n.js',
		defaultLocale: 'ua',    // default locale of your project for Nuxt pages and routings
	},
});

