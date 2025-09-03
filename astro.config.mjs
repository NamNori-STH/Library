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
						{ label: 'How to Use This Site', slug: 'about/index' },
						{ label: 'Style Guide', slug: 'about/style-guide' },
						{ label: 'Changelog', slug: 'about/changelog' },
					],
		        },
				{
					label: 'Company',
					items: [
						{ label: 'Policies', slug: 'company/policies/' },
						{ label: 'Procedures', slug: 'company/procedures/' },
						{ label: 'Handbooks', slug: 'company/handbooks/' },
						{ label: 'Templates', slug: 'company/templates/' },
					],
				},
				{
				label: 'Departments',
				items: [
					{
					label: 'HR',
					items: [
						{ label: 'Policies', slug: 'departments/hr/policies/' },
						{ label: 'Procedures', slug: 'departments/hr/procedures/' },
						{ label: 'Guides', slug: 'departments/hr/guides/' },
						{ label: 'Forms', slug: 'departments/hr/forms/' },
						{ label: 'Onboarding', slug: 'departments/hr/onboarding/' },
						{ label: 'Acceptable Use Policy', slug: 'hr/acceptableuse'},
					],
					},
					{
					label: 'Finance',
					items: [
						{ label: 'Policies', slug: 'departments/finance/policies/' },
						{ label: 'Procedures', slug: 'departments/finance/procedures/' },
						{ label: 'Guides', slug: 'departments/finance/guides/' },
						{ label: 'Forms', slug: 'departments/finance/forms/' },
					],
					},
					{
					label: 'Information Security',
					items: [
						{ label: 'Policies', slug: 'departments/infosec/policies/' },
						{ label: 'Standards', slug: 'departments/infosec/standards/' },
						{ label: 'Control Objectives', slug: 'departments/infosec/control-objectives/' },
						{ label: 'Control Catalog', slug: 'departments/infosec/control-catalog/' },
						{ label: 'Procedures', slug: 'departments/infosec/procedures/' },
						{ label: 'Mappings', slug: 'departments/infosec/mappings/' },
						{ label: 'Registers', slug: 'departments/infosec/registers/' },
						{ label: 'Evidence Indexes', slug: 'departments/infosec/evidence-indexes/' },
					],
					},
				],
				},
				{
				label: 'Admin',
				items: [
					{ label: 'Owners', slug: 'admin/owners' },
					{ label: 'Review Calendar', slug: 'admin/review-calendar' },
					{ label: 'Templates', slug: 'admin/templates/' },
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