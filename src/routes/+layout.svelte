<script lang="ts">
	import type { IHoliday } from '$lib/interfaces/holiday.interface';

	import { onMount } from 'svelte';
	import { isMobile } from '$lib/stores/mobile.store';
	import { AppShell, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n/i18n';

	import NavbarMobile from '$lib/components/NavbarMobile.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HolidayMessage from '$lib/components/HolidayMessage.svelte';

	import translations from './translation';
	import '../app.postcss';

	initializeStores();

	let scheduler: IHoliday[] = [];
	let isLoaded = false;
	let todayMessage: IHoliday | undefined = undefined;

	const checkDeviceWidth = (): void => {
		isMobile.set(window.matchMedia('(max-width: 767px)').matches);
	};

	onMount(async (): Promise<unknown> => {
		checkDeviceWidth();
		window.addEventListener('resize', checkDeviceWidth);

		const response = await fetch('/scheduler.json');
		const data = await response.json();
		scheduler = data.scheduler;

		const today = new Date();
		const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}`;

		todayMessage = scheduler.find((event: IHoliday) => event.date === formattedDate);
		isLoaded = true;

		return () => {
			window.removeEventListener('resize', checkDeviceWidth);
		};
	});
</script>

<svelte:head>
	<title>Altiore Fiducia</title>
</svelte:head>

{#if isLoaded}
	<Drawer>
		<NavbarMobile />
	</Drawer>
	{#if todayMessage}
		<HolidayMessage
			title={todayMessage.title}
			text={todayMessage.text}
			image={todayMessage.image}
		/>
	{/if}
	<AppShell>
		<svelte:fragment slot="header">
			<Navbar />
		</svelte:fragment>
		<slot />
		<svelte:fragment slot="pageFooter">
			<div id="contact"><Footer /></div></svelte:fragment
		>
	</AppShell>
{:else}
	<Loader
		message={$t(translations, 'LOADING_MESSAGE')}
		meter="stroke-secondary-500"
		track="stroke-tertiary-700/30"
	/>
{/if}
