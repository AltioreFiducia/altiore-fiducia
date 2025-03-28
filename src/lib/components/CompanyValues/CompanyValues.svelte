<script lang="ts">
	import {
		DELETING_SPEED,
		PAUSE_BEFORE_DELETE,
		PAUSE_BEFORE_NEW_WORD,
		TYPING_SPEED
	} from '$lib/constants/animations';
	import { COMPANY_VALUES } from '$lib/constants/values';
	import { onMount } from 'svelte';
	import { m } from '../../../paraglide/messages';

	let displayText = '';
	let cursorVisible = true;
	let currentValueIndex = 0;
	let currentCharIndex = 0;
	let isDeleting = false;

	onMount(() => {
		setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 500);

		function typeWriter() {
			const currentValue = COMPANY_VALUES[currentValueIndex];

			if (isDeleting) {
				displayText = currentValue.substring(0, currentCharIndex - 1);
				currentCharIndex--;

				if (currentCharIndex === 0) {
					isDeleting = false;
					currentValueIndex = (currentValueIndex + 1) % COMPANY_VALUES.length;
					setTimeout(typeWriter, PAUSE_BEFORE_NEW_WORD);
					return;
				}

				setTimeout(typeWriter, DELETING_SPEED);
			} else {
				displayText = currentValue.substring(0, currentCharIndex + 1);
				currentCharIndex++;

				if (currentCharIndex === currentValue.length) {
					isDeleting = true;
					setTimeout(typeWriter, PAUSE_BEFORE_DELETE);
					return;
				}

				setTimeout(typeWriter, TYPING_SPEED);
			}
		}

		setTimeout(typeWriter, 1000);
	});
</script>

<div>
	<h2 class="font-heading text-primary-800 mb-12 text-4xl font-bold md:text-5xl">
		{m.company_values_title()} <span class="text-secondary-500">{m.company_values_subtitle()}</span>
	</h2>

	<div class="mx-auto max-w-3xl">
		<div class="flex h-20 items-center justify-center">
			<p class="text-primary-700 text-2xl font-semibold md:text-3xl lg:text-4xl">
				{displayText}<span class="text-secondary-500 animate-blink font-extralight">|</span>
			</p>
		</div>

		<p class="mt-8 text-lg text-gray-600">
			{m.company_values_description()}
		</p>
	</div>
</div>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.animate-blink {
		animation: blink 0.7s infinite;
	}
</style>
