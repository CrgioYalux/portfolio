import React from 'react';
import { useUIUX } from '../../../providers/UIUX';

import CommandPrompt from '../../../components/CommandPrompt';
import ArgentinaFlagIcon from '../../../components/Icons/ArgentinaFlag';
import LinkIcon from '../../../components/Icons/Link';

import i18n from '../../../i18n';

const Console: React.FC = () => {
	const [value] = useUIUX();

	const whoamiValues =
		i18n.section.console.whoami.values[value.language.current];

	return (
		<div className="w-full flex flex-col gap-2 items-start justify-center p-4 md:px-24 font-medium">
			<CommandPrompt text="whoami" />
			<div className="flex flex-col flex-wrap gap-1 md:gap-2 whitespace-nowrap md:flex-row font-normal">
				<span>Sergio Yalux</span>
				<span className="hidden md:inline">|</span>
				<span className="flex flex-row gap-1 items-center">
					<a
						href="https://www.youtube.com/watch?v=lyGG4n-2Ea4"
						className="flex flex-row gap-1 items-center md:hover:underline"
						target="_blank"
					>
						<ArgentinaFlagIcon className="w-5 h-5" />
						<span className="flex-1">Argentina</span>
						<LinkIcon className="w-3 h-3 fill-current" />
					</a>
				</span>
				<span className="hidden md:inline">|</span>
				{whoamiValues.map((v, i) => (
					<React.Fragment key={i}>
						<span className="whitespace-normal break-normal">
							{v}
						</span>
						{whoamiValues.length !== i + 1 && (
							<span className="hidden md:inline">|</span>
						)}
					</React.Fragment>
				))}
			</div>
			<CommandPrompt />
		</div>
	);
};

export default Console;
