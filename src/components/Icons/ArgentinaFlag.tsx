// From https://www.svgrepo.com/svg/405411/flag-for-flag-argentina

import type { SVGIconComponent } from './types';

const ArgentinaFlag: React.FC<SVGIconComponent> = ({ className = '' }) => {
	return (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 36 36"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={`iconify iconify--twemoji ${className}`}
			preserveAspectRatio="xMidYMid meet"
		>
			<path
				fill="#75AADB"
				d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
			></path>
			<path fill="#EEE" d="M0 13h36v10H0z"></path>
			<path
				fill="#FCBF49"
				d="M18 13l.488 2.548l1.426-2.167l-.525 2.54l2.146-1.457l-1.457 2.147l2.541-.524l-2.167 1.425L23 18l-2.548.488l2.167 1.426l-2.541-.525l1.457 2.146l-2.146-1.457l.525 2.541l-1.426-2.167L18 23l-.488-2.548l-1.425 2.167l.524-2.541l-2.147 1.457l1.457-2.146l-2.54.525l2.167-1.426L13 18l2.548-.488l-2.167-1.425l2.54.524l-1.457-2.147l2.147 1.457l-.524-2.54l1.425 2.167z"
			></path>
			<path
				fill="#843511"
				d="M18 14.33l.242 1.265l.116.605l.339-.514l.708-1.076l-.261 1.261l-.125.604l.51-.346l1.066-.723l-.723 1.066l-.346.51l.603-.125l1.262-.26l-1.076.708l-.515.337l.605.116L21.67 18l-1.265.242l-.605.116l.514.339l1.076.708l-1.262-.261l-.604-.125l.346.51l.723 1.065l-1.065-.723l-.51-.346l.125.604l.261 1.262l-.708-1.076l-.338-.515l-.116.605L18 21.67l-.242-1.265l-.116-.605l-.339.515l-.708 1.076l.26-1.262l.125-.603l-.51.346l-1.066.723l.723-1.066l.346-.51l-.604.125l-1.261.261l1.076-.708l.514-.339l-.605-.116L14.33 18l1.265-.242l.605-.116l-.515-.339l-1.076-.708l1.261.26l.603.125l-.346-.51l-.724-1.066l1.066.724l.51.346l-.125-.603l-.26-1.261l.708 1.076l.339.515l.116-.605L18 14.33M18 13l-.488 2.548l-1.425-2.167l.524 2.541l-2.147-1.457l1.457 2.147l-2.54-.524l2.167 1.425L13 18l2.548.488l-2.167 1.426l2.54-.525l-1.457 2.146l2.147-1.457l-.524 2.541l1.425-2.167L18 23l.488-2.548l1.426 2.167l-.525-2.541l2.146 1.457l-1.457-2.146l2.541.525l-2.167-1.426L23 18l-2.548-.488l2.167-1.425l-2.541.524l1.457-2.147l-2.146 1.457l.525-2.541l-1.426 2.167L18 13zm1.914.381h.005h-.005zm1.621 1.083h.005h-.005zm1.084 1.623h.005h-.005z"
			></path>
			<circle fill="#FCBF49" cx="18" cy="18" r="2"></circle>
			<path
				fill="#843511"
				d="M18 20.125c-1.172 0-2.125-.953-2.125-2.125s.953-2.125 2.125-2.125s2.125.953 2.125 2.125s-.953 2.125-2.125 2.125zm0-4c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875s1.875-.841 1.875-1.875s-.841-1.875-1.875-1.875z"
			></path>
			<path
				fill="#C16540"
				d="M17.801 17.774c0 .155-.261.28-.583.28c-.323 0-.584-.125-.584-.28c0-.155.261-.28.584-.28c.322 0 .583.125.583.28zm1.553-.024c0-.161-.266-.292-.594-.292c-.328 0-.594.13-.594.292s.266.292.594.292c.329 0 .594-.131.594-.292z"
			></path>
			<path
				fill="#ED8662"
				d="M17.463 18.874c0-.126.246-.229.548-.229c.303 0 .548.102.548.229c0 .126-.246.229-.548.229c-.303 0-.548-.103-.548-.229z"
			></path>
		</svg>
	);
};

export default ArgentinaFlag;
