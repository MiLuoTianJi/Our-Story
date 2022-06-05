<template>
	<div class="axis">
		<div class="axis-item" v-for="(item, index) in data" :key="index" :style="getHeight(index)">
			<div class="axis-item-line">
				<div class="axis-item-line-circle"></div>
			</div>
			<div class="axis-item-content" :style="itemStyle(index)">
				<div class="axis-item-content-time">{{ item.time }}</div>
				<el-card :body-style="{}">
					<div class="axis-item-content-title">
						<div @click="detailFn(item)">{{ item.title }}</div>
						<!-- <el-button type="primary" :icon="View" /> -->
					</div>
					<div class="axis-item-content-desc">{{ item.desc }}</div>
				</el-card>
			</div>
		</div>
		<el-backtop target=".axis" :right="100" :bottom="100" />
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, reactive, defineComponent, defineProps, defineEmits, onMounted } from 'vue';
import { View } from '@element-plus/icons-vue';
const props = defineProps({
	data: {
		type: Array,
		default: ()=>[],
	},
});

const emits = defineEmits(['check']);
const heights = ref([]);

onMounted(() => {
	setHeights();
	// window.onresize = setHeights;
});
const setHeights = () => {
	const nowHeights: any = document.getElementsByClassName('axis-item-content');
	const len = nowHeights.length;
	for (let i = 0; i < len; i++) {
		const item = nowHeights[i].getBoundingClientRect();
		const val: number = item.bottom - item.top;
		(heights.value as Array<any>).push(val < 90 ? 90 : val);
	}
};
const itemStyle = (index: number) => {
	const isOdd = (index & 1) === 1;
	return {
		left: isOdd ? '' : 'calc(50% + 20px)',
		right: isOdd ? 'calc(50% + 20px)' : '',
		'align-items': isOdd ? 'flex-end' : '',
	};
};
const getHeight = (index: number) => {
	return {
		height: `${heights.value[index] + 10}px`,
	};
};

const detailFn = (item: any) => {
	emits('check', item);
};
</script>

<style lang="less" scoped>
.axis {
	width: 100%;
	height: 100%;
	padding: 14px;
	box-sizing: border-box;
	overflow: auto;
	&-item {
		position: relative;
		width: 100%;
		min-height: 100px;
		&-line {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 2px;
			height: 100%;
			background: #e4e7ed;
			&-circle {
				position: absolute;
				top: -6px;
				left: 50%;
				transform: translateX(-50%);
				width: 12px;
				height: 12px;
				border-radius: 50%;
				background: #e4e7ed;
			}
		}
		&-content {
			position: absolute;
			top: -20px;
			display: flex;
			flex-flow: column;
			width: 45%;
			&-time {
				font-size: 22px;
				font-weight: 700;
				line-height: 40px;
			}
			&-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;
				& > div:first-of-type {
					font-weight: 700;
					font-size: 18px;
					cursor: pointer;
					user-select: none;
				}
			}
			&-desc {
			}
		}
	}
}
</style>
