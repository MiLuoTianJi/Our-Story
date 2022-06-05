<template>
	<div class="layout">
		<div class="layout-title">
			<div class="layout-title-label">我们的故事</div>
			<el-menu
				:default-active="activeMenu"
				class="layout-title-menus"
				mode="horizontal"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
				@select="selectMenuFn"
				router
			>
				<el-menu-item index="axis">时间轴</el-menu-item>
				<el-menu-item index="foot">足迹</el-menu-item>
			</el-menu>
			<div class="layout-title-player"></div>
		</div>
		<div class="layout-content" :style="{ height: `calc(100% - ${contentHeight}px)` }">
			<router-view></router-view>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, reactive, defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const activeMenu = ref(route.name || 'axis');
const contentHeight = ref();
onMounted(() => {
	setContentHeight();
	// window.onresize = setContentHeight;
});
const setContentHeight = () => {
	const titleBox = document.getElementsByClassName('layout-title')[0];
	const rect = titleBox.getBoundingClientRect();
	contentHeight.value = rect.bottom - rect.top;
};
const selectMenuFn = (key: string, keyPath: string[]) => {
	// router.push({
	// 	path: `/${key}`,
	// });
};
</script>
<style lang="less" scoped>
.layout {
	width: 100%;
	height: 100%;
	&-title {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		background: #545c64;
		&-label {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20px;
			font-family: fangsong;
			width: 20%;
			color: #fff;
		}
		&-menus {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60%;
			/deep/.el-menu--horizontal {
				border-bottom: 0;
			}
		}
		&-player {
			width: 20%;
		}
	}
	&-content {
	}
}
</style>
