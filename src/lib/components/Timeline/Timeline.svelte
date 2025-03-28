<script lang="ts">
	import type { Goal } from '$lib/interfaces/goal';

	import { generateRandomId } from '$lib/utils/generators';
	import { ABOUT_US_TABS } from '$lib/constants/tabs';

	import TimelineGoal from '$lib/components/Timeline/TimelineGoal.svelte';

	interface Props {
		goals: Goal[];
	}

	const { goals }: Props = $props();

	let activeTab = $state<string>('short-term');
	let indicatorPosition = $state<number>(0);

	const setActiveTab = (tabId: string, index: number): void => {
		activeTab = tabId;
		indicatorPosition = index;
	};
</script>

{#snippet renderStep(index: number, bgColor: string, fromColor: string, toColor: string)}
	<div class="mb-8 flex items-center">
		<div
			class="{bgColor} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white shadow-md"
		>
			<span class="font-bold">{index}</span>
		</div>
		<div class="{fromColor} {toColor} ml-4 h-1 flex-grow bg-gradient-to-r"></div>
	</div>
{/snippet}

<div>
	<div class="mb-12 flex justify-center">
		<div class="relative flex rounded-full bg-gray-100 p-1">
			{#each ABOUT_US_TABS as tab, index (generateRandomId().concat(String(index)))}
				<button
					class="timeline-nav-btn rounded-full px-6 py-2 text-center {activeTab === tab.id
						? 'active'
						: ''}"
					onclick={() => setActiveTab(tab.id, index)}
				>
					{tab.label}
				</button>
			{/each}
			<div
				class="timeline-indicator bg-primary-600 absolute top-0 left-0 h-full rounded-full transition-all duration-300"
				style="transform: translateX({indicatorPosition * 100}%); width: {100 /
					ABOUT_US_TABS.length}%;"
			></div>
		</div>
	</div>
	<div class="timeline-container">
		{#if activeTab === 'short-term'}
			<div id="short-term" class="timeline-section">
				{@render renderStep(1, 'bg-secondary-500', 'from-secondary-500', 'to-primary-500')}

				<div class="ml-16 space-y-6">
					{#each goals[0].goals as goal (generateRandomId().concat(String(goals[0].goals.indexOf(goal))))}
						<TimelineGoal
							text={goal}
							borderColor="border-secondary-400"
							textColor="text-secondary-500"
						/>
					{/each}
				</div>
			</div>
		{:else if activeTab === 'medium-term'}
			<div id="medium-term" class="timeline-section">
				{@render renderStep(2, 'bg-primary-600', 'from-primary-600', 'to-primary-400')}

				<div class="ml-16 space-y-6">
					{#each goals[1].goals as goal (generateRandomId().concat(String(goals[1].goals.indexOf(goal))))}
						<TimelineGoal
							text={goal}
							borderColor="border-primary-500"
							textColor="text-primary-600"
						/>
					{/each}
				</div>
			</div>
		{:else if activeTab === 'long-term'}
			<div id="long-term" class="timeline-section">
				{@render renderStep(3, 'bg-primary-800', 'from-primary-800', 'to-secondary-600')}

				<div class="ml-16 space-y-6">
					{#each goals[2].goals as goal (generateRandomId().concat(String(goals[2].goals.indexOf(goal))))}
						<TimelineGoal
							text={goal}
							borderColor="border-primary-700"
							textColor="text-primary-800"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.timeline-nav-btn {
		color: var(--color-primary-700);
		font-weight: 500;
		transition: color 0.3s ease;
		position: relative;
		z-index: 10;
	}

	.timeline-nav-btn.active {
		color: white;
	}

	.timeline-section {
		animation: fadeIn 0.5s ease forwards;
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
