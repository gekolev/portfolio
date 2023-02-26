<template>
	<div>
		<div class="controls flex justify-between p-20 mt-10">
			<button @click="toggleTimeline">Toggle</button>
			<button @click="playTimeline">Play</button>
			<button @click="pauseTimeline">Pause</button>
			<button @click="restartTimeline">Restart</button>
			<button @click="reverseTimeline">Reverse</button>
		</div>
	</div>
</template>

<script setup>
	import gsap from "gsap"

	const ctx = ref()
	const main = ref()
	const tl = ref()

	// const animation = gsap.timeline({paused: true});

	const toggleTimeline = () => {
		tl.value.reversed(!tl.value.reversed())
	}

	const playTimeline = () => {
		tl.value.play()
	}

	const restartTimeline = () => {
		tl.value.restart()
	}

	const pauseTimeline = () => {
		tl.value.pause()
	}

	const reverseTimeline = () => {
		tl.value.reverse()
	}

	onMounted(() => {
		ctx.value = gsap.context((self) => {
			const dot = self.selector(".dot")
			tl.value = gsap
				.timeline()
				.from(dot, {
					duration: 0.5,
					opacity: 0,
					ease: "power4.out",
					scale: 0.01,
					y: -50,
					x: -50,
					stagger: 0.009
				})
				.reverse()
		}, main.value) // <- Scope!

		console.log("mounted")
	})

	onUnmounted(() => {
		ctx.value.revert() // <- Easy Cleanup!
	})
</script>

<style lang="scss" scoped></style>
