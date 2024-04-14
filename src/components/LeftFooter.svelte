<script lang="ts" context="module">
    export { default as LFooter } from '../components/LeftFooter.svelte';
</script>

<a href="https://chwy.blog/" target="_blank" class="overflow-hidden">
    <div id="default-tab-content" class="py-3 px-4 ">
        <div id="default-tab-title" class="text-xl text-pink-100 mb-2 flex flex-row flex-wrap gap-2 overflow-hidden">
            <div class="social-icon">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-article"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg>
            </div>
            <div class="social-content flex flex-col">
                <div class="social-name text-base">
                    my blog
                </div>
                <div class="social link text-xs flex flex-wrap gap-1 text-pink-100/50">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                    <a href="https://medium.com/@naolyst">chwy.blog</a>
                </div>
            </div>
        </div>
        <div class="social-desc text-sm text-pink-100/50 overflow-hidden">
            i have a blog. come read if ur interested. also available in <a target="_blank" class="text-blue-100/60 hover:underline" href="https://chwy.blog/rss.xml"
            >rss feed</a
          >
        </div>
    
    </div>
</a>
