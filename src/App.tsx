import UIUXContextProvider from './providers/UIUX';

import Home from './pages/Home';

const App: React.FC = () => {
	return (
		<UIUXContextProvider>
			<Home />
		</UIUXContextProvider>
	);
};

export default App;
