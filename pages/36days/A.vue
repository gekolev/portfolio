<template>
	<div class="holder-36days">
		<h1 class="context p-5 md:p-10">Letter explorations. Letter A.</h1>
		<div
			class="content"
			ref="main">
			<svg
				viewBox="0 0 1080 1080"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1_2)">
					<rect
						width="1080"
						height="1080"
						fill="white" />

					<path
						class="first"
						d="M272.56 901.392L172 941.512L468.955 131L557.232 150.25L867 941.512L769.624 956L522.659 259.226L511.64 252.779L272.56 901.392Z"
						fill="black" />

					<path
						class="second"
						d="M250.145 617.901L219 696L766.255 593.355L942 426L250.145 617.901Z"
						fill="black" />

					<!-- BORDER MARKERS -->
					<line
						x1="25.5"
						y1="4.37114e-08"
						x2="25.5"
						y2="50"
						stroke="black" />
					<line
						x1="50"
						y1="25.5"
						x2="-4.37114e-08"
						y2="25.5"
						stroke="black" />
					<line
						x1="25.5"
						y1="1030"
						x2="25.5"
						y2="1080"
						stroke="black" />
					<line
						x1="50"
						y1="1055.5"
						x2="-4.37114e-08"
						y2="1055.5"
						stroke="black" />
					<line
						x1="1055.5"
						y1="4.37114e-08"
						x2="1055.5"
						y2="50"
						stroke="black" />
					<line
						x1="1080"
						y1="25.5"
						x2="1030"
						y2="25.5"
						stroke="black" />
					<line
						x1="1055.5"
						y1="1030"
						x2="1055.5"
						y2="1080"
						stroke="black" />
					<line
						x1="1080"
						y1="1055.5"
						x2="1030"
						y2="1055.5"
						stroke="black" />
					<!-- BORDER MARKERS -->
				</g>
				<defs>
					<clipPath id="clip0_1_2">
						<rect
							width="1080"
							height="1080"
							fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
		<div class="controls flex justify-between p-5 md:p-10">
			<button @click="toggleTimeline">Toggle</button>
			<button @click="pauseTimeline">Pause</button>
			<button @click="playTimeline">Play</button>
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

	const toggleTimeline = () => {
		tl.value.reversed(!tl.value.reversed())
	}

	const playTimeline = () => {
		tl.value.play()
	}

	const pauseTimeline = () => {
		tl.value.pause()
	}

	const restartTimeline = () => {
		tl.value.restart()
	}

	const reverseTimeline = () => {
		tl.value.reverse()
	}

	onMounted(() => {
		ctx.value = gsap.context((self) => {
			const first = self.selector(".first")
			const second = self.selector(".second")
			tl.value = gsap
				.timeline()
				.from(first, {
					transformOrigin: "center center",
					rotation: () => {
						let randomNum = Math.floor(Math.random() * 10)
						return randomNum
					},
					ease: "power2.inOut",
					repeat: -1,
					yoyo: true
				})
				.to(second, {
					ease: "power4.inOut",
					repeat: -1,
					yoyo: true,
					rotation: () => {
						let randomNum = Math.floor(Math.random() * 10)
						return randomNum
					}
					// opacity: 0
				})
				.reverse()
		}, main.value) // <- Scope!
		tl.value.play()
	})

	onUnmounted(() => {
		ctx.value.revert() // <- Easy Cleanup!
	})
</script>

<style lang="scss" scoped>
	.second {
		opacity: 1;
	}
</style>
