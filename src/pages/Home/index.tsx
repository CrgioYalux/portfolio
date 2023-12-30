import { useUIUX } from "../../providers/UIUX";
import SwitchButton from "../../components/SwitchButton";
import ArgentinaFlagIcon from "../../components/Icons/ArgentinaFlag";
import LinkIcon from "../../components/Icons/Link";

const Divider: React.FC = () => {
    return (
	<div className='bg-primary-300 dark:bg-primary-700 w-full h-0.5 opacity-50'></div>
    );
};

const Home: React.FC = () => {
    const [value, action] = useUIUX();

    return (
		<div className='min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark'>
			<div className='w-full flex flex-col items-center justify-center text-sm py-2'>
				<div className='flex flex-col gap-1 items-center justify-center md:flex-row md:ml-auto'>
					<SwitchButton
					onClick={action.theme.switch}
					leftText={<span className='w-[7ch] text-right'>dark</span>}
					rightText={<span className='w-[7ch] text-left'>light</span>}
					checked={value.theme.current === 'light'}
					className='gap-1'
					/>
					<SwitchButton
					onClick={action.language.switch}
					leftText={<span className='w-[7ch] text-right'>english</span>}
					rightText={<span className='w-[7ch] text-left'>spanish</span>}
					checked={value.language.current === 'spanish'}
					className='gap-1'
					/>
				</div>
			</div>
			<Divider />
			<div className='w-full flex flex-col gap-4 items-center justify-center py-4 px-2 md:items-start md:px-10'>
				<div className='flex flex-col gap-4 items-center md:items-start'>
					<h1 className='text-current text-4xl md:text-5xl tracking-widest flex flex-row gap-2'>
					<span>Sergio</span> 
					<span className='font-bold'>Yalux</span>
					</h1>
					<h3 className='text-xl'>I enjoy making things</h3>
					{/*
					<div className='flex flex-col items-center gap-2 md:flex-row'>
					<h3 className='text-background-light text-3xl font-mono font-bold bg-primary rounded px-2 py-0.5'>developer</h3>
					<span>I enjoy making things</span>
					</div>
					*/}
				</div>
				<div className='w-full md:w-max flex flex-row justify-between md:gap-2 font-semibold'>
					{/*
					<span>23 years old</span>
					<span>Argentina</span>
					*/}
					{/* TODO: Add links here */}
				</div>
			</div>
			<Divider />
			<div className='w-full flex flex-col gap-2 items-start justify-center py-4 px-4 md:px-10 font-medium'>
				<div className='flex flex-row gap-1'>
					<span>
					<span className='text-accent-900 dark:text-accent'>ylx@mint</span>
					<span className='text-current'>:</span>
					<span className='text-secondary-900 dark:text-secondary'>~</span>
					<span className='text-current'>$</span>
					<span className='text-current pl-2 font-normal'>whoami</span>
					</span>
				</div>
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
					<a href="https://www.youtube.com/watch?v=lyGG4n-2Ea4" className='flex flex-row gap-1 items-center md:hover:underline'>
						<ArgentinaFlagIcon className='w-5 h-5' />
						<span className='flex-1'>Argentina</span>
						<LinkIcon className='w-3 h-3 fill-current' />
					</a>
					</span>
					<span className='hidden md:inline'>|</span>
					<span className='whitespace-normal break-word'>
					<a href="https://utn.edu.ar/es/estudiar-utn?tipo_busqueda=carreras&id_tipos_carreras=3&id_seleccion=63" className='flex flex-row gap-1 items-center'>
						<span className='flex-1 md:hover:underline'>University Programming Technician Degree (UTN-FRT)</span>
						<LinkIcon className='w-3 h-3 fill-current' />
					</a>
					</span>
				</div>
				<div className='flex flex-row gap-1 items-center'>
					<span>
					<span className='text-accent-900 dark:text-accent'>ylx@mint</span>
					<span className='text-current'>:</span>
					<span className='text-secondary-900 dark:text-secondary'>~</span>
					<span className='text-current'>$</span>
					</span>
					<span className='w-[1ch] h-5 bg-current animate-pulse-switch'></span>
				</div>
			</div>
			<Divider />
		</div>
    );
};

export default Home;
