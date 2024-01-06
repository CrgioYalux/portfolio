import { useUIUX } from '../../../providers/UIUX';

import VimIcon from "../../../components/Icons/Vim";
import GitIcon from "../../../components/Icons/Git";
import HTMLIcon from "../../../components/Icons/HTML";
import CSSIcon from "../../../components/Icons/CSS";
import JavascriptIcon from "../../../components/Icons/Javascript";
import MySQLIcon from "../../../components/Icons/MySQL";
import NodeJSIcon from "../../../components/Icons/NodeJS";
import TypescriptIcon from "../../../components/Icons/Typescript";
import ReactJSIcon from "../../../components/Icons/React";
import ReactRouterIcon from "../../../components/Icons/ReactRouter";
import TailwindCSSIcon from "../../../components/Icons/TailwindCSS";
import LinuxIcon from "../../../components/Icons/Linux";
import BashIcon from "../../../components/Icons/Bash";
import CIcon from "../../../components/Icons/C";
import SvelteIcon from "../../../components/Icons/Svelte";
import AstroIcon from "../../../components/Icons/Astro";
import DockerIcon from "../../../components/Icons/Docker";
import GodotEngineIcon from "../../../components/Icons/GodotEngine";
import MongoDBIcon from "../../../components/Icons/MongoDB";
import RustIcon from "../../../components/Icons/Rust";

import i18n from "../../../i18n";

const Software: React.FC = () => {
	const [value] = useUIUX();

	return (
		<div className='w-full flex flex-col gap-4 items-center justify-center md:items-start p-4 md:px-10'>
			<h2 className='text-3xl text-center md:text-start'>Software</h2>
			<div className='w-full grid grid-rows-[3rem_1fr]'>
				<h3 className='text-xl text-center md:text-start'>{i18n.section.software.section.currentlyUsing[value.language.current]}</h3>
				<div className='w-full md:w-2/3 grid grid-cols-[repeat(auto-fit,minmax(min(3rem,100%),1fr))] place-items-center gap-2 p-2 bg-primary-100/[0.5] dark:bg-primary-900 rounded-lg'>
					<VimIcon className='max-h-10 max-w-10' />
					<GitIcon className='max-h-10 max-w-10' />
					<HTMLIcon className='max-h-10 max-w-10' />
					<CSSIcon className='max-h-10 max-w-10' />
					<JavascriptIcon className='max-h-10 max-w-10' />
					<NodeJSIcon className='max-h-10 max-w-10' />
					<MySQLIcon className='max-h-10 max-w-10' />
					<TypescriptIcon className='max-h-10 max-w-10' />
					<ReactJSIcon className='max-h-10 max-w-10' />
					<ReactRouterIcon className='max-h-10 max-w-10' />
					<TailwindCSSIcon className='max-h-10 max-w-10' />
				</div>
			</div>
			<div className='w-full grid grid-rows-[3rem_1fr]'>
				<h3 className='text-xl text-center md:text-start'>{i18n.section.software.section.learning[value.language.current]}</h3>
				<div className='w-full md:w-2/3 grid grid-cols-[repeat(auto-fit,minmax(min(3rem,100%),1fr))] place-items-center gap-2 p-2 bg-primary-100/[0.5] dark:bg-primary-900 rounded-lg'>
					<LinuxIcon className='h-10 w-10' />
					<BashIcon className='h-10 w-10' />
					<CIcon className='h-10 w-10' />
					<SvelteIcon className='h-10 w-10' />
				</div>
			</div>
			<div className='w-full grid grid-rows-[3rem_1fr]'>
				<h3 className='text-xl text-center md:text-start'>{i18n.section.software.section.planningOnLearningNext[value.language.current]}</h3>
				<div className='w-full md:w-2/3 grid grid-cols-[repeat(auto-fit,minmax(min(3rem,100%),1fr))] place-items-center gap-2 p-2 bg-primary-100/[0.5] dark:bg-primary-900 rounded-lg'>
					<AstroIcon className='h-10 w-10' />
					<DockerIcon className='h-10 w-10' />
					<GodotEngineIcon className='h-10 w-10' />
					<MongoDBIcon className='h-10 w-10' />
					<RustIcon className='h-10 w-10' />
				</div>
			</div>
		</div>
	);
};

export default Software;
