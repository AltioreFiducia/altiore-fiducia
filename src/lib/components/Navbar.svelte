<script lang="ts">
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import { isMobile } from '$lib/stores/mobile.store';
	import { locale } from '$lib/i18n/i18n';

	import Icon from '$lib/components/Icon.svelte';

	import navigation from '$lib/constants/navigation';
	import assets from '$lib/assets/assets';
	import mobileNavbarSettings from '$lib/constants/mobileNavbarSettings';

	const drawerStore = getDrawerStore();

	const handleLanguageChange = (): void => {
		locale.set($locale === 'en' ? 'es' : 'en');
		window.location.reload();
	};
</script>

<AppBar background="bg-primary-900 bg-opacity-95" shadow="shadow-xl">
	<svelte:fragment slot="lead">
		<a href="/">
			<img src={assets.ALTIORE_LOGO} alt="Altiore Fiduccia" class="max-h-8" />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#if !$isMobile}
			<div class="flex items-center gap-8">
				{#each navigation as navItem}
					<button class="btn font-extralight btn-hover" type="button" on:click={navItem.onClick}
						>{navItem.name}</button
					>
				{/each}
				<button class="btn variant-ringed-secondary font-extralight" on:click={handleLanguageChange}
					>{$locale === 'en' ? 'English' : 'Español'}</button
				>
			</div>
		{:else}
			<button
				class="btn variant-ringed-secondary"
				on:click={() => drawerStore.open(mobileNavbarSettings)}
			>
				<Icon name="stack" width="w-4" height="h-4" />
			</button>
		{/if}
	</svelte:fragment>
</AppBar>

<style>
	.btn-hover:hover {
		@apply bg-primary-500 bg-opacity-20;
	}
</style>
