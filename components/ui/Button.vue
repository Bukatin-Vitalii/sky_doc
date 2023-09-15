<template>
	<div>
		<nuxt-link :to="props.to">
			<button type="button" class="button">
				{{ props.text }}
			</button>
		</nuxt-link>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	text: {
		type: String,
		default: 'default text',
	},
	to: {
		type: String,
		default: '',
	},
});
</script>

<style lang="scss" scoped>
.button {
	cursor: pointer;
	font-family: $font-family-buttons;
	color: $color-white;
	font-size: 22px;
	letter-spacing: 2px;
	background: $color-blue;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 7px 15px;
	border-radius: 4px;
	max-width: 350px;
	width: 100%;
	height: 50px;
	box-shadow: 0px 0px 5px 0px $color-blue-2;
	transition: all 0.3s ease 0s;

	@include tablet {
		font-size: 18px;
	}

	@include mobile {
		max-width: 300px;
	}

	&:hover {
		background: darken($color-blue, 4%);
		color: darken($color-white, 7%);
		box-shadow: 0px 0px 10px 0px $color-blue-2;
	}
}
</style>