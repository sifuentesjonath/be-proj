import styled from 'styled-components'
import mainTheme from '@/styles/theme';

export const StyledButton = styled.button`
	min-width: 120px;
	min-height: 44px;
	padding: 6px 12px;
	border-radius: 20px;
	font-size: 14px;

	background-color: ${mainTheme.buttonPrimary};
	color: ${mainTheme.textPrimary};
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border: 0;
	&:hover {
      background-color: ${mainTheme.buttonPrimaryHover};
   }
	&:disabled {
      background-color: ${mainTheme.buttonPrimaryDisabled};
		cursor: not-allowed;
		opacity: 0.5;
	}
`;