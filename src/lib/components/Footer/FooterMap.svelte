<script lang="ts">
	interface Props {
		map: string;
		title: string;
	}

	const { map, title }: Props = $props();
</script>

<div class="h-64 w-full overflow-hidden rounded-lg">
	<iframe
		{title}
		src={map}
		width="100%"
		height="100%"
		style="border:0;"
		allowfullscreen={true}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	>
	</iframe>
</div>
