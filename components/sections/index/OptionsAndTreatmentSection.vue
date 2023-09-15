<template>
	<div class="oat-section">
		<div class="oat-section__container container">
			<h2 class="oat-section__title">
				{{ $t('index.oat_section.title') }}
			</h2>
			<h3 class="oat-section__subtitle">
				{{ $t('index.oat_section.subtitle') }}
			</h3>
			<div class="oat-section__cards cards">
				<div class="cards__card card" v-for="(card, idx) in cards" :key="idx">
					<div class="card__top">
						<div class="card__img">
							{{ idx + 1 }}
						</div>
						<h4 class="card__title">
							{{ card.title }}
						</h4>
					</div>
					<p class="card__text">{{ card.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const { t } = useI18n();

const cards = computed(() => {
	return [
		{
			title: t('index.oat_section.cards.title_1'),
			text: t('index.oat_section.cards.text_1'),
		},
		{
			title: t('index.oat_section.cards.title_2'),
			text: t('index.oat_section.cards.text_2'),
		},
		{
			title: t('index.oat_section.cards.title_3'),
			text: t('index.oat_section.cards.text_3'),
		},
		{
			title: t('index.oat_section.cards.title_4'),
			text: t('index.oat_section.cards.text_4'),
		},
		{
			title: t('index.oat_section.cards.title_5'),
			text: t('index.oat_section.cards.text_5'),
		},
		{
			title: t('index.oat_section.cards.title_6'),
			text: t('index.oat_section.cards.text_6'),
		}
	]
})

onMounted(() => {
	const cards = gsap.utils.toArray('.card');
	cards.forEach((card, idx) => {
		gsap.from(card, {
			scrollTrigger: {
				trigger: card,
				start: 'top 100%',
			},
			opacity: 0,
			x: 200,
			y: 200,
			duration: 0.5,
			stagger: 0.09,
		});
	});
});
</script>

<style lang="scss" scoped>
.oat-section {
	padding: 100px 0;

	@include tablet {
		padding: 70px 0;
	}

	@include mobile {
		padding: 50px 0;
	}

	&__title {
		// font-size: 38px;
		font-size: 38px;
		color: $color-blue-2;
		text-align: center;

		@include mobile {
			font-size: 25px;
		}

	}

	&__subtitle {
		font-size: 24px;
		color: $color-black-2;
		text-align: center;
		margin-top: 30px;
		font-weight: 300;

		@include mobile {
			font-size: 18px;
			margin-top: 20px;
		}
	}
}

.cards {
	margin-top: 70px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 60px;

	@include mobile {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}
}

.card {
	width: 45%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;

	@include mobile {
		width: 100%;
	}

	&__top {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}

	&__img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: $color-blue-2;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $color-white;
		flex: 0 0 50px;
	}

	&__title {
		color: $color-blue-2;
		font-size: 26px;

		@include mobile {
			font-size: 20px;
		}
	}

	&__text {
		font-size: 24px;
		color: $color-black-2;
		font-weight: 300;

		@include mobile {
			font-size: 18px;
		}
	}
}
</style>