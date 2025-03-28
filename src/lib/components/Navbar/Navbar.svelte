<script lang="ts">
	import { getLocale, locales, setLocale } from '../../../paraglide/runtime';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { m } from '../../../paraglide/messages';

	import DecorativeIcon from '$lib/components/DecorativeSVG/DecorativeIcons.svelte';

	import assets from '$lib/constants/assets';

	let mobileMenuOpen = $state<boolean>(false);
	let scrolled = $state<boolean>(false);

	const toggleMobileMenu = (): void => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const getLocaleName = (locale: string): string => {
		switch (locale) {
			case 'es':
				return 'Español';
			case 'en':
				return 'English';
			default:
				return locale;
		}
	};

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#snippet renderLink(href: string, text: string, mobile: boolean = false)}
	{#if mobile}
		<button
			onclick={() => {
				toggleMobileMenu();
				goto(href);
			}}
			aria-label="{text} Button"
			class="hover:text-secondary-300 hover:bg-primary-700 text-left font-medium text-white transition-colors"
			>{text}</button
		>
	{:else}
		<a {href} class="hover:text-secondary-300 font-medium text-white transition-colors">{text}</a>
	{/if}
{/snippet}

<header
	class="{scrolled
		? 'bg-primary-800 fixed shadow-md'
		: 'from-primary-900/80 absolute bg-gradient-to-b to-transparent'} top-0 right-0 left-0 z-50 transition-all duration-300"
>
	<div class="container mx-auto flex items-center justify-between px-6 py-4 sm:px-12 lg:px-24">
		<a href="/" class="flex items-center">
			<img src={assets.ALTIORE_LOGO} alt="Altiore Fiducia" class="h-10 md:h-12" />
		</a>

		<nav class="hidden items-center space-x-8 md:flex">
			{@render renderLink('/', m.navbar_home())}
			{@render renderLink('/services', m.navbar_services())}
			{@render renderLink('/about-us', m.navbar_about_us())}
		</nav>

		<div class="flex items-center space-x-4">
			<div class="group relative hidden md:block">
				<button class="hover:text-secondary-300 flex items-center text-white transition-colors">
					<span class="uppercase">{getLocale()}</span>
					<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</button>
				<div
					class="bg-primary-700 absolute right-0 z-20 mt-2 w-24 scale-95 transform overflow-hidden rounded-md opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100"
				>
					{#each locales as locale (locale)}
						<button
							class="hover:bg-primary-600 block w-full px-4 py-2 text-sm text-white transition-colors"
							aria-label={`Change language to ${locale}`}
							onclick={() => setLocale(locale)}
						>
							{getLocaleName(locale)}
						</button>
					{/each}
				</div>
			</div>

			<button
				onclick={toggleMobileMenu}
				class="hover:text-secondary-300 text-white transition-colors md:hidden"
				aria-label="Toggle menu"
			>
				<DecorativeIcon name="menu" />
			</button>
		</div>
	</div>

	<div
		class="bg-primary-800 fixed inset-y-0 right-0 w-64 transform shadow-lg transition-transform duration-300 ease-in-out md:hidden {mobileMenuOpen
			? ''
			: 'translate-x-full'}"
	>
		<div class="flex justify-end p-4">
			<button
				onclick={toggleMobileMenu}
				class="hover:text-secondary-300 text-white transition-colors"
				aria-label="Close menu"
			>
				<DecorativeIcon name="xmark" />
			</button>
		</div>
		<nav class="flex flex-col space-y-6 px-4 py-6">
			{@render renderLink('/', m.navbar_home(), true)}
			{@render renderLink('/services', m.navbar_services(), true)}
			{@render renderLink('/about-us', m.navbar_about_us(), true)}

			<div class="border-primary-700 border-t pt-6">
				<div class="mb-2 flex items-center">
					<span class="text-sm text-white">{m.navbar_language()}</span>
				</div>
				{#each locales as locale (locale)}
					<button
						class="hover:text-secondary-300 block w-full py-2 text-left text-white transition-colors"
						aria-label={`Change language to ${locale}`}
						onclick={() => setLocale(locale)}
					>
						{getLocaleName(locale)}
					</button>
				{/each}
			</div>
		</nav>
	</div>
</header>
