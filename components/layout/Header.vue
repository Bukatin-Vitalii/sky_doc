<template>
	<div class="navigaion">
		<div class="navigation__container">
			<img src="/images/logo.png" alt="logo" class="navigation__logo">
			<nav class="navigation__menu menu">
				<ul class="menu__list">
					<li class="menu__item" v-for="(link, idx) in links" :key="idx">
						<nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
					</li>
					<div class="dropdown" ref="dropdownRef">
						<div class="dropdown__selected-option" @click="toggleDropdown">
							<div v-for="(lang, index) in languages" :key="index">
								<img v-show="selectedLanguage.locale === lang.locale" :src="`/images/${lang.icon}.png`" alt=""
									class="dropdown__flag-icon">
							</div>

							{{ selectedLanguage.name }}
							<UiIcon name="arrow-black" class="dropdown__caret" :class="{ active: isOpen }"></UiIcon>
						</div>
						<ul v-if="isOpen" class="dropdown__options">
							<li v-for="(language, index) in languages" :key="index" @click="selectLanguage(index)">
								<img :src="`/images/${language.icon}.png`" alt="" class="dropdown__flag-icon">
								{{ language.name }}
							</li>
						</ul>
					</div>
				</ul>
			</nav>
			<button @click="openMenu" type="button" class="navigation__burger burger">
				<span :class="isOpenMenu ? 'burger__span--active' : ''" class="burger__span"></span>
			</button>
		</div>
		<nav class="burger__menu" :class="isOpenMenu ? 'burger__menu--active' : ''">
			<ul class="burger__menu--list">
				<li class="burger__menu--item" v-for="(link, idx) in links" :key="idx">
					<nuxt-link @click="closeMenu" :to="link.path">{{ link.name }}</nuxt-link>
				</li>
				<div class="dropdown" ref="dropdownRef">
					<div class="dropdown__selected-option" @click="toggleDropdown">
						<div v-for="(lang, index) in languages" :key="index">
							<img v-show="selectedLanguage.locale === lang.locale" :src="`/images/${lang.icon}.png`" alt=""
								class="dropdown__flag-icon">
						</div>

						{{ selectedLanguage.name }}
						<UiIcon name="arrow-black" class="dropdown__caret" :class="{ active: isOpen }"></UiIcon>
					</div>
					<ul v-if="isOpen" class="dropdown__options dropdown__options--mobile">
						<li v-for="(language, index) in languages" :key="index" @click="selectLanguage(index)">
							<img :src="`/images/${language.icon}.png`" alt="" class="dropdown__flag-icon">
							{{ language.name }}
						</li>
					</ul>
				</div>
			</ul>
		</nav>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { locale, setLocale } = useI18n()
const { t } = useI18n();

const links = computed(() => {
	return [
		{ name: t('menu.main'), path: '/' },
		{ name: t('menu.about_me'), path: '/about' },
		{ name: t('menu.diseases'), path: '/diseases' },
		{ name: t('menu.treatments'), path: '/treatments' },
		{ name: t('menu.contact'), path: '/contact' },
	]
});
const isOpenMenu = ref(false);
const isOpen = ref(false);

const languages = [
	{
		name: 'EN',
		icon: 'enflag',
		locale: 'en',
	},
	{
		name: 'UA',
		icon: 'uaflag',
		locale: 'ua',
	},
];

const selectedLanguage = ref(languages[1]);

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const selectLanguage = (id) => {
	selectedLanguage.value = languages[id];
	setLocale(languages[id].locale);
	isOpen.value = false;
	isOpenMenu.value = false;
};

const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => {
	isOpen.value = false;
});

function navAnimation() {
	const navLinks = gsap.utils.toArray('.menu__item');
	navLinks.forEach((link) => {
		link.addEventListener('mouseleave', e => {
			link.classList.add('animate-out');
			setTimeout(() => {
				link.classList.remove('animate-out');
			}, 300);
		})
	})


	ScrollTrigger.create({
		start: 100,
		toggleClass: {
			targets: 'body',
			className: 'has-scrolled',
		},
		end: 'bottom bottom-=200',
		// markers: true,
	});
}

