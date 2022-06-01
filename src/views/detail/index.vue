<template>
	<div class="detail">
		<div class="detail-left">
			<el-steps direction="vertical" :active="1">
				<el-step></el-step>
				<el-step title="Step 2" />
				<el-step title="Step 3" />
			</el-steps>
		</div>
		<div class="detail-right"></div>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, reactive, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const info = JSON.parse(route.params.json as any)

</script>

<style lang="less" scoped></style>
