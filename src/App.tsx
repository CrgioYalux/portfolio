import UIUXContextProvider from './providers/UIUX';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import Head from './seo/Head';

const App: React.FC = () => {
	return (
		<HelmetProvider>
			<UIUXContextProvider>
				<Head />
				<Home />
			</UIUXContextProvider>
		</HelmetProvider>
	);
};

export default App;
