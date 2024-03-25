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
    <div class="contents h-screen overflow-hidden"> <!-- Add overflow-hidden and set height to full screen -->
      <div
        id="container"
        class="flex justify-center items-center h-full overflow-hidden bg-black">
        <FallingKokomi />
        <div id="body-content" class="w-4/6 h-5/6 overflow-hidden"> <!-- Add overflow-hidden -->
          <div class="flex flex-row space-x-6 h-full">
            <div
              id="left-child"
              class="overflow-auto relative flex-col gap-6 font-mono2 p-10 left-0 w-1/3 h-full flex justify-center"
            >
              <IntroContent />
            </div>
            <div
              id="right-child"
              class="relative flex-col gap-6 font-mono2 p-10 right-0 w-2/3 h-full flex items-center justify-center"
            >
              <div
                id="folder-container"
                class="overflow-hidden w-11/12 h-5/6 rounded-lg  bg-pink-100/5 border-2 border-pink-100/75 backdrop-blur-xl"
              >
                <button
                  class="top-1 hover:text-black bg-pink-100/10 duration-150 hover:bg-pink-100 overflow-hidden tab ml-2 inline-block relative p-1 border-2 rounded-t-lg h-7 text-pink-100 text-xs border-b-0 w-2/12"
                  data-tab="tab1"
                  on:click={(event) => openTab(event, "tab1")}>more info</button
                >
                <button
                  class="top-1 bg-pink-100/10 hover:text-black duration-150 hover:bg-pink-100 tab inline-block relative p-1 border-2 rounded-t-lg h-7 text-pink-100 text-xs border-b-0 w-2/12"
                  data-tab="tab2"
                  on:click={(event) => openTab(event, "tab2")}>misc</button
                >
                <div class="close-button absolute top-1 right-3 text-pink-100">
                  ✖
                </div>
                <div class="minimize-button absolute top-1 right-9 text-pink-100">
                  —
                </div>
  
                <div
                  id="tab-default"
                  class="overflow-auto tab-content border-2 rounded-b-md rounded-r-md relative top-1 text-pink-100 border-pink-100 mx-2 h-96 z-1"
                >
                  <TabContent />
                </div>
  
                <div
                  id="tab1"
                  class="tab-content hidden border-2 rounded-b-md rounded-r-md relative top-1 justify-center items-center text-pink-100 border-pink-100 mx-2 h-96 z-1"
                >
                  <Tab1Content />
                </div>
  
                <div
                  id="tab2"
                  class="tab-content hidden border-2 rounded-b-md rounded-r-md relative top-1 justify-center items-center text-pink-100 border-pink-100 mx-2 h-96 z-1"
                >
                  <Tab2Content />
                </div>
  
                <div id="footer-container" class="flex flex-row gap-2 h-1/4">
                  <div
                    id="footer-left"
                    class="ml-2 border-2 w-1/2 relative h-full top-3 rounded-md bg-pink-100/5"
                  >
                <LFooter />
                </div>
                  <div
                    id="footer-right"
                    class="mr-2 border-2 w-1/2 relative h-full top-3 rounded-md bg-pink-100/5"
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
  </body>