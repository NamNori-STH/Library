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
						{ label: 'Network & Infrastructure Management', slug: 'information-security/networksecurity'},					
						{ label: 'Vulnerability & Patch Management', slug: 'information-security/vulnerabilitypatchmgmt'},
						{ label: 'Incident Response', slug: 'information-security/incidentresponse'},
						{ label: 'Business Continuity & Disaster Recovery', slug: 'information-security/businesscontinuity'},
						{ label: 'Data Classification & Handling', slug: 'information-security/dataclassification'},
						{ label: 'Privacy', slug: 'information-security/privacy'},
						{ label: 'Human Resources', slug: 'information-security/humanresources'},
						{ label: 'Audit Logging & Monitoring', slug: 'information-security/auditlogging'},
						{ label: 'Mobile Device & Remote Work', slug: 'information-security/mdm'},
						{ label: 'Change Management', slug: 'information-security/changemanagement'},
						{ label: 'Secure Development', slug: 'information-security/securedev'},
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