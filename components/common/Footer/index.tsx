// Components
import BeAdLogo from "../Logo"
import SocialMediaIcons from "./SocialMediaIcons"
import FooterLinks from "./FooterLinks"
import ColoredLeftBorderText from "@components/element/text/LeftBorderText"
// Style
import { FooterContainer } from "./style"
import mainTheme from "@styles/theme"

const Footer = () => {
	const text = [
		'Volutpat ridiculus arcu, ac suspendisse adipiscing elit.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	]
	const buttonText = 'Learn More'
	const currentYear = new Date().getFullYear()
	const copyRight = `COPYRIGHT © ${currentYear} Be-Ad S.A De C.V`
	const borderColor = mainTheme.textBorderPrimary;
	return (
		<FooterContainer>
			<div className="footer-content">
				<div className="logo-container">
					<BeAdLogo width={130} height={90} />
				</div>
				<div className="features-container">
					<div className="footer-feature-item spanned">
						<ColoredLeftBorderText borderColor={borderColor} text="Company" />
						<p className="feature-description">
							Interdum Et Malesuada Fames Ac Ante Ipsum Primis In Faucibus.
							Phasellus Vestibulum Ac Eros Non Feugiat. Etiam Ut Est Malesuada,
							'Consectetur Ante Nec, Blandit Enim. Aliquam ultricies Purus Justo,
							Non Bibendum Nisl
						</p>
					</div>
					<div className="footer-feature-item">
						<ColoredLeftBorderText borderColor={borderColor} text="Follow Us" />
						<div className="footer-social-media-icons">
							<SocialMediaIcons />
						</div>
					</div>
					<div className="footer-feature-item">
						<ColoredLeftBorderText borderColor={borderColor} text="Links" />
						<div className="footer-links">
							<FooterLinks />
						</div>
					</div>
				</div>
				<hr className="footer-bottom-divider" />
				<div className="footer-bottom">
					<p>{copyRight}</p>
				</div>
			</div>
		</FooterContainer>
	)
}

export default Footer