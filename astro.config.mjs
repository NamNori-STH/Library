// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Summit Technology Holdings Corporate Policies',
			description: 'Corporate library for policies',
			sidebar: [
				{
					label: 'Policies',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Information Security Program', slug: 'policies/information-security-program'},
						{ label: 'Access Control', slug: 'policies/access-control'},
						{ label: 'Cryptographic Protections', slug: 'policies/cryptographic-protections'},
						{ label: 'Asset & Configuration Management', slug: 'policies/asset-config-management'},
						{ label: 'Third-Party Management', slug: 'policies/third-party-management'},
					],
				},
			],
			logo: {
					src: './src/assets/summit logo.png',
					replacesTitle: false,
			},
		}),
	],
});