<template>
    <div class="">
        <DetailNavBar></DetailNavBar>
    </div>
</template>

<script>
import DetailNavBar from "./detailnavbar/DetailNavBar";
export default {
    name: "Detail",
    components: {
        DetailNavBar
    },
    data() {
        return {
            id: null
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
        this.id = this.$route.params.id
        console.log(this.$route.params.id)
    },
    mounted() {
        console.log(this.$route.params.id)
    },
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {
        console.log(this.$route.params.id)
    },
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style scoped>

</style>
