<script lang="ts">
	interface HeroVideoProps {
		video: string;
	}

	let { video }: HeroVideoProps = $props();
</script>

<div class="absolute inset-0 z-0">
	<video class="h-full w-full object-cover" autoplay loop muted playsinline>
		<source src={video} type="video/mp4" />
		<div class="bg-primary-800 absolute inset-0"></div>
	</video>
	<div class="from-primary-900/80 to-primary-800/50 absolute inset-0 bg-gradient-to-r"></div>
</div>
