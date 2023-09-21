import Link from 'next/link';
import styled, { css } from 'styled-components';
import mainTheme from '@/styles/theme';
import { objectKeys } from '@/types/typeHelper';

// Allows to have multiple styles by the 'type' prop

const anchorStyles = {
	normal: css`
		text-decoration: none;
		&:visited {
			color: inherit;
		}
	`,
	button: css`
		min-width: 110px;
		min-height: 28px;
		padding: 6px 12px;
		border-radius: 20px;
		font-size: 18px;

		display: flex;
		justify-content: center;
		align-items: center;

		text-decoration: none;

		background-color: ${mainTheme.buttonPrimary};
		color: ${mainTheme.textPrimary};
		&:hover {
			background-color: ${mainTheme.buttonPrimaryHover};
		}
	`,
}

// Using type helper to make a better type 

const anchorStylesKeys = objectKeys(anchorStyles);
type anchorStylesType = (typeof anchorStylesKeys)[number];
export type { anchorStylesType };

// Styled component

export const StyledAnchor = styled(Link)<{ type: anchorStylesType }>`
	${({type}) => 
		type 
			? anchorStyles[type]
			: anchorStyles['normal']
	}
`;