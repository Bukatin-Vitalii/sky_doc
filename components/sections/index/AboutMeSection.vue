<template>
	<div class="about-me-section">
		<div class="about-me-section__container container">
			<h2 class="about-me-section__title">
				{{ $t('index.about_section.title') }}
			</h2>
			<div class="about-me-section__content">
				<div class="about-me-section__image-wrap">
					<img class="about-me-section__image" src="/images/2.png" alt="doctor">
				</div>
				<div class="about-me-section__info">
					<h3 class="about-me-section__subtitle">
						{{ $t('index.about_section.subtitle') }}
					</h3>
					<p class="about-me-section__text">
						{{ $t('index.about_section.text_1') }}
					</p>
					<p class="about-me-section__text">
						{{ $t('index.about_section.text_2') }}
					</p>
				</div>
			</div>
			<UiButton class="about-me-section__button" :text="$t('btns.learn_more')" to="/about" />
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.about-me-section {
	padding: 100px 0;
	background-color: $color-blue-2;

	@include mobile {
		padding: 50px 0;
	}

	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 30px;

		@include tablet {
			flex-direction: column;
			gap: 50px;
		}
	}

	&__image-wrap {
		flex: 0 1 auto;
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s ease 0s;
		border-radius: 15px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

		&:hover {
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
		}

		@include mobile {
			max-width: 360px;
			height: 400px;
		}
	}

	&__info {
		width: 100%;
		flex: 0 1 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
	}

	&__title {
		font-family: $font-family-headers;
		font-size: 40px;
		color: $color-white;
		text-align: center;
		margin-bottom: 40px;

		@include tablet {
			font-size: 30px;
		}

		@include mobile {
			font-size: 25px;
		}
	}

	&__subtitle {
		display: block;
		color: $color-white;
		font-size: 30px;
		font-weight: 600;
		line-height: 1.5;

		@include tablet {
			font-size: 25px;
		}

		@include mobile {
			font-size: 20px;
		}
	}

	&__text {
		color: $color-white;
		font-size: 22px;
		font-weight: 300;
		line-height: 1.7;

		@include mobile {
			font-size: 18px;
		}
	}

	&__button {
		margin: 40px auto;
		display: block;
	}
}
</style>