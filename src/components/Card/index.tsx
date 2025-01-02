import LinkIcon from '../Icons/Link';
import GithubIcon from '../Icons/Github';

interface CardProps {
	className?: string;
	title: string;
	repository: string;
	deploy: string;
	description: string;
	image?: string;
}

const Card: React.FC<CardProps> = ({
	className = '',
	title,
	repository,
	deploy,
	description,
}) => {
	return (
		<div className="flex-auto md:flex-none grid grid-rows-[auto_1fr] text-text-light dark:text-text-dark border-2 border-current">
			<div className="flex justify-between items-center gap-4 px-2 py-1 border-b-2 bg-current border-current">
				<a
					href={deploy}
					target="_blank"
					className="text-text-dark dark:text-text-light cursor-pointer flex gap-1 items-center"
				>
					<span className="text-base font-medium">{title}</span>
					<LinkIcon className="h-3 w-3 fill-current" />
				</a>
				<a
					href={repository}
					target="_blank"
					className="text-text-dark dark:text-text-light cursor-pointer"
				>
					<GithubIcon className="h-6 w-6 fill-current" />
				</a>
			</div>
			<div
				className={`p-2 text-sm max-h-20 overflow-y-auto ${className}`}
			>
				{description}
			</div>
		</div>
	);
};

export default Card;
