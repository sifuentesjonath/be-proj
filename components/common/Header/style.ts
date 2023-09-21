import mainTheme from '@/styles/theme';
import styled from 'styled-components';


export const HeaderContainer = styled.header`
background-color: ${mainTheme.primaryBackground};

// Header Styles and Positioning
.header-content,
.header-content-buttons {
	display: flex;
	align-items: center;
	gap: 16px;
}
.header-content {
	height: 60px;
	padding: 14px 16px;
	position: relative;
}
.header-content-buttons {
	margin-right: auto;
}
.header-content-setup-button {
	margin-left: auto;
}
.header-icon {
	position: absolute;
	right: 0;
	left: 0;
	width: fit-content;
	margin: 0 auto;
}
`;