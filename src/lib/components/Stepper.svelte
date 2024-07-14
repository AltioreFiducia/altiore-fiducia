<script lang="ts">
	import type { IObjective } from '$lib/interfaces/objective.interface';
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n/i18n';

	import translations from './translation';

	export let items: IObjective[];
</script>

<Stepper
	stepTerm=""
	buttonBack="variant-ghost"
	buttonBackLabel={$t(translations, 'STEPPER_BACK_LABEL')}
	buttonNext="variant-ghost-secondary"
	buttonNextLabel={$t(translations, 'STEPPER_NEXT_LABEL')}
	buttonCompleteLabel=""
	buttonComplete="bg-transparent cursor-default"
	class="shadow-xl p-8 rounded-xl bg-primary-500"
>
	{#each items as item, index}
		<Step stepTerm={item.title}>
			<svelte:fragment slot="header">
				<header><h3 class="h3 text-2xl">{item.title}</h3></header>
			</svelte:fragment>
			<div class="flex flex-col md:flex-row w-full justify-between mb-16 gap-8">
				<article>
					<ul class="list-disc px-8">
						{#each items[index].objectives as obj}
							<li class="font-light leading-relaxed">{obj}</li>
						{/each}
					</ul>
				</article>
			</div>
		</Step>
	{/each}
</Stepper>
