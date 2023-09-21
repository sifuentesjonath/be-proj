import { useState, memo } from 'react'
import { useMediaQuery } from '@mui/material';
// Components
import { slide as SideBarBurgerMenu } from 'react-burger-menu';
import Link from '@/components/element/Link';
// Utils
import breakPoints from "@/styles/breakpoints";
import './burger.menu.css'
import { headerMenuItems } from '@utils/items/menuItems';

const SideBarMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const closeMenu = () => setIsOpen(false);
	const isMobile = useMediaQuery(`(max-width: ${breakPoints.tabletMax}px)`);

	return (
		<SideBarBurgerMenu
			id={'side-bar-burger-menu'}
			isOpen={isOpen}
			pageWrapId={'page-wrap'}
			right={true}
			onStateChange={(state) => setIsOpen(state.isOpen)}
		>
			<span>Menu</span>
			<>
				{headerMenuItems.map(({ id, url }) => (
					<Link onClick={closeMenu} key={id} href={url}>{id}</Link>
				))}
			</>
		</SideBarBurgerMenu>
	)
}

export default memo(SideBarMenu)