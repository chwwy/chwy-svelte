<script lang="ts" context="module">
    export { default as Tab2Content } from '../components/Tab2.svelte';
    import { fetchLatestVideoIframe } from '../util';

    let latestVideoIframe: string | undefined;

    fetchLatestVideoIframe('YOUR_API_KEY', 'YOUR_CHANNEL_ID')
        .then((iframe: string) => { // Assuming latestVideoIframe is a string
            // Assign the result of fetchLatestVideoIframe to latestVideoIframe
            latestVideoIframe = iframe;
            console.log(latestVideoIframe);
        })
        .catch((error: Error) => { // Specify the type of 'error' parameter explicitly
            console.error('Error fetching latest video:', error);
            
            // If an error occurs, fallback to a default video
            latestVideoIframe = `<iframe width="560" height="315" src="https://www.youtube.com/watch?v=NPDDPyezBM8" frameborder="0" allowfullscreen></iframe>`;
        });
</script>

<div id="default-tab-content" class="py-2 px-8 overflow-auto">
    <div id="default-tab-title" class="text-base text-pink-100">
        catch my latest youtube video/live here 🐇:
    </div>
    <div id="default-tab-content" class="aspect-w-16 aspect-h-9 flex justify-center mt-2">
        {#if latestVideoIframe}
            {@html latestVideoIframe}
        {:else}
            <iframe width="560" height="315" src="https://www.youtube.com/watch?v=NPDDPyezBM8" frameborder="0" allowfullscreen></iframe>
        {/if}
    </div>
</div>