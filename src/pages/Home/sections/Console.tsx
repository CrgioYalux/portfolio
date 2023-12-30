import CommandPrompt from "../../../components/CommandPrompt";
import ArgentinaFlagIcon from "../../../components/Icons/ArgentinaFlag";
import LinkIcon from "../../../components/Icons/Link";

const Console: React.FC = () => {
	return (
		<div className='w-full flex flex-col gap-2 items-start justify-center py-4 px-4 md:px-10 font-medium'>
			<CommandPrompt text='whoami' />
			<div className='flex flex-col flex-wrap gap-1 md:gap-2 whitespace-nowrap md:flex-row font-normal'>
				<span>Sergio Yalux</span>
				<span className='hidden md:inline'>|</span>
				<span>Stuff (but mostly web) Developer</span>
				<span className='hidden md:inline'>|</span>
				<span>He/Him</span>
				<span className='hidden md:inline'>|</span>
				<span>23 years old</span>
				<span className='hidden md:inline'>|</span>
				<span className='flex flex-row gap-1 items-center'>
				<a href="https://www.youtube.com/watch?v=lyGG4n-2Ea4" className='flex flex-row gap-1 items-center md:hover:underline' target='_blank'>
					<ArgentinaFlagIcon className='w-5 h-5' />
					<span className='flex-1'>Argentina</span>
					<LinkIcon className='w-3 h-3 fill-current' />
				</a>
				</span>
				<span className='hidden md:inline'>|</span>
				<span className='whitespace-normal break-word'>
				<a href="https://utn.edu.ar/es/estudiar-utn?tipo_busqueda=carreras&id_tipos_carreras=3&id_seleccion=63" className='flex flex-row gap-1 items-center' target='_blank'>
					<span className='flex-1 md:hover:underline'>University Programming Technician Degree (UTN-FRT)</span>
					<LinkIcon className='w-3 h-3 fill-current' />
				</a>
				</span>
			</div>
			<CommandPrompt />
		</div>
	);
};

export default Console;
