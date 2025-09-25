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
					label: 'Company',
					items: [
						{
						label: 'Policies',
						items: [
							//{ label: 'Policies', slug: 'departments/hr/policies/' },
						]
						},
						{
						label: 'Procedures',
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
							{ label: 'Artificial & Autonomous Technologies', slug: 'departments/information-security/policies/02-aat'},
							{ label: 'Asset Management', slug: 'departments/information-security/policies/03-ast'},
							{ label: 'Business Continuity & Disaster Recovery', slug: 'departments/information-security/policies/04-bcd'},
							{ label: 'Capacity & Performance Planning', slug: 'departments/information-security/policies/05-cap'},
							{ label: 'Change Management', slug: 'departments/information-security/policies/06-chg'},															
							{ label: 'Cryptographic Protections', slug: 'departments/information-security/policies/11-cry'},
							{ label: 'Identification & Authentication', slug: 'departments/information-security/policies/16-iac'},
							{ label: 'Technology Devopment & Acquisition', slug: 'departments/information-security/policies/29-tda'},							
							{ label: 'Third Party Management', slug: 'departments/information-security/policies/30-tpm'},
							{ label: 'Vulnerability & Patch Management', slug: 'departments/information-security/policies/32-vpm'},
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