<template>
    <div>
        <h1>我是bm界面</h1>
        <h2>{{ $store.state.contuned * $store.state.contuned }}</h2>
        <h2>{{ $store.getters.powerCounter }}</h2>
        <h1>原数据</h1>
        <h2>{{ $store.getters.students }}</h2>
        <h1>过滤器</h1>
        <h2>{{ $store.getters.fliter(20) }}</h2>
        




    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>

</style>