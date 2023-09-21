"use client";
// components
import BeAdLogo from "../../Logo"
import Button from "@components/element/buttons/Button";
// Styles
import { HeaderContainer } from "../style"
import { logOut } from "@auth/users";

const SetupHeader = () => {
	const handleLogout = async () => await logOut();
	return (
		<HeaderContainer as='header'>
			<div className="header-content">
				<div className="header-icon">
					<BeAdLogo width={90} height={60} />
				</div>
				<Button className="header-content-setup-button" onClick={handleLogout}>Log Out</Button>
			</div>
		</HeaderContainer>
	)
}

export default SetupHeader