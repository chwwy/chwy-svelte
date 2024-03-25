<!-- YouTubePlayer.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchLatestVideoIframe } from '../util';

    const apiKey = 'AIzaSyB5NZxoXXz9Jc-lSDTIc0su_1IsKUfb3B8';
    const channelId = 'UCN_a2EJvk2A_OruBVCusDKw';
  
    let latestVideoIframe: string = ''; // Assuming the fetched iframe code is stored as a string
  
    onMount(async () => {
      // Fetch the latest YouTube video iframe when the component mounts
      latestVideoIframe = await fetchLatestVideoIframe(apiKey, channelId);
    });
  </script>
  
  <div>
    <!-- Render the fetched iframe code as HTML -->
    {@html latestVideoIframe}
  </div>
  