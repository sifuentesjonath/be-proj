import TwoColorText from "@components/element/text/TwoColorText"
import SteppingCards from "./SteppingCards"
import { SteppingContainer } from "./style"

const Stepping = () => {
	const texts = {
		first: 'Sed volutpat dui',
		second: 'Vestibulum vel'
	}
	return (
		<SteppingContainer>
			<div className="stepping-box">
				<div className="stepping-title">
					<TwoColorText wrapper="h2" text={texts} />
				</div>
				<div className="stepping-bubble-cards">
					<SteppingCards />
				</div>
			</div>
		</SteppingContainer>
	)
}

export default Stepping