function openMenu() {
	isOpenMenu.value = !isOpenMenu.value;
}

function closeMenu() {
	isOpenMenu.value = false;
}

onMounted(() => {
	navAnimation();
});
</script>

<style lang="scss" scoped>
.navigation {
	&__container {
		width: 100%;
		height: 100px;
		margin: 0 auto;
		padding: 5px 15px;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 5;
		transition: all 0.3s ease 0s;
		overflow: visible;

		@include laptop {
			height: 65px;
		}

		.has-scrolled & {
			height: 65px;
		}
	}

	&__logo {
		display: block;
		width: 300px;
		object-fit: cover;
		transition: all 0.3s ease 0s;
		height: 100px;

		@include laptop {
			height: 65px;
			width: 250px;
		}

		.has-scrolled & {
			height: 65px;
			width: 250px;
		}
	}
}

.menu {
	display: block;

	@include mobile {
		display: none;
	}

	&__list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}

	&__item {
		list-style: none;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		color: $color-blue-2;
		position: relative;
		overflow: hidden;

		@include laptop {
			font-size: 15px;
		}

		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			background-color: transparent;
			transition: all 0.3s ease 0s;
			transform: translateX(-101%);
			margin-top: 2px;
		}


		&:hover {
			&::after {
				transform: translateX(0);
				background-color: $color-blue;
			}
		}
	}
}

.menu__item.animate-out {
	&::after {
		transition: all 0.3s ease 0s;
		transform: translateX(100%);
	}
}

.burger {
	display: none;

	@include mobile {
		display: block;
	}

	&__span {
		display: block;
		width: 30px;
		height: 2px;
		background-color: $color-blue-2;
		position: relative;
		transition: all 0.3s ease 0s;

		&::before,
		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			background-color: $color-blue-2;
			position: absolute;
			left: 0;
			transition: all 0.3s ease 0s;
		}

		&::before {
			top: -10px;
		}

		&::after {
			top: 10px;
		}

		&--active {
			background-color: transparent;

			&::before {
				top: 0;
				transform: rotate(45deg);
			}

			&::after {
				top: 0;
				transform: rotate(-45deg);
			}
		}
	}

	&__menu {
		display: none;
		height: 100vh;
		position: fixed;
		top: 65px;
		transform: translateX(100%);
		width: 100%;
		background-color: #fff;
		z-index: 5;
		transition: all 0.3s ease 0s;

		@include mobile {
			display: block;
		}

		&--active {
			transform: translateX(0);
		}

		&--list {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 20px;
			height: 100%;
		}

		&--item {
			list-style: none;
			font-size: 18px;
			font-weight: 500;
			letter-spacing: 1px;
			text-transform: uppercase;
			transition: all 0.3s ease 0s;
			cursor: pointer;
			color: $color-blue-2;
			position: relative;
			overflow: hidden;
		}
	}
}

.dropdown {
	position: relative;
	display: flex;

	&__selected-option {
		cursor: pointer;
		display: flex;
		align-items: center;

		font-size: 18px;
		font-weight: 500;
		letter-spacing: 1px;
		color: $color-blue-2;
	}

	&__flag-icon {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}

	&__options {
		position: absolute;
		top: 30px;
		right: 10px;
		background-color: #fff;
		padding: 0;
		width: 75px;
		border: 1px solid #e5e5e5;

		& li {
			padding: 10px 10px 10px 10px;
			cursor: pointer;
			display: flex;
			align-items: center;

			font-size: 14px;
			font-weight: 400;
			color: $color-blue-2;
			transition: all 0.3s ease 0s;

			&:hover {
				background-color: #f5f5f5;
				text-decoration: underline;
			}
		}

		&--mobile {
			right: auto;
		}
	}

	&__caret {
		margin-left: 10px;
		transition: all 0.3s ease 0s;

		&.active {
			transform: rotate(180deg);
		}
	}
}
</style>