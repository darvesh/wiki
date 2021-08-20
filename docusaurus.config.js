const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Darvesh",
	tagline: "Personal website",
	url: "https://darve.sh",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "darvesh", // Usually your GitHub org/user name.
	projectName: "darve.sh", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "Darvesh",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "doc",
					docId: "intro",
					position: "left",
					label: "Wiki",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					label: "GitHub",
					href: "https://github.com/darvesh/darve.sh",
				},
				{
					label: "Stack Overflow",
					href: "https://stackoverflow.com/users/8892700/darvesh",
				},
			],
		},
		footer: {
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()} Darvesh. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	plugins: [
		require.resolve("@cmfcmf/docusaurus-search-local", {
			indexDocs: true,
			docsRouteBasePath: "/wiki",
			indexBlog: false,
		}),
	],
};
