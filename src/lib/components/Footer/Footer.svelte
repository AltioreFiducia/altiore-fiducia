<script lang="ts">
	import type { Contact } from '$lib/interfaces/contact';

	import { generateRandomId } from '$lib/utils/generators';
	import { m } from '../../../paraglide/messages';

	import DecorativeIcons from '$lib/components/DecorativeSVG/DecorativeIcons.svelte';
	import FooterMap from '$lib/components/Footer/FooterMap.svelte';

	interface Props {
		contact: Contact;
	}

	const { contact }: Props = $props();
</script>

{#snippet renderFooterLink(link: string, text: string)}
	<li>
		<a
			href={link}
			class="hover:text-secondary-300 text-secondary-300 transition-colors duration-300"
		>
			{text}
		</a>
	</li>
{/snippet}

{#snippet renderFooterPhone(phone: string)}
	<p class="mb-4 flex items-center text-gray-300">
		<DecorativeIcons name="phone" />
		{phone}
	</p>
{/snippet}

{#snippet renderFooterEmail(email: string)}
	<a
		href={`mailto:${email}`}
		class="hover:text-secondary-300 mb-2 flex items-center text-gray-300 transition-colors duration-300"
	>
		<DecorativeIcons name="email" />
		{email}
	</a>
{/snippet}

<footer class="bg-primary-900 text-white">
	<div class="container mx-auto px-6 py-12 sm:px-12 lg:px-24">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
			<div>
				<h3 class="font-heading text-secondary-400 mb-6 text-xl font-bold">
					{m.footer_address()}
				</h3>
				<p class="mb-4 text-gray-300">
					{contact.address}
				</p>
				<ul class="mt-6 space-y-2">
					{@render renderFooterLink('/services', m.footer_services())}
					{@render renderFooterLink('/about-us', m.footer_about_us())}
				</ul>
			</div>

			<div>
				<h3 class="font-heading text-secondary-400 mb-6 text-xl font-bold">
					{m.footer_office()}
				</h3>
				<FooterMap map={contact.map} title="Mapa de ubicación de Altiore Fiducia" />
			</div>

			<div>
				<h3 class="font-heading text-secondary-400 mb-6 text-xl font-bold">
					{m.footer_contact()}
				</h3>
				{#each contact.phone as phone (generateRandomId().concat(String(contact.phone.indexOf(phone))))}
					{@render renderFooterPhone(phone)}
				{/each}

				<div class="mb-6">
					<p class="mb-2 text-gray-300">{m.footer_emails()}</p>
					{#each contact.emails as email (generateRandomId().concat(String(contact.emails.indexOf(email))))}
						{@render renderFooterEmail(email)}
					{/each}
				</div>

				<div>
					<p class="mb-2 text-gray-300">{m.footer_social_media()}</p>
					<div class="flex space-x-4">
						<a
							href={contact.socialMedia.instagram}
							class="hover:text-secondary-400 text-secondary-300 transition-colors duration-300"
							aria-label="Instagram"
							target="_blank"
						>
							<DecorativeIcons name="instagram" />
						</a>
						<a
							href={contact.socialMedia.facebook}
							class="hover:text-secondary-400 text-secondary-300 transition-colors duration-300"
							aria-label="Facebook"
							target="_blank"
						>
							<DecorativeIcons name="facebook" />
						</a>
						<a
							href={contact.socialMedia.linkedin}
							class="hover:text-secondary-400 text-secondary-300 transition-colors duration-300"
							aria-label="LinkedIn"
							target="_blank"
						>
							<DecorativeIcons name="linkedin" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="border-primary-700 mt-12 border-t pt-8 text-center">
			<p class="text-sm text-gray-400">
				© {new Date().getFullYear()}
				{m.footer_copyright()}
			</p>
		</div>
	</div>
</footer>
