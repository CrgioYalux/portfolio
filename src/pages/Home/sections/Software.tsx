import { useUIUX } from '../../../providers/UIUX';

import VimIcon from '../../../components/Icons/Vim';
import LuaIcon from '../../../components/Icons/Lua';
import GitIcon from '../../../components/Icons/Git';
import HTMLIcon from '../../../components/Icons/HTML';
import CSSIcon from '../../../components/Icons/CSS';
import JavascriptIcon from '../../../components/Icons/Javascript';
import MySQLIcon from '../../../components/Icons/MySQL';
import NodeJSIcon from '../../../components/Icons/NodeJS';
import TypescriptIcon from '../../../components/Icons/Typescript';
import ReactIcon from '../../../components/Icons/React';
import NextJSIcon from '../../../components/Icons/NextJS';
import ReactRouterIcon from '../../../components/Icons/ReactRouter';
import TailwindCSSIcon from '../../../components/Icons/TailwindCSS';
import LinuxIcon from '../../../components/Icons/Linux';
import BashIcon from '../../../components/Icons/Bash';
import CIcon from '../../../components/Icons/C';
import SvelteIcon from '../../../components/Icons/Svelte';
import AstroIcon from '../../../components/Icons/Astro';
import DockerIcon from '../../../components/Icons/Docker';
import GodotEngineIcon from '../../../components/Icons/GodotEngine';
import MongoDBIcon from '../../../components/Icons/MongoDB';
import RustIcon from '../../../components/Icons/Rust';

import i18n from '../../../i18n';

const Software: React.FC = () => {
	const [value] = useUIUX();

	return (
		<div className="w-full flex flex-col gap-4 items-center justify-center md:items-start p-4 md:px-24">
			<h2 className="text-3xl text-center md:text-start">Software</h2>
			<div className="w-full grid grid-rows-[3rem_1fr]">
				<h3 className="text-xl text-center md:text-start">
					{
						i18n.section.software.section.currentlyUsing[
							value.language.current
						]
					}
				</h3>
				<div className="w-full md:w-2/3 grid grid-cols-[repeat(auto-fit,minmax(min(3rem,100%),1fr))] place-items-center gap-2 p-4 bg-primary-100/[0.5] dark:bg-primary-900 rounded-lg">
					<VimIcon className="max-w-8 max-h-8 cursor-pointer" />
					<LuaIcon className="max-w-8 max-h-8 cursor-pointer" />
					<GitIcon className="max-w-8 max-h-8 cursor-pointer" />
					<HTMLIcon className="max-w-8 max-h-8 cursor-pointer" />
					<CSSIcon className="max-w-8 max-h-8 cursor-pointer" />
					<NodeJSIcon className="max-w-8 max-h-8 cursor-pointer" />
					<MySQLIcon className="max-w-8 max-h-8 cursor-pointer" />
					<JavascriptIcon className="max-w-8 max-h-8 cursor-pointer" />
					<TypescriptIcon className="max-w-8 max-h-8 cursor-pointer" />
					<ReactIcon className="max-w-8 max-h-8 cursor-pointer" />
					<NextJSIcon className="max-w-8 max-h-8 cursor-pointer" />
					<ReactRouterIcon className="max-w-8 max-h-8 cursor-pointer" />
					<TailwindCSSIcon className="max-w-8 max-h-8 cursor-pointer" />
				</div>
			</div>
			<div className="w-full grid grid-rows-[3rem_1fr]">
				<h3 className="text-xl text-center md:text-start">
					{
						i18n.section.software.section.learning[
							value.language.current
						]
					}
				</h3>
				<div className="w-full md:w-2/3 grid grid-cols-[repeat(auto-fit,minmax(min(3rem,100%),1fr))] place-items-center gap-2 p-4 bg-primary-100/[0.5] dark:bg-primary-900 rounded-lg">
					<LinuxIcon className="max-w-8 max-h-8 cursor-pointer" />
					<BashIcon className="max-w-8 max-h-8 cursor-pointer" />
					<CIcon className="max-w-8 max-h-8 cursor-pointer" />
					<SvelteIcon className="max-w-8 max-h-8 cursor-pointer" />
				</div>
			</div>
			<div className="w-full grid grid-rows-[3rem_1fr]">
				<h3 className="text-xl text-center md:text-start">
					{
						i18n.section.software.section.planningOnLearningNext[
							value.language.current
						]
					}
				</h3>
				<div className="w-full md:w-2/3 grid grid-cols-[repeat(auto-fit,minmax(min(3rem,100%),1fr))] place-items-center gap-2 p-4 bg-primary-100/[0.5] dark:bg-primary-900 rounded-lg">
					<AstroIcon className="max-w-8 max-h-8 cursor-pointer" />
					<DockerIcon className="max-w-8 max-h-8 cursor-pointer" />
					<GodotEngineIcon className="max-w-8 max-h-8 cursor-pointer" />
					<MongoDBIcon className="max-w-8 max-h-8 cursor-pointer" />
					<RustIcon className="max-w-8 max-h-8 cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Software;
