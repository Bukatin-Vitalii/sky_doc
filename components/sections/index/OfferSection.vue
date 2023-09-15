<template>
	<div class="wrapper">
		<div class="offer-section">
			<div class="offer-section__container container">
				<h1 class="offer-section__title">
					<span class="offer-section__title offer-section__title--span">{{ $t('index.offer_section.title_1') }}</span>
					<span class="offer-section__title offer-section__title--span">{{ $t('index.offer_section.title_2') }}</span>
					<span class="offer-section__title offer-section__title--span">{{ $t('index.offer_section.title_3') }}</span>
				</h1>
				<p class="offer-section__text">
					{{ $t('index.offer_section.subtitle') }}
				</p>
				<UiButton :text="$t('btns.contact')" />
			</div>
		</div>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
	const spans = gsap.utils.toArray('.offer-section__title--span');
	spans.forEach((span, idx) => {
		gsap.from(span, {
			scrollTrigger: {
				trigger: span,
				start: 'top 90%',
				end: 'top 90%',
				toggleActions: 'play none none reverse',
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			delay: idx * 0.2,
		});
	});
});
</script>

<style lang="scss" scoped>
.wrapper {
	position: relative;
}

.offer-section {
	padding: 100px 0;
	position: relative;
	background: linear-gradient(45deg, rgb(18, 53, 89) 0%, rgba(52, 89, 141, 0.88) 48%, rgb(132, 183, 200) 87%);
	clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);


	@include mobile {
		padding: 70px 0 80px;
	}

	&__container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 60px;
		position: relative;

		@include mobile {
			gap: 40px;
		}
	}

	&__title {
		font-family: $font-family-headers;
		color: $color-white;

		font-weight: 400;
		display: flex;
		flex-direction: column;
		gap: 7px;



		&--span {
			display: block;
			font-size: 65px;
			position: relative;

			@include tablet {
				font-size: 50px;
			}

			@include mobile {
				font-size: 30px;
			}
		}
	}

	&__text {
		color: $color-white;
		font-size: 26px;
		font-weight: 400;

		@include mobile {
			font-size: 16px;
		}
	}
}
</style>