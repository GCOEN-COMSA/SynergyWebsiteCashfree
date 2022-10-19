import { writable } from "svelte/store";

export const UIStores = {
  currentNavActive: writable<string>(""),
};
