<template>
	<div class="layout">
		<div class="layout-title"></div>
		<div class="layout-content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, reactive, defineComponent } from 'vue';
</script>
<style lang="less" scoped>
.layout {
	width: 100%;
	height: 100%;
	&-title {
		height: 50px;
	}
	&-content {
		height: calc(100% - 50px);
	}
}
</style>
