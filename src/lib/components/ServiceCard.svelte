<script lang="ts">
	export let title: string;
	export let imageSrc: string;
</script>

<div class="card card-hover flex flex-col variant-filled-secondary bg-opacity-50 pb-12 h-full">
	<header class="p-4">
		<h3 class="h3 font-light text-xl">{title}</h3>
	</header>
	<img src={imageSrc} alt={title} class="max-h-40" />
	<article class="p-4">
		<p class="text-primary-900 font-extralight leading-relaxed text-base">
			<slot />
		</p>
	</article>
</div>
