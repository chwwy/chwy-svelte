<script lang="ts" context="module">
    export { default as Tab2Content } from '../components/Tab2.svelte';
    import { fetchLatestVideoIframe } from '../util';

    let latestVideoIframe: string = '';

    async function loadLatestVideo() {
        try {
            const apiKey = 'AIzaSyB5NZxoXXz9Jc-lSDTIc0su_1IsKUfb3B8';
            const channelId = 'UCN_a2EJvk2A_OruBVCusDKw';

            latestVideoIframe = await fetchLatestVideoIframe(apiKey, channelId);
            console.log(latestVideoIframe); 
        } catch (error) {
            console.error('Error fetching latest video:', error);
        }
    }

    async function initialize() {
        await loadLatestVideo(); 
    }

    initialize();
</script>


<div id="default-tab-content" class="py-2 px-8 overflow-auto">
    <div id="default-tab-title" class="text-base text-pink-100">
        catch my latest youtube video/live here 🐇:
    </div>
    <div id="default-tab-content" class="aspect-w-16 aspect-h-9 flex justify-center mt-2">
        {@html latestVideoIframe}
    </div>
</div>