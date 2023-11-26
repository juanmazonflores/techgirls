<template>
<div class="config">
    <CardConfig></CardConfig>
</div>
   
</template>

<script>
    import CardConfig from '../components/CardConfig.vue'
    
    export default {
        name: 'SettingView',
        components: {
            CardConfig,
        }
    }

    
</script>

<style scoped>
*{
		margin-top: 50px;
	}
</style>
    
