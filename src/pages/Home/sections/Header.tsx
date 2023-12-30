import { useUIUX } from "../../../providers/UIUX";
import SwitchButton from "../../../components/SwitchButton";

const Header: React.FC = () => {
	const [value, action] = useUIUX();

	return (
		<div className='w-full flex flex-col items-center justify-center text-sm py-2'>
			<div className='flex flex-row gap-1 items-center md:ml-auto'>
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
	);
};

export default Header;
