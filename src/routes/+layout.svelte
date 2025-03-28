<script lang="ts">
	import '../app.css';

	import { locales, localizeHref } from '../paraglide/runtime';
	import { contact } from '$lib/constants/contact';
	import { page } from '$app/state';

	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="canonical" href="https://altiorefiducia.com{page.url.pathname}" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer {contact} />
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
