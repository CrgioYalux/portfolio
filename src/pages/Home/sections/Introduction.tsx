import { useUIUX } from "../../../providers/UIUX";

import LinkedinIcon from "../../../components/Icons/Linkedin";
import GithubIcon from "../../../components/Icons/Github";

import i18n from "../../../i18n";

const Introduction: React.FC = () => {
	const [value] = useUIUX();

	return (
		<div className='w-full flex flex-col gap-6 py-4 px-2 md:px-10'>
			<div className='flex flex-col gap-3 justify-center items-center md:items-start md:gap-2'>
				<h1 className='text-5xl flex flex-row gap-2 md:text-6xl'>
					<span className='font-medium md:font-light'>Sergio</span> 
					<span className='font-extrabold'>Yalux</span>
				</h1>
				<h3 className='text-lg font-normal text-center md:text-start md:text-xl'>{i18n.section.introduction.subtext[value.language.current]}</h3>
			</div>
			<div className='flex flex-row gap-2 items-center justify-center md:justify-start'>
				<a href="https://www.linkedin.com/in/sergioyalux/" target='_blank'>
					<LinkedinIcon className='h-8 w-8 fill-current' />
				</a>
				<a href="https://github.com/CrgioYalux" target='_blank'>
					<GithubIcon className='h-8 w-8 fill-current' />
				</a>
				<a href={i18n.section.introduction.CV.filename[value.language.current]} download className='font-medium cursor-pointer border-2 border-current rounded-lg py-0.5 px-2'>
					{i18n.section.introduction.CV.button[value.language.current]}
				</a>
			</div>
		</div>
	);
};

export default Introduction;
