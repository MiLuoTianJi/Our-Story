<template>
	<div id="container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, defineEmits, computed, getCurrentInstance, watch } from 'vue';

const defaultConfig = {
	zoom: 5,
	position: [[104.065735, 30.659462]],
};

const props = defineProps({
	config: {
		type: Object,
		default: () => ({}),
	},
});

const emits = defineEmits(['clickMarkerFn']);

// 返回标记点
const getMarkerList = (arr: any) => {
	return arr.map((item: any) => {
		const { position } = item;
		const marker = new AMap.Marker({ position });
		//鼠标点击marker弹出自定义的信息窗体
		marker.on('click', function () {
			emits('clickMarkerFn', { ...item, marker });
		});
		return marker;
	});
};

onMounted(() => {
	mapInit();
});

const mapInit = () => {
	const config = Object.assign({}, defaultConfig, props.config);
	const { center, zoom, position } = config;
	// 定义地图
	const map = new AMap.Map('container', {
		resizeEnable: true,
		center: center,
		zoom: zoom,
	});
	// 定义标记点
	const markerList = getMarkerList(position);
	map.add(markerList);
};
</script>

<style lang="less" scoped>
#container {
	width: 100%;
	height: 100%;
}
</style>
