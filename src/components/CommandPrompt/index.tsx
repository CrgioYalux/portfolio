interface CommandPromptProps {
	className?: string;
	text?: string;
};

const Prompt: React.FC = () => {
	 return (
		<span>
			<span className='text-accent-900 dark:text-accent'>ylx@mint</span>
			<span className='text-current'>:</span>
			<span className='text-secondary-900 dark:text-secondary'>~</span>
			<span className='text-current'>$</span>
		</span>
	 );
};

const BlockCursor: React.FC = () => {
	return (
		<span className='w-[1ch] h-5 bg-current animate-pulse-switch'></span>
	);
};

const CommandPrompt: React.FC<CommandPromptProps> = ({ className = '', text }) => {
	return (
		<div className={`flex flex-row gap-1 items-center ${className}`}>
			<Prompt />
			{!text 
			? <BlockCursor /> 
			: <span className='text-current font-normal'>{text}</span>}
		</div>
	);
};

export default CommandPrompt;
