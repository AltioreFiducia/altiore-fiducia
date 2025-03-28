<script lang="ts">
	import type { DecorativeSVG } from '$lib/types/decoratives';

	import { generateRandomId } from '$lib/utils/generators';

	interface DecorativeSVGProps {
		type: DecorativeSVG;
		class?: string;
	}

	let { type, class: className }: DecorativeSVGProps = $props();

	let classes = $derived(className ?? 'text-primary-500');
</script>

{#if type === 'diagonal-accent'}
	<svg
		class="{classes} absolute -top-20 -right-20 h-auto w-[40%] opacity-20"
		viewBox="0 0 200 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 0L200 200" stroke="currentColor" stroke-width="1" />
		<path d="M40 0L200 160" stroke="currentColor" stroke-width="1" />
		<path d="M80 0L200 120" stroke="currentColor" stroke-width="1" />
		<path d="M120 0L200 80" stroke="currentColor" stroke-width="1" />
		<path d="M160 0L200 40" stroke="currentColor" stroke-width="1" />
	</svg>
{:else if type === 'floating-geometric'}
	<svg
		class="{classes} absolute bottom-12 left-12 h-64 w-64 opacity-10"
		viewBox="0 0 100 100"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="0.5" />
		<circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="0.5" />
		<circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="0.5" />
	</svg>
{:else if type === 'abstract-dots'}
	<svg
		class="{classes} absolute top-1/4 right-1/3 h-40 w-40 rotate-12 opacity-15"
		viewBox="0 0 100 100"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="10" cy="10" r="1" />
		<circle cx="20" cy="10" r="1" />
		<circle cx="30" cy="10" r="1" />
		<circle cx="40" cy="10" r="1" />
		<circle cx="50" cy="10" r="1" />
		<circle cx="60" cy="10" r="1" />
		<circle cx="70" cy="10" r="1" />
		<circle cx="80" cy="10" r="1" />
		<circle cx="90" cy="10" r="1" />

		<circle cx="10" cy="20" r="1" />
		<circle cx="20" cy="20" r="1" />
		<circle cx="30" cy="20" r="1" />
		<circle cx="40" cy="20" r="1" />
		<circle cx="50" cy="20" r="1" />
		<circle cx="60" cy="20" r="1" />
		<circle cx="70" cy="20" r="1" />
		<circle cx="80" cy="20" r="1" />
		<circle cx="90" cy="20" r="1" />

		<circle cx="10" cy="30" r="1" />
		<circle cx="20" cy="30" r="1" />
		<circle cx="30" cy="30" r="1" />
		<circle cx="40" cy="30" r="1" />
		<circle cx="50" cy="30" r="1" />
		<circle cx="60" cy="30" r="1" />
		<circle cx="70" cy="30" r="1" />
		<circle cx="80" cy="30" r="1" />
		<circle cx="90" cy="30" r="1" />

		<circle cx="10" cy="40" r="1" />
		<circle cx="20" cy="40" r="1" />
		<circle cx="30" cy="40" r="1" />
		<circle cx="40" cy="40" r="1" />
		<circle cx="50" cy="40" r="1" />
		<circle cx="60" cy="40" r="1" />
		<circle cx="70" cy="40" r="1" />
		<circle cx="80" cy="40" r="1" />
		<circle cx="90" cy="40" r="1" />

		<circle cx="10" cy="50" r="1" />
		<circle cx="20" cy="50" r="1" />
		<circle cx="30" cy="50" r="1" />
		<circle cx="40" cy="50" r="1" />
		<circle cx="50" cy="50" r="1" />
		<circle cx="60" cy="50" r="1" />
		<circle cx="70" cy="50" r="1" />
		<circle cx="80" cy="50" r="1" />
		<circle cx="90" cy="50" r="1" />
	</svg>
{:else if type === 'wave-transition'}
	<svg
		class="relative block h-[70px] w-full"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<path
			d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
			class={classes}
		></path>
	</svg>
{:else if type === 'abstract-circles'}
	<svg
		class="{classes} absolute -top-20 -left-20 h-80 w-80 opacity-15"
		viewBox="0 0 200 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="100" cy="100" r="80" stroke="currentColor" stroke-width="0.5" />
		<circle cx="100" cy="100" r="60" stroke="currentColor" stroke-width="0.5" />
		<circle cx="100" cy="100" r="40" stroke="currentColor" stroke-width="0.5" />
		<circle cx="150" cy="70" r="25" stroke="currentColor" stroke-width="0.5" />
		<circle cx="50" cy="130" r="15" stroke="currentColor" stroke-width="0.5" />
	</svg>
{:else if type === 'curved-lines'}
	<svg
		class="{classes} absolute top-1/4 right-0 h-96 w-96"
		viewBox="0 0 200 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M 20,50 Q 40,20 60,50 T 100,50 T 140,50 T 180,50"
			stroke="currentColor"
			stroke-width="0.5"
			fill="none"
		/>
		<path
			d="M 20,70 Q 40,40 60,70 T 100,70 T 140,70 T 180,70"
			stroke="currentColor"
			stroke-width="0.5"
			fill="none"
		/>
		<path
			d="M 20,90 Q 40,60 60,90 T 100,90 T 140,90 T 180,90"
			stroke="currentColor"
			stroke-width="0.5"
			fill="none"
		/>
		<path
			d="M 20,110 Q 40,80 60,110 T 100,110 T 140,110 T 180,110"
			stroke="currentColor"
			stroke-width="0.5"
			fill="none"
		/>
		<path
			d="M 20,130 Q 40,100 60,130 T 100,130 T 140,130 T 180,130"
			stroke="currentColor"
			stroke-width="0.5"
			fill="none"
		/>
	</svg>
{:else if type === 'image-accent'}
	<svg
		class="{classes} absolute -right-10 -bottom-10 h-64 w-64"
		viewBox="0 0 100 100"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="20" y="20" width="80" height="80" rx="4" stroke="currentColor" stroke-width="1" />
		<rect x="10" y="10" width="80" height="80" rx="4" stroke="currentColor" stroke-width="1" />
		<rect x="0" y="0" width="80" height="80" rx="4" stroke="currentColor" stroke-width="1" />
		<circle cx="80" cy="20" r="10" stroke="currentColor" stroke-width="1" />
		<circle cx="20" cy="80" r="5" fill="currentColor" />
	</svg>
{:else if type === 'wave-transition-down'}
	<svg
		class="relative block h-[70px] w-full"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<path
			d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			class="fill-gray-50"
		></path>
	</svg>
{:else if type === 'abstract-dots-and-circles'}
	<svg
		class="text-primary-100 absolute top-12 right-12 h-60 w-60 opacity-60"
		viewBox="0 0 100 100"
		fill="currentColor"
	>
		{#each Array(10) as row (generateRandomId().concat(String(row)))}
			{#each Array(10) as col (generateRandomId().concat(String(col)))}
				<circle cx={10 * (col + 1)} cy={10 * (row + 1)} r="1" />
			{/each}
		{/each}
	</svg>
	<svg
		class="text-secondary-100 absolute bottom-20 -left-20 h-80 w-80 opacity-40"
		viewBox="0 0 200 200"
		fill="none"
		stroke="currentColor"
		stroke-width="0.5"
	>
		<circle cx="100" cy="100" r="80" />
		<circle cx="100" cy="100" r="60" />
		<circle cx="100" cy="100" r="40" />
		<circle cx="100" cy="100" r="20" />
	</svg>
{:else if type === 'waves'}
	<svg
		class="text-primary-100 absolute top-0 right-0 h-72 w-72 rotate-12 opacity-50"
		viewBox="0 0 200 200"
		fill="none"
		stroke="currentColor"
		stroke-width="0.5"
	>
		{#each Array(8) as i (generateRandomId().concat(String(i)))}
			<path
				d="M0,{25 + i * 20} Q25,{15 + i * 20} 50,{25 + i * 20} T100,{25 + i * 20} T150,{25 +
					i * 20} T200,{25 + i * 20}"
			/>
		{/each}
	</svg>
	<svg
		class="text-secondary-100 absolute right-12 bottom-12 h-40 w-40 opacity-60"
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width="0.5"
	>
		<path d="M10,90 Q50,20 90,10" />
		<path d="M20,90 Q55,30 90,20" />
		<path d="M30,90 Q60,40 90,30" />
	</svg>
{:else if type === 'geometric'}
	<svg
		class="text-primary-100 absolute -top-10 -right-10 h-80 w-80 rotate-6 opacity-40"
		viewBox="0 0 200 200"
		fill="none"
		stroke="currentColor"
		stroke-width="0.5"
	>
		<rect x="50" y="50" width="100" height="100" />
		<rect x="40" y="40" width="120" height="120" />
		<rect x="30" y="30" width="140" height="140" />
		<circle cx="100" cy="100" r="50" />
	</svg>
	<svg
		class="text-secondary-100 absolute bottom-0 left-0 h-60 w-60 opacity-30"
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width="0.5"
	>
		{#each Array(8) as i (generateRandomId().concat(String(i)))}
			<line x1="0" y1={i * 15} x2={i * 15} y2="0" />
		{/each}
	</svg>
{/if}
