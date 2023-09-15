<template>
	<div class="footer">
		<div class="footer__container container">
			<!-- <UiIcon class="footer__logo" name="logo" /> -->
			<img src="/images/logo.png" alt="logo" class="footer__logo">
			<span class="footer__copyright">
				Copyright 2023 Vladislav Svietlytskyi
			</span>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.footer {
	padding: 15px 0;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	&__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;


		@include mobile {
			gap: 20px;
		}
	}

	&__logo {
		display: block;
		width: 200px;
		object-fit: contain;

		@include mobile {
			height: 50px;
		}
	}

	&__copyright {
		color: $color-blue-2;

		@include mobile {
			font-size: 14px;
		}
	}
}
</style>