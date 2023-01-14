import { writable } from 'svelte/store';
import type { Client } from 'twitter-api-sdk';

export const client = writable<Client | null>(null);
