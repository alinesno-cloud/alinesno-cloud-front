<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default  {
  name:  'App'
}
</script>

<style lang="scss">
	@import "assets/styles/element-variables.scss";
	body{
		.bg-color-base{
			background-color: $--background-color-base
		}
		.color-text-primary{
			color:$--color-text-primary;
		}
		.color-text-regular{
			color:$--color-text-regular;
		}
		.color-text-secondary{
			color:$--color-text-secondary;
		}
		.color-text-placeholder{
			color:$--color-text-placeholder;
		}
		.f-e-l{
			font-size:20px;
			line-height: 20px;
		}
		.f-l{
			font-size:18px;
			line-height: 18px;
		}
		.f-m{
			font-size:16px;
			line-height: 16px;
		}
		.f-b{
			font-size:14px;
			line-height: 14px;
		}
		.f-b{
			font-size:14px;
			line-height: 14px;
		}
		.f-s{
			font-size:13px;
			line-height: 13px;
		}
		.f-e-s{
			font-size:12px;
			line-height: 12px;
		}
	}
</style>