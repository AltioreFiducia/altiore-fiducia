<script lang="ts">
	import type { Service } from '$lib/interfaces/service';

	import { generateRandomId } from '$lib/utils/generators';

	interface ServiceCardProps {
		service: Service;
	}

	let { service }: ServiceCardProps = $props();
</script>

<div
	class="bg-primary-700 flex h-full flex-col overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:transform"
>
	<div class="bg-primary-600 relative h-48 overflow-hidden">
		<img
			src={service.image}
			alt={service.title}
			class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
		/>
	</div>
	<div class="p-6">
		<h3 class="text-secondary-300 mb-3 text-xl font-bold">{service.title}</h3>
		<p class="text-gray-300">
			{service?.description}
		</p>
		{#if service.bullets}
			<ul class="list-disc pl-5">
				{#each service.bullets as bullet (generateRandomId().concat(String(service.bullets.indexOf(bullet))))}
					<li class="text-gray-300">{bullet}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
