<script lang="ts">
	import type { INavigation } from '$lib/interfaces/navigation.interface';

	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { locale, t } from '$lib/i18n/i18n';

	import navigation from '$lib/constants/navigation';
	import Icon from '$lib/components/Icon.svelte';
	import assets from '$lib/assets/assets';
	import translations from './translation';

	const drawerStore = getDrawerStore();

	const handleLanguageChange = (): void => {
		locale.set($locale === 'en' ? 'es' : 'en');
		window.location.reload();
	};

	const handleClickOnItem = (item: INavigation): void => {
		drawerStore.close();
		item.onClick();
	};
</script>

<div class="flex flex-col h-full p-4 gap-8">
	<div class="flex">
		<img src={assets.ALTIORE_LOGO} alt="Logo" data-testid="logo-test-id" height="32px" />
	</div>

	<div class="flex flex-col w-full gap-4">
		{#each navigation as navigationItem, index}
			<button
				type="button"
				class="btn variant-ringed-secondary p-4"
				data-testid="button-test-{index}"
				on:click={() => handleClickOnItem(navigationItem)}
			>
				<div class="flex items-center gap-4 justify-between">
					<Icon name={navigationItem.icon} width="w-6" height="h-6" fill="fill-primary-100" />
					<span class="text-left">{navigationItem.name}</span>
				</div>
			</button>
		{/each}
	</div>

	<button
		class="btn p-4 variant-ringed-primary uppercase justify-self-end"
		on:click={handleLanguageChange}>{$t(translations, 'LANGUAGE')} {$locale.toLowerCase()}</button
	>
</div>
