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
							{ label: 'Cybersecurity & Data Privacy Governance', slug: 'departments/information-security/policies/01-gov'},
							{ label: 'Artificial & Autonomous Technologies', slug: 'departments/information-security/policies/02-aat'},
							{ label: 'Asset Management', slug: 'departments/information-security/policies/03-ast'},
							{ label: 'Business Continuity & Disaster Recovery', slug: 'departments/information-security/policies/04-bcd'},
							{ label: 'Capacity & Performance Planning', slug: 'departments/information-security/policies/05-cap'},
							{ label: 'Change Management', slug: 'departments/information-security/policies/06-chg'},															
							{ label: 'Cloud Security', slug: 'departments/information-security/policies/07-cld'},
							{ label: 'Compliance', slug: 'departments/information-security/policies/08-cpl'},
							{ label: 'Configuration Management', slug: 'departments/information-security/policies/09-cfg'},
							{ label: 'Continuous Monitoring', slug: 'departments/information-security/policies/10-mon'},							
							{ label: 'Cryptographic Protections', slug: 'departments/information-security/policies/11-cry'},
							{ label: 'Data Classification & Handling', slug: 'departments/information-security/policies/12-dch'},
							{ label: 'Endpoint Security', slug: 'departments/information-security/policies/14-end'},
							{ label: 'Human Resources Security', slug: 'departments/information-security/policies/15-hrs'},							
							{ label: 'Identification & Authentication', slug: 'departments/information-security/policies/16-iac'},
							{ label: 'Incident Response', slug: 'departments/information-security/policies/17-iro'},			
							{ label: 'Information Assurance', slug: 'departments/information-security/policies/18-iao'},
							{ label: 'Mobile Device Management', slug: 'departments/information-security/policies/20-mdm'},						
							{ label: 'Network Security', slug: 'departments/information-security/policies/21-net'},	
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