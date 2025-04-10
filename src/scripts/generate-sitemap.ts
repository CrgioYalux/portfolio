import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

(async () => {
	const sitemap = new SitemapStream({ hostname: 'https://sergioyalux.site' });

	sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });

	sitemap.end();

	const buffer = await streamToPromise(sitemap);
	const outPath = resolve('./dist/sitemap.xml');
	const outStream = createWriteStream(outPath);
	outStream.write(buffer);
})();
