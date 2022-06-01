<template>
	<div>
		<p>hello,{{ ceshiVal }}</p>
		<div @click="handleClick">11132</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, reactive, defineComponent } from 'vue';
// const route = useRoute()
// const router = useRouter()
// const router = useStore()
const name = ref(''); // 初始化name为一个空的字符串
const ceshiVal = computed(() => {
	return name;
});
watch(
	name,
	(newVal) => {
		console.log(newVal);
	},
	{ immediate: true, deep: true }
);
const handleClick = () => {
	name.value = 'lemon'; // 需要注意的是修改值时，不适用this
};
</script>
