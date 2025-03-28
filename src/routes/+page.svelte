<script lang="ts">
	import { HOME_METADATA } from '$lib/constants/metadata';
	import { services } from '$lib/constants/services';

	import assets from '$lib/constants/assets';

	import AboutUsContent from '$lib/components/AboutUs/AboutUsContent.svelte';
	import ServiceContent from '$lib/components/Service/ServiceContent.svelte';
	import DecorativeSvg from '$lib/components/DecorativeSVG/DecorativeSVG.svelte';
	import CompanyValues from '$lib/components/CompanyValues/CompanyValues.svelte';
	import ServiceButton from '$lib/components/Service/ServiceButton.svelte';
	import Testimonials from '$lib/components/Testimonial/Testimonials.svelte';
	import AboutUsImage from '$lib/components/AboutUs/AboutUsImage.svelte';
	import HeroContent from '$lib/components/Hero/HeroContent.svelte';
	import HeroVideo from '$lib/components/Hero/HeroVideo.svelte';
	import Services from '$lib/components/Service/Services.svelte';
</script>

<svelte:head>
	<title>{HOME_METADATA.title}</title>
	<meta name="description" content={HOME_METADATA.description} />

	<meta property="og:title" content={HOME_METADATA.title} />
	<meta property="og:description" content={HOME_METADATA.description} />
	<meta property="og:image" content={assets.ALTIORE_LOGO} />
	<meta property="og:type" content="website" />

	<meta name="keywords" content={HOME_METADATA.keywords.join(', ')} />
	<link rel="canonical" href="https://altiorefiducia.com" />
</svelte:head>

<section id="hero" class="bg-primary-900 relative h-screen w-full overflow-hidden">
	<HeroVideo video={assets.HOME_VIDEO} />

	<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
		<DecorativeSvg type="diagonal-accent" class="text-secondary-400" />
		<DecorativeSvg type="floating-geometric" class="text-secondary-300" />
		<DecorativeSvg type="abstract-dots" class="text-secondary-200" />
	</div>

	<div class="relative z-10 flex h-full items-center px-6 sm:px-12 lg:px-24">
		<HeroContent />
	</div>

	<div class="absolute right-0 bottom-0 left-0 z-10 w-full overflow-hidden leading-[0] text-white">
		<DecorativeSvg type="wave-transition" class="fill-white" />
	</div>
</section>

<section id="about-us" class="relative overflow-hidden bg-white px-6 py-20 sm:px-12 lg:px-24">
	<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
		<DecorativeSvg type="abstract-circles" class="text-secondary-500 opacity-90" />
		<DecorativeSvg type="curved-lines" class="text-primary-500 opacity-20 md:opacity-90" />
	</div>

	<div class="relative z-10 container mx-auto">
		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<AboutUsContent />
			<AboutUsImage image={assets.HOME_ABOUT_US} />
		</div>
	</div>
</section>

<section id="values" class="relative overflow-hidden bg-gray-100 px-6 py-20 sm:px-12 lg:px-24">
	<div
		class="absolute top-0 right-0 left-0 z-10 w-full rotate-180 overflow-hidden leading-[0] text-white"
	>
		<DecorativeSvg type="wave-transition" class="fill-white" />
	</div>

	<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
		<DecorativeSvg type="diagonal-accent" class="text-primary-200" />
		<DecorativeSvg type="floating-geometric" class="text-secondary-200" />
	</div>

	<div class="relative z-10 container mx-auto mt-12 text-center">
		<CompanyValues />

		<div class="mt-24">
			<Testimonials />
		</div>
	</div>
</section>

<section
	id="services"
	class="bg-primary-800 relative overflow-hidden px-6 py-20 text-white sm:px-12 lg:px-24"
>
	<div
		class="absolute top-0 right-0 left-0 z-10 w-full rotate-180 overflow-hidden leading-[0] text-gray-50"
	>
		<DecorativeSvg type="wave-transition" class="fill-gray-100" />
	</div>

	<div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
		<DecorativeSvg type="abstract-dots" class="text-primary-600 opacity-20" />
		<DecorativeSvg type="diagonal-accent" class="text-secondary-300 opacity-10" />
		<DecorativeSvg
			type="floating-geometric"
			class="text-secondary-400 absolute bottom-12 left-12 opacity-15"
		/>
	</div>

	<div class="relative z-10 container mx-auto my-16">
		<div class="mb-16 text-center">
			<ServiceContent />
		</div>
		<Services {services} />
		<div class="mt-12 text-center">
			<ServiceButton />
		</div>
	</div>
</section>
