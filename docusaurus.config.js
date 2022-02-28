const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Poly State',
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
				title: 'Poly State',
				logo: {
					alt: 'poly-state',
					src: 'img/logo.jpeg',
				},
				items: [
					{
						type: 'doc',
						docId: 'installation',
						position: 'left',
						label: 'Documention',
					},
					{
						type: 'doc',
						docId: 'React Essentials/react-quick-start',
						position: 'left',
						label: 'React',
					},
					{
						type: 'doc',
						docId: 'nextjs-ssr',
						position: 'left',
						label: 'Next.js',
					},
					{
						type: 'doc',
						docId: 'preact',
						position: 'left',
						label: 'Preact',
					},
					{
						href: 'https://github.com/poly-state',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright:
					'Made with ❤️ and built using TypeScript and hosted on GitHub Pages',
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
