<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import GoogleMap from '$lib/components/GoogleMap.svelte';
	import social from '$lib/constants/social';

	import { isMobile } from '$lib/stores/mobile.store';
	import { t } from '$lib/i18n/i18n';

	import translations from './translation';
</script>

<div class="flex w-full p-12 z-10 relative bg-black bg-opacity-50">
	<div class="flex flex-col md:flex-row w-full justify-center items-start gap-4">
		<div class="flex flex-col gap-4 justify-center items-center md:justify-start md:items-start">
			<h3 class="h3 text-center md:text-left">{$t(translations, 'ADDRESS_TITLE')}</h3>
			<span>{$t(translations, 'ADDRESS_TEXT')}</span>
			<GoogleMap height={300} width={$isMobile ? 300 : 600} />
		</div>
		<hr class="divider-horizontal md:divider-vertical h-0 md:h-[100%] w-full md:w-0" />
		<div class="flex flex-col h-full gap-4 justify-between">
			<h3 class="h3 text-center md:text-left">{$t(translations, 'CONTACT_TITLE')}</h3>
			<ul class="list-disc px-4 space-y-4">
				<li class="text-surface-100">
					<span class="font-semibold">{$t(translations, 'CONTACT_PHONE')}</span><a
						href="tel:+593984951662">+593 98 495 1662</a
					>
				</li>
				<li class="text-surface-100">
					<span class="font-semibold">{$t(translations, 'CONTACT_EMAIL')}</span><a
						href="andrea.guevara@altiorefiducia.com">andrea.guevara@altiorefiducia.com</a
					>
					<span class="font-semibold">{$t(translations, 'CONTACT_EMAIL')}</span><a
						href="nicole.molina@altiorefiducia.com">nicole.molina@altiorefiducia.com</a
					>
				</li>
				<li class="text-surface-100">
					<span class="font-semibold">{$t(translations, 'CONTACT_ADDRESS')}</span><a
						href="https://www.google.com/maps?ll=-0.193132,-78.483208&z=17&t=m&hl=en&gl=EC&mapclient=embed&cid=10021627480259489487"
						target="_blank"
					>
						Whymper E7 - 141 y Diego de Almagro, Edificio Millecento, Quito, Ecuador.
					</a>
				</li>
			</ul>

			<h3 class="h3 text-center md:text-left">{$t(translations, 'CONTACT_SOCIAL_TITLE')}</h3>
			<span class="text-center md:text-left">{$t(translations, 'CONTACT_SOCIAL_TEXT')}</span>
			<div class="flex justify-center md:justify-start items-center gap-4">
				{#each social as link}
					<a href={link.linkTo} target="_blank">
						<Icon name={link.icon} width="w-10" height="h-10" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
