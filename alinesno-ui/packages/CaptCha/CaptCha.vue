<template>
    <div>
        <SliderPop @success="verifySuccess" v-show="mode === 'slide-pop'" :applicationCode="applicationCode"/>
        <SliderFixed @success="verifySuccess" v-show="mode === 'slide-fixed'" :applicationCode="applicationCode"/>
        <PointPop @success="verifySuccess" v-show="mode === 'point-pop'" :applicationCode="applicationCode"/>
        <PointFixed @success="verifySuccess" v-show="mode === 'point-fixed'"   :applicationCode="applicationCode"/>
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
          },
          applicationCode: {
            type: String,
            default: ''
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