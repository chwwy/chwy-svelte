import { writable } from "svelte/store";
import { onMount } from "svelte";
import axios from "axios";

export const isBrowser = writable(false);

if (typeof window !== "undefined") {
  isBrowser.set(true);
}

export function openTab(event: MouseEvent, tabName: string) {
  console.log("Opening tab:", tabName);
  let i: number;
  let tabContent: HTMLCollectionOf<Element>;
  let tabLinks: HTMLCollectionOf<Element>;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    (tabContent[i] as HTMLElement).style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    (tabLinks[i] as HTMLElement).className = (
      tabLinks[i] as HTMLElement
    ).className.replace(" active", "");
  }

  const target = event.currentTarget;
  if (target instanceof HTMLElement) {
    target.className += " active";
  }

  const tabElement = document.getElementById(tabName);
  if (tabElement instanceof HTMLElement) {
    tabElement.style.display = "block";
  }
}

export async function fetchLatestVideoIframe(
  apiKey: string,
  channelId: string,
): Promise<string> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&type=video&order=date&maxResults=1`,
  );
  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const videoId = data.items[0].id.videoId;
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    return `<iframe width="560" height="315" src="https://www.youtube.com/watch?v=NPDDPyezBM8" frameborder="0" allowfullscreen></iframe>`;
  }
}
