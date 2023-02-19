<template>
    <main class="article-page p-5">
        <ContentDoc v-slot="{ doc }">
            <article class="">
                <div class="flex justify-between">
                    <h1 class="article-title"> {{ doc.title }} </h1>
                    <nuxt-link class="arrow" to="/blog"> &#10132; </nuxt-link>
                </div>
                <span class="article-description">{{ doc.description }}</span>
                <br /> <br />
                <ContentRenderer class="prose prose-slate" :value="doc" />

                <div class="mt-10 w-full text-center underline">
                    <nuxt-link to="/blog"> ALL ARTICLES </nuxt-link>
                </div>

            </article>
        </ContentDoc>
    </main>
</template>

<script setup>

// import Lenis from '@studio-freight/lenis'

// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//   direction: 'vertical', // vertical, horizontal
//   gestureDirection: 'vertical', // vertical, horizontal, both
//   smooth: true,
//   mouseMultiplier: 1,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false,
// })

// //get scroll value
// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//   console.log({ scroll, limit, velocity, direction, progress })
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
</script>

<style lang="scss">
// ARTICLE STYLING
body {
    overflow-y: visible !important;
    overflow-x: visible !important;
}

article{
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
}

.article-title{
    font-size: 3em;
    font-weight: bold;
}
.article-description{
    font-size: 1.5em;
    font-style: italic;
}
.arrow{
    font-size: 3em;
    transform: rotate(180deg);
    display: inline-block; 
}
</style>