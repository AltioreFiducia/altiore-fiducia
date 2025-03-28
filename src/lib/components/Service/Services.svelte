<script lang="ts">
	import type { Service } from '$lib/interfaces/service';

	import { generateRandomId } from '$lib/utils/generators';

	import ServiceCard from '$lib/components/Service/ServiceCard.svelte';

	interface Props {
		services: Service[];
	}

	let { services }: Props = $props();
</script>

{#snippet renderServiceCard(service: Service)}
	<ServiceCard {service} />
{/snippet}

<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
	{#each services as service, index (generateRandomId().concat(String(index)))}
		<div class="service-card flex h-full flex-col" style="animation-delay: {index * 0.2}s;">
			{@render renderServiceCard(service)}
		</div>
	{/each}
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.service-card {
		animation: fadeIn 0.5s ease-out forwards;
		animation-delay: 0s;
		opacity: 0;
	}
</style>
