
<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post._id">
                <NuxtLink :to="post._path">
                    {{ post.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const {data: posts} = await useAsyncData('posts', () =>
queryContent('/blog').find())

</script>

<style lang="scss" scoped>

</style>