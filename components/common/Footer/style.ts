import mainTheme from '@/styles/theme';
import breakPoints from '@styles/breakpoints';
import styled from 'styled-components';

export const FooterContainer = styled.footer`

/* TODO:  */
/* clip-path: polygon(0 0,100% 0,100% 85%,50% 100%,0 85%); */
background-color: ${mainTheme.primaryBackground};
padding: 24px 16px;
min-height: 380px;

.footer-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 34px;
}

.logo-container {
	display: flex;
	justify-content: center;
}

.features-container {
	display: grid;
	/* This rules makes responsive in a single line! */
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 24px;
}

.footer-feature-item {
	display: flex;
	flex-direction: column;
	gap: 30px;
	color: ${mainTheme.textPrimary};
}
.spanned {
	grid-column: span 1.5;
}

/* Social Media icons */
.footer-social-media-icons {
	display: flex;
	gap: 12px;
	padding-left: 14px;
}
/* Links */
.footer-links {
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}
}

/* TODO: change icon colors */
.social-media-icon { }

.footer-feature-item .feature-description {
	color: ${mainTheme.textSecondary};
}

.footer-bottom-divider {
	border: 1px solid ${mainTheme.textPrimary};
	width: 100%;
}

.footer-bottom {
	color: ${mainTheme.textPrimary};
	p {
		text-align: center;
	}
}

@media screen and (min-width: ${breakPoints.tabletMax}px){
	.features-container {
		padding: 0 60px;
	}
}
`;