<template>
	<AMap :config="config" @clickMarkerFn="clickMarkerFn"></AMap>
	<el-dialog
		v-model="dialog.visible"
		:title="dialog.title"
		width="30%"
		:before-close="handleCloseFn"
	>
		<span>{{ dialog.text }}</span>
		<template #footer>
			<el-row justify="center">
				<el-button type="primary" @click="dialog.visible = false">关闭</el-button>
			</el-row>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import AMap from './components/AMap.vue';
const mock = [
	{
		name: '北京',
		position: [116.41667, 39.91667],
		text: '这里是北京',
	},
	{
		name: '成都',
		position: [104.06667, 30.66667],
		text: '这里是成都',
	},
	{
		name: '杭州',
		position: [120.2, 30.26667],
		text: '这里是杭州',
	},
	{
		name: '重庆',
		position: [106.45, 29.56667],
		text: '这里是重庆',
	},
];
const config = {
	position: mock,
	zoom: 4,
};

const dialog = ref({
	visible: false,
	title: '',
	text: '',
});

const handleCloseFn = () => {
	dialog.value.visible = false;
};

const clickMarkerFn = (markerInfo: any) => {
	const { name: title, text } = markerInfo;
	dialog.value = {
		visible: true,
		title,
		text,
	};
};
</script>

<style lang="less" scoped></style>
