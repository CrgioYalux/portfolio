import { useUIUX } from '../../../providers/UIUX';

import LinkedinIcon from '../../../components/Icons/Linkedin';
import GithubIcon from '../../../components/Icons/Github';

import i18n from '../../../i18n';

const Introduction: React.FC = () => {
	const [value] = useUIUX();

	return (
		<div className="w-full flex flex-col gap-6 p-4 md:px-24">
			<div className="flex flex-col gap-2 justify-center items-center md:items-start">
				<h1 className="text-5xl flex flex-row gap-2 md:text-6xl">
					<span className="font-medium md:font-light">Sergio</span>
					<span className="font-extrabold">Yalux</span>
				</h1>
				<h2 className="text-lg font-normal text-center md:text-start md:text-xl">
					{i18n.section.introduction.subtext[value.language.current]}
				</h2>
			</div>
			<div className="flex flex-row gap-2 px-4 md:p-0 items-center justify-center md:justify-start">
				<a
					href="https://github.com/CrgioYalux"
					target="_blank"
					title="Github"
				>
					<GithubIcon className="h-8 w-8 fill-current" />
				</a>
				<a
					href="https://www.linkedin.com/in/sergioyalux/"
					target="_blank"
					title="Linkedin"
				>
					<LinkedinIcon className="h-8 w-8 fill-current" />
				</a>
				<a
					href={
						i18n.section.introduction.CV.filename[
							value.language.current
						]
					}
					type="application/pdf"
					title={
						i18n.section.introduction.CV.button[
							value.language.current
						]
					}
					download
					className="flex-none font-medium cursor-pointer border-2 border-current rounded-lg py-0.5 px-2"
				>
					{
						i18n.section.introduction.CV.button[
							value.language.current
						]
					}
				</a>
				<a
					href="mailto:sergioyalux1@gmail.com"
					rel="noopener noreferrer"
					title={
						i18n.section.introduction.mailto.button[
							value.language.current
						]
					}
					className="flex-none ml-auto md:m-0 font-medium tracking-wide cursor-pointer bg-primary text-text rounded-lg py-1 px-4"
				>
					{
						i18n.section.introduction.mailto.button[
							value.language.current
						]
					}
				</a>
			</div>
		</div>
	);
};

export default Introduction;
