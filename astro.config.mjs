// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Summit Technology Holdings Corporate Policies',
	        description: 'Corporate library for STH policies, standards, and governance',
			sidebar: [
			    {
					label: 'About',
					items: [
						//{ label: 'How to Use This Site', slug: 'about/index' },
					],
		        },
				{
					label: 'Company',
					items: [
						{
						label: 'Policies',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
						{
						label: 'Handbooks',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
						{
						label: 'Templates',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
					],
				},
				{
				label: 'Departments',
				items: [
					{
					label: 'HR',
					items: [
						{
						label: 'Policies',
						items: [
							{ label: 'Acceptable Use Policy', slug: 'departments/hr/policies/acceptableuse' },
						]
						},
						{
						label: 'Procedures',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
						{
						label: 'Guides',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
						{
						label: 'Forms',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
					],
					},
					{
					label: 'Finance',
					items: [
						{
						label: 'Policies',
						items: [
							//{ label: 'Policies', slug: 'departments/finance/policies/' },
						]
						},
						{
						label: 'Procedures',
						items: [
							//{ label: 'Policies', slug: 'departments/finance/policies/' },
						]
						},
						{
						label: 'Guides',
						items: [
							//{ label: 'Policies', slug: 'departments/finance/policies/' },
						]
						},
						{
						label: 'Forms',
						items: [
							//{ label: 'Policies', slug: 'departments/finance/policies/' },
						]
						},
					],
					},
					{
					label: 'Information Security',
					items: [
						{
						label: 'Policies',
						items: [
							{ label: 'Cryptographic Protections', slug: 'departments/information-security/policies/cryptographic-protections'},
						]
						},
						{
						label: 'Standards',
						items: [
							//{ label: 'Policies', slug: 'departments/finance/policies/' },
						]
						},
						{
						label: 'Procedures',
						items: [
							//{ label: 'Policies', slug: 'departments/finance/policies/' },
						]
						},
					],
					},
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