<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import assets from '$lib/assets/assets';
	import translations from './translation';
</script>

<section id="landing-header" class="flex w-screen h-screen">
	<video class="fixed z-0 opacity-10 object-cover w-full h-full" autoplay muted loop playsinline>
		<source src={assets.HERO_VIDEO} type="video/mp4" />
	</video>

	<div class="flex flex-col h-full w-full z-10 items-center text-center relative">
		<div class="grid grid-cols-1 md:grid-cols-2 h-full">
			<div class="flex flex-col h-full w-full justify-center items-start p-4 md:p-12 gap-8">
				<header>
					<h1 class="h1 text-left">
						<span class="text-6xl md:text-8xl font-bold">{$t(translations, 'LANDING_TITLE')}</span
						><br />
						<span class="text-4xl md:text-6xl text-secondary-200">Altiore Fiducia</span>
					</h1>
				</header>
				<article class="text-left">
					<p class="text-xl leading-relaxed">
						{$t(translations, 'LANDING_SUBTITLE')}
					</p>
					<ul class="list-disc p-4 space-y-2 text-xl leading-relaxed font-extralight">
						<li>{$t(translations, 'LANDING_ONE')}</li>
						<li>{$t(translations, 'LANDING_TWO')}</li>
						<li>{$t(translations, 'LANDING_THREE')}</li>
					</ul>
				</article>
			</div>
		</div>
	</div>
</section>
