<script lang="ts">
	import type { IService } from '$lib/interfaces/service.interface';
	export let service: IService;
</script>

<div class="card card-hover variant-filled-primary h-full">
	<div class="flex flex-col">
		<header class="bg-secondary-500 shadow-xl">
			<img
				src={service.image}
				alt={service.title}
				class="object-fit h-64 max-h-64 w-full shadow-xl"
			/>
			<h3 class="p-4 uppercase font-semibold text-black">{service.title}</h3>
		</header>
		<div class="p-4 mb-4">
			<article class="space-y-2">
				{#if service.description}
					<p class="leading-relaxed font-light">{service.description}</p>
				{/if}
				{#if service.list}
					<ul class="list-disc px-4 space-y-2">
						{#each service.list as item}
							<li class="font-extralight">{item}</li>
						{/each}
					</ul>
				{/if}
			</article>
		</div>
	</div>
</div>
