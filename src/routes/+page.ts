import { store } from '~/store/store';
import { client } from '~/store/client';
import type { PageLoad } from './$types';
import { Client } from 'twitter-api-sdk';

const bearer = (token: string) => `${token}`;

export const load: PageLoad = ({ url }) => {
	(async () => {
		console.log('aa');
		const paramToken = url.searchParams.get('token');
		const storeToken = await store.get<string>('token');
		if (paramToken) {
			await store.set('token', paramToken);
			client.set(new Client(bearer(paramToken)));
			console.log('set client');
		} else if (storeToken) {
			client.set(new Client(bearer(storeToken)));
			console.log('set client');
		}
	})();
};
