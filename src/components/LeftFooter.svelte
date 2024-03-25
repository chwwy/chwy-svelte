<script lang="ts" context="module">
    export { default as LFooter } from '../components/LeftFooter.svelte';
</script>

<div id="default-tab-content" class="py-4 px-4 hover:bg-pink-100/10 duration-150">
    <div id="default-tab-title" class="text-xl text-pink-100 mb-2 flex flex-row flex-wrap gap-2">
        <div class="social-icon">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-medium"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 9h1l3 3l3 -3h1" /><path d="M8 15l2 0" /><path d="M14 15l2 0" /><path d="M9 9l0 6" /><path d="M15 9l0 6" /></svg>
        </div>
        <div class="social-content flex flex-col">
            <div class="social-name text-base">
                medium
            </div>
            <div class="social link text-xs flex flex-wrap gap-1 text-pink-100/50">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                medium.com/@naolyst
            </div>
        </div>
    </div>
    <div class="social-desc text-sm text-pink-100/50">
        i like to write. if you like melancholic non-fiction pieces, consider giving it a read.
    </div>

</div>