import {writable} from 'svelte/store'

export const showingCTA = writable(false);

export const scrollPer = writable(0);
export const scrollPosition = writable(0);