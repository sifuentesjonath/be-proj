"use client";
// components
import BeAdLogo from "../Logo"
import Link from "@/components/element/Link";
// Utils
import paths from "@/utils/paths";
import breakPoints from "@/styles/breakpoints";
import { useMediaQuery } from '@mui/material';
// Styles
import { HeaderContainer } from "./style"
import SideBarBurgerMenu from "./Menu";
import { headerMenuItems } from "@utils/items/menuItems";

const Header = () => {
	const isMobile = useMediaQuery(`(max-width: ${breakPoints.tabletMax}px)`);

	return (
		<>
			<SideBarBurgerMenu />
			<HeaderContainer as='header'>
				<div className="header-content">
					<div className="header-icon">
						<BeAdLogo width={90} height={60} />
					</div>
					{!isMobile &&
						<div className="header-content-buttons">
							{headerMenuItems.map(({ id, url }) => (
								<Link type="button" key={id} href={url}>{id}</Link>
							))}
						</div>
					}
				</div>
			</HeaderContainer>
		</>
	)
}

export default Header