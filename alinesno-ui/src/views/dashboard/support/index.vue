<template>
    <div class="main-container">
        <support-normal />
        <support-professor />
    </div>
</template>

<script>
import SupportNormal from './normal'
import SupportProfessor from './professor'

export default {
    components: {
        SupportNormal ,
        SupportProfessor
    },
};
</script>

<style scoped lang="scss">
.main-container {
    max-width: 1200px ;
    top: 0px !important;
    margin-bottom: 100px;
}
</style>


