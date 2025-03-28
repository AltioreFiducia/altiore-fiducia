<script lang="ts">
	interface Props {
		text: string;
		borderColor: string;
		textColor: string;
	}

	const { text, borderColor, textColor }: Props = $props();
</script>

<div class="{borderColor} rounded-lg border-l-4 bg-white p-6 shadow-md">
	<div class="flex items-start">
		<span class="{textColor} mr-4 font-bold">•</span>
		<p class="text-gray-700">
			{text}
		</p>
	</div>
</div>
