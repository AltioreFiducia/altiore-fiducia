<script lang="ts">
	interface Props {
		isPrimary: boolean;
		title: string;
		description: string;
	}

	const { isPrimary, title, description }: Props = $props();
</script>

<div
	class="{!isPrimary
		? 'border-secondary-500 card-secondary'
		: 'border-primary-600 card-primary'} relative transform rounded-lg border-t-4 bg-white p-8 shadow-lg transition-transform hover:scale-[1.02]"
>
	<div
		class="{!isPrimary
			? 'bg-secondary-500'
			: 'bg-primary-600'} absolute -top-10 left-1/2 -translate-x-1/2 transform rounded-full p-4 shadow-md"
	>
		<span class="flex h-8 w-8 items-center justify-center text-xl font-bold text-white"
			>{title.charAt(0)}</span
		>
	</div>
	<h3 class="text-primary-800 mt-6 mb-4 text-center text-2xl font-bold">{title}</h3>
	<p class="text-lg text-gray-700">
		{description}
	</p>
</div>

<style>
	.card-primary {
		animation: fadeIn 1s ease forwards;
	}

	.card-secondary {
		animation: fadeIn 2s ease forwards;
	}

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
</style>
