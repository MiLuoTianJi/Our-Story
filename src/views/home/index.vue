<template>
	<timeAxis :data="data" @check="check"></timeAxis>
</template>
<script lang="ts" setup>
import { ref, computed, watch, reactive, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import timeAxis from './components/timeAxis.vue';
const data = ref(
	Array(10)
		.fill(0)
		.map(() => ({
			time: '2022-5-5',
			title: '标题',
			desc: '这是描述'.repeat(Math.random() * 100),
		}))
);
const router = useRouter()
const check = (item: any) => {
    router.push({
        path:"/detail",
        params:item
    })
};


</script>
