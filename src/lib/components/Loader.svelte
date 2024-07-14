<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	export let message: string;
	export let stroke = 20;
	export let meter = 'stroke-primary-500';
	export let track = 'troke-primary-500/30';
</script>

<div class="flex flex-col gap-4 justify-center items-center">
	<ProgressRadial value={undefined} {stroke} {meter} {track} />
	<span>{message}</span>
</div>
