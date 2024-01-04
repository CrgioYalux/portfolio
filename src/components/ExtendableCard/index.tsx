import { useState } from 'react';
import AngleDownIcon from '../Icons/AngleDown';
import GithubIcon from '../Icons/Github';

interface SkeletonProps {
    className?: string;
    title: string;
    repository: string;
    deploy: string;
    children: React.ReactNode;
    isOpen: boolean;
    switchOpen: () => void;
};

const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    title,
    repository,
    deploy,
    children,
    isOpen,
    switchOpen,
}) => {
    return (
        <div className='h-full flex flex-col gap-2 bg-primary-300 rounded-lg p-2 md:w-80 text-text text-base'>
            <div className='flex-none basis-10 flex flex-row gap-4 justify-between items-center'>
                <div className='flex flex-row gap-2 items-center'>
                    <a href={repository} target='_blank' className='cursor-pointer'>
                        <GithubIcon className='h-6 w-6 fill-current' />
                    </a>
                    <a href={deploy} target='_blank' className='cursor-pointer text-lg font-bold md:hover:underline'>
                        <span className='md:whitespace-nowrap'>{title}</span>
                    </a>
                </div>
                <button 
                onClick={switchOpen}
                className='border-2 border-current box-content p-1 rounded-full grid place-items-center'
                >
                    {<AngleDownIcon className={`h-4 w-4 fill-current pt-0.5 ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-100`} />}
                </button>
            </div>
            <div className={`grow-0 shrink ${isOpen ? 'basis-full py-2' : 'basis-0'} border-2 border-primary px-2 text-sm text-text font-medium bg-primary rounded-md transition-[padding] duration-100 ${className}`}>
                 {isOpen ? children : ''}
            </div>
        </div>
    );
};

interface ExtendableCardProps {
    className?: string;
    title: string;
    repository: string;
    deploy: string;
    image?: string;
    description?: string;
    isDefaultOpen?: boolean;
};

const ExtendableCard: React.FC<ExtendableCardProps> = ({
    className = '',
    title,
    repository,
    deploy,
    description = '',
    isDefaultOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen);

    const switchOpen = (): void => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Skeleton 
        title={title}
        repository={repository}
        deploy={deploy}
        isOpen={isOpen}
        switchOpen={switchOpen}
        className={className}
        >
            {description}
        </Skeleton>
    );
};

export default ExtendableCard;
