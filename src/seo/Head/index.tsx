import { Helmet } from 'react-helmet-async';

const Head = () => (
	<Helmet>
		{/* structured data */}
		<script type="application/ld+json">
			{JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Person',
				name: 'Sergio Yalux',
				url: 'https://sergioyalux.site',
				sameAs: [
					'https://www.linkedin.com/in/sergioyalux',
					'https://github.com/crgioyalux',
				],
				jobTitle: 'Full Stack Web Developer',
			})}
		</script>

		{/* graphs */}
		<meta property="og:title" content="Sergio Yalux" />
		<meta
			property="og:description"
			content="Explore my projects and skills."
		/>
		<meta
			property="og:image"
			content="https://avatars.githubusercontent.com/u/71143439?v=4"
		/>
		<meta property="og:url" content="https://sergioyalux.site" />
		<meta property="og:type" content="website" />
	</Helmet>
);

export default Head;
