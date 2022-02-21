// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Poly state',
	tagline: 'A boilerplate free state management library',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo.png',
	organizationName: 'poly-state', // Usually your GitHub org/user name.
	projectName: 'poly-state', // Usually your repo name.

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
				},
				blog: {
					showReadingTime: true,
					editUrl:
						'https://github.com/facebook/docusaurus/edit/main/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Poly state',
				logo: {
					alt: 'Poly state',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'installation',
						position: 'left',
						label: 'Documention',
					},
					{
						href: 'https://github.com/poly-state/poly-state',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright:
					'Made with ❤️ and built using Typescript and hosted on Netlify',
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
