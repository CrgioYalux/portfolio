import { useUIUX } from '../../../providers/UIUX';

import Card from '../../../components/Card';

import i18n from '../../../i18n';

const Projects: React.FC = () => {
	const [value] = useUIUX();

	return (
		<div className="w-full flex flex-col items-center justify-center p-4 md:px-24">
			<div className="w-full grid grid-rows-[3rem_1fr] gap-4">
				<h2 className="text-3xl text-center md:text-start">
					{i18n.section.projects.title[value.language.current]}
				</h2>
				<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-2">
					{i18n.section.projects.values[value.language.current].map(
						(v, i) => (
							<Card key={i} {...v} />
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
