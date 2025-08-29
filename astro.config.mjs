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
					label: 'HR Policies',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Acceptable Use Policy', slug: 'hr/acceptableuse'},
					],
				},
				{
					label: 'InfoSec Policies',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Information Security Program', slug: 'information-security/information-security-program'},
						{ label: 'Access Control', slug: 'information-security/access-control'},
						{ label: 'Cryptographic Protections', slug: 'information-security/cryptographic-protections'},
						{ label: 'Asset & Configuration Management', slug: 'information-security/asset-config-management'},
						{ label: 'Third-Party Management', slug: 'information-security/third-party-management'},
					],
				},
			],
			logo: {
					src: '/src/assets/summit logo.png',
					replacesTitle: false,
			},
		}),
	],
});