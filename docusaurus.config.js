const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Poly state',
	tagline: 'A boilerplate free state management library',
	url: 'https://poly-state.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo.png',
	organizationName: 'poly-state',
	deploymentBranch: 'gh-pages',
	projectName: 'poly-state.github.io',
	trailingSlash: false,

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
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
					'Made with ❤️ in Dhaka. Built using TypeScript and hosted on Netlify',
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
