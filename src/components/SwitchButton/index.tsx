import './SwitchButton.css';

interface ButtonProps {
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
	return (
		<div
			className={`w-10 h-6 rounded border-2 border-current flex flex-row items-center px-0.5 ${className}`}
		>
			<div
				className={`SwitchButton__drop w-4 h-4 bg-current rounded-sm`}
			></div>
		</div>
	);
};

interface SkeletonProps {
	onClick: () => void;
	className?: string;
	checked?: boolean;
	children: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({
	onClick,
	className = '',
	checked = false,
	children,
}) => {
	return (
		<label className="SwitchButton">
			<input
				type="checkbox"
				onChange={onClick}
				className="hidden"
				checked={checked}
			/>
			<div className={className}>{children}</div>
		</label>
	);
};

interface SwitchButtonProps {
	onClick: () => void;
	className?: string;
	checked?: boolean;

	children?: React.ReactNode;
	childrenPosition?: 'top' | 'bottom';
	topText?: React.ReactNode;
	rightText?: React.ReactNode;
	bottomText?: React.ReactNode;
	leftText?: React.ReactNode;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
	onClick,
	className = '',
	checked = false,

	children,
	childrenPosition,
	topText,
	rightText,
	bottomText,
	leftText,
}) => {
	if (children)
		return (
			<Skeleton
				className={`cursor-pointer flex flex-col items-center justify-center ${className}`}
				onClick={onClick}
				checked={checked}
			>
				{childrenPosition === 'top' ? children : ''}
				<Button />
				{childrenPosition === 'bottom' || childrenPosition === undefined
					? children
					: ''}
			</Skeleton>
		);

	if ((leftText || rightText) && !topText && !bottomText)
		return (
			<Skeleton
				className={`cursor-pointer flex flex-row items-center justify-center ${className}`}
				onClick={onClick}
				checked={checked}
			>
				{leftText}
				<Button />
				{rightText}
			</Skeleton>
		);

	if ((topText || bottomText) && !leftText && !rightText)
		return (
			<Skeleton
				className={`cursor-pointer flex flex-col items-center justify-center ${className}`}
				onClick={onClick}
				checked={checked}
			>
				{topText}
				<Button />
				{bottomText}
			</Skeleton>
		);

	return (
		<Skeleton className={className} onClick={onClick} checked={checked}>
			<Button />
		</Skeleton>
	);
};

export default SwitchButton;
