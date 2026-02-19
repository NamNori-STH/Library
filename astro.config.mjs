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
							{ label: 'Floating Holiday', slug: 'departments/hr/policies/floatingholiday' },							
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
					label: 'Information Technology',
					items: [
						{
						label: 'Infrastructure',
						items: [
							{ label: 'CAP', slug: 'departments/information-technology/identity-access-management/entra-id/conditional-access/cap'},
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
							{ label: 'Cybersecurity & Data Privacy Governance', slug: 'departments/compliance/policies/01-gov'},
							{ label: 'Artificial & Autonomous Technologies', slug: 'departments/compliance/policies/02-aat'},
							{ label: 'Asset Management', slug: 'departments/compliance/policies/03-ast'},
							{ label: 'Business Continuity & Disaster Recovery', slug: 'departments/compliance/policies/04-bcd'},
							{ label: 'Capacity & Performance Planning', slug: 'departments/compliance/policies/05-cap'},
							{ label: 'Change Management', slug: 'departments/compliance/policies/06-chg'},															
							{ label: 'Cloud Security', slug: 'departments/compliance/policies/07-cld'},
							{ label: 'Compliance', slug: 'departments/compliance/policies/08-cpl'},
							{ label: 'Configuration Management', slug: 'departments/compliance/policies/09-cfg'},
							{ label: 'Continuous Monitoring', slug: 'departments/compliance/policies/10-mon'},							
							{ label: 'Cryptographic Protections', slug: 'departments/compliance/policies/11-cry'},
							{ label: 'Data Classification & Handling', slug: 'departments/compliance/policies/12-dch'},
							{ label: 'Endpoint Security', slug: 'departments/compliance/policies/14-end'},
							{ label: 'Human Resources Security', slug: 'departments/compliance/policies/15-hrs'},							
							{ label: 'Identification & Authentication', slug: 'departments/compliance/policies/16-iac'},
							{ label: 'Incident Response', slug: 'departments/compliance/policies/17-iro'},			
							{ label: 'Information Assurance', slug: 'departments/compliance/policies/18-iao'},
							{ label: 'Mobile Device Management', slug: 'departments/compliance/policies/20-mdm'},						
							{ label: 'Network Security', slug: 'departments/compliance/policies/21-net'},	
							{ label: 'Physical & Environmental Security', slug: 'departments/compliance/policies/22-pes'},
							{ label: 'Data Privacy', slug: 'departments/compliance/policies/23-pri'},
							{ label: 'Risk Management', slug: 'departments/compliance/policies/25-rsk'},																								
							{ label: 'Security Awareness Training', slug: 'departments/compliance/policies/28-sat'},	
							{ label: 'Technology Devopment & Acquisition', slug: 'departments/compliance/policies/29-tda'},							
							{ label: 'Third Party Management', slug: 'departments/compliance/policies/30-tpm'},
							{ label: 'Threat Management', slug: 'departments/compliance/policies/31-thr'},
							{ label: 'Vulnerability & Patch Management', slug: 'departments/compliance/policies/32-vpm'},
							{ label: 'Web Security', slug: 'departments/compliance/policies/33-web'},							
						]
						},
						{
						label: 'Standards',
						items: [
							{ label: 'Compliance', slug: 'departments/compliance/standards/08-cpl-std'},
							{ label: 'Human Resources Security', slug: 'departments/compliance/standards/15-hrs-std'},	
							{ label: 'Security Awareness & Training', slug: 'departments/compliance/standards/28-sat-std'},														
							{ label: 'Third Party Management', slug: 'departments/compliance/standards/30-tpm-std'},	
							{ label: 'Threat Management', slug: 'departments/compliance/standards/31-thr-std'},							
						]
						},
					],
					},
				],
				},
			],								
			logo: {
					src: '/src/assets/Transparent.png',
					replacesTitle: false,
			},
		}),
	],
});