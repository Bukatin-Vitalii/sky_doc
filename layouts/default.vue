<script setup></script>

<template>
	<div class="layout">
		<layout-header class="layout__header"></layout-header>

		<div class="layout__page">
			<slot></slot>
		</div>

		<layout-footer></layout-footer>
	</div>
</template>

<style scoped lang="scss">
.layout {
	position: relative;

	&__header {
		position: relative;
	}

	&__page {
		margin-top: 100px;

		@include laptop {
			margin-top: 65px;
		}
	}
}
</style>
