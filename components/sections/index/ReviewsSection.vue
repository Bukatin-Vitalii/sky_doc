<template>
	<div class="reviews">
		<div class="reviews__container container">
			<h2 class="reviews__title">
				{{ $t("index.reviews_section.title") }}
			</h2>
			<p class="reviews__text">
				{{ $t("index.reviews_section.subtitle") }}
			</p>
			<Swiper :modules="[SwiperAutoplay, SwiperPagination]" :slides-per-view="2" :loop="true" :autoplay="{
				delay: 5000,
				disableOnInteraction: true,
			}" :breakpoints="{
	320: {
		slidesPerView: 1,
	},
	768: {
		slidesPerView: 2,
	},
}" :pagination="{
	clickable: true,
}">
				<SwiperSlide v-for="(review, idx) in reviews" :key="idx">
					<div class="reviews__item">
						<div class="reviews__item-header">
							<div class="reviews__item-name">{{ review.name }}</div>
							<div class="reviews__item-date">{{ review.date }}</div>
						</div>
						<div class="reviews__item-text">{{ review.text }}</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n();
const reviews = computed(() => {
	return [
		{
			name: t("index.reviews_section.reviews.name_1"),
			text: t("index.reviews_section.reviews.text_1"),
			date: "12.12.2021",
		},
		{
			name: t("index.reviews_section.reviews.name_2"),
			text: t("index.reviews_section.reviews.text_2"),
			date: "12.03.2022",
		},
		{
			name: t("index.reviews_section.reviews.name_3"),
			text: t("index.reviews_section.reviews.text_3"),
			date: "12.12.2021",
		},
		{
			name: t("index.reviews_section.reviews.name_4"),
			text: t("index.reviews_section.reviews.text_4"),
			date: "12.12.2021",
		},
	];
}) 
</script>

<style lang="scss" scoped>
.reviews {
	padding: 100px 0;

	@include mobile {
		padding: 50px 0;
	}

	&__title {
		font-size: 38px;
		color: $color-blue-2;
		text-align: center;
		margin-bottom: 30px;

		@include mobile {
			font-size: 25px;
			margin-bottom: 20px;
		}
	}

	&__text {
		font-size: 16px;
		line-height: 1.5;
		text-align: center;
		margin-bottom: 30px;

		@include mobile {
			font-size: 14px;
			margin-bottom: 20px;
		}
	}

	&__item {
		background-color: #fff;
		padding: 20px;
		margin: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	&__item-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;

		@include mobile {
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
	}

	&__item-name {
		font-size: 18px;
		font-weight: 700;
		color: $color-blue-2;
	}

	&__item-date {
		font-size: 14px;
		color: $color-black-2;
	}

	&__item-text {
		font-size: 16px;
		line-height: 1.5;

		@include mobile {
			font-size: 14px;
		}
	}
}
</style>