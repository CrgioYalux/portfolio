import Divider from '../../components/Divider';
import HeaderSection from './sections/Header';
import IntroductionSection from './sections/Introduction';
import ConsoleSection from './sections/Console';
import ProjectsSection from './sections/Projects';
import SoftwareSection from './sections/Software';

const Home: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
			<HeaderSection />
			<Divider />
			<IntroductionSection />
			<Divider />
			<ConsoleSection />
			<Divider />
			<ProjectsSection />
			<Divider />
			<SoftwareSection />
		</div>
	);
};

export default Home;
