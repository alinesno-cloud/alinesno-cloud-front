<template>
    <div>
        <SliderPop @success="verifySuccess" v-show="mode === 'slide-pop'"/>
        <SliderFixed @success="verifySuccess" v-show="mode === 'slide-fixed'"/>
        <PointPop @success="verifySuccess" v-show="mode === 'point-pop'"/>
        <PointFixed @success="verifySuccess" v-show="mode === 'point-fixed'"/>
    </div>
</template>

<script>

    import SliderPop from "./verifition/components/SliderPop";
    import SliderFixed from "./verifition/components/SliderFixed";
    import PointPop from "./verifition/components/PointPop";
    import PointFixed from "./verifition/components/PointFixed";
    export default {
        props:{
            mode: {
              type: String,
              default: () => ''
          }
        },
        name: "CaptCha",
        components: {
            SliderPop,
            SliderFixed,
            PointPop,
            PointFixed
        },
        methods: {
            verifySuccess(data) {
                this.$emit('success', data)
            }
        }
    }
</script>

<style scoped>

</style>