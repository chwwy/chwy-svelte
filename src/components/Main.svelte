<script lang="ts">
  import { openTab } from "../util";
  import { IntroContent } from "../components/Intro.svelte";
  import { TabContent } from "../components/Tab.svelte";
  import { Tab1Content } from "../components/Tab1.svelte";
  import { Tab2Content } from "../components/Tab2.svelte";
  import { LFooter } from "../components/LeftFooter.svelte";
  import { RFooter } from "../components/RightFooter.svelte";
  import FallingKokomi from '../components/FallingKokomi.svelte';
</script>

<body data-sveltekit-preload-data="hover" class="bg-black overflow-hidden"> <!-- Add overflow-hidden to prevent scrollbars -->
  <div class="contents h-screen"> <!-- Add overflow-hidden and set height to full screen -->
    <div
      id="container"
      class="flex justify-center items-center h-full bg-black">
      <FallingKokomi />
      <div id="body-content" class="lg:w-4/6 w-5/6 h-5/6"> <!-- Add overflow-hidden -->
        <div class="flex lg:flex-row space-y-10 flex-col space-x-6 h-full">
          <div
            id="left-child"
            class="overflow-auto relative flex-col gap-6 font-mono2 sm:p-10 left-0 lg:w-1/3 lg:text-left text-center items-center lg:h-full h-1/2 flex justify-center"
          >
            <IntroContent />
          </div>
          <div
            id="right-child"
            class="relative flex-row gap-6 font-mono2 p-10 right-0 lg:w-2/3 w-full lg:h-full h-1/2 sm:flex items-center justify-center hidden"
          >
            <div class="kokomi-icon z-10 absolute size-32 right-10 lg:top-8 top-0 cursor-pointer rotate-12 hover:-translate-y-2 transition-transform duration-200">
              <button on:click={(event) => openTab(event, "tab-default")}>
                <img src="/favicon.png" alt="">
              </button>
            </div>
            <div
              id="folder-container"
              class="rounded-lg w-full lg:h-3/4 h-auto bg-pink-100/5 border-2 border-pink-100/30 backdrop-blur-xl z-20 overflow-auto"
            >
              <button
                class="top-1 bg-pink-100/10 duration-150 hover:bg-pink-100/20 overflow-hidden tab ml-2 inline-block relative p-1 border-2 rounded-t-lg h-7 text-pink-100 text-xs border-b-0 border-pink-100/30 w-2/12"
                data-tab="tab1"
                on:click={(event) => openTab(event, "tab1")}>more</button
              >
              <button
                class="top-1 bg-pink-100/10 duration-150 hover:bg-pink-100/20 tab inline-block relative p-1 border-2 rounded-t-lg h-7 text-pink-100 text-xs border-b-0 w-2/12 border-pink-100/30"
                data-tab="tab2"
                on:click={(event) => openTab(event, "tab2")}>misc</button
              >
              <button on:click={(event) => openTab(event, "tab-default")} class="close-button absolute top-1 right-3 text-pink-100">
                ✖
              </button>
              <button on:click={(event) => openTab(event, "tab-default")} class="minimize-button absolute top-1 right-9 text-pink-100">
                —
              </button>
              <div class="relative flex flex-col mr-4">
                <div
                id="tab-default"
                class="overflow-auto w-full tab-content border-2 rounded-b-md rounded-r-md relative top-1 text-pink-100 border-pink-100/30 mx-2 z-1"
              >
                <TabContent />
              </div>

              <div
                id="tab1"
                class="tab-content w-full hidden border-2 rounded-b-md rounded-r-md relative top-1 justify-center items-center text-pink-100 border-pink-100/30 mx-2 z-1"
              >
                <Tab1Content />
              </div>

              <div
                id="tab2"
                class="tab-content w-full hidden border-2 rounded-b-md rounded-r-md relative top-1 justify-center items-center text-pink-100 border-pink-100/30 mx-2  z-1"
              >
                <Tab2Content />
              </div>
              <div id="footer-container" class="relative inline-flex w-full flex-row gap-2 mx-2">
                <div
                  id="footer-left"
                  class="border-2 w-1/2 relative top-3 rounded-md bg-pink-100/5 border-pink-100/30  hover:bg-pink-100/10 duration-150 mb-2"
                >
              <LFooter />
              </div>
                <div
                  id="footer-right"
                  class="border-2 w-1/2 relative top-3 rounded-md bg-pink-100/5 border-pink-100/30  hover:bg-pink-100/10  duration-150 mb-2"
                >
              <RFooter />
              
              </div>
              </div>

              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>