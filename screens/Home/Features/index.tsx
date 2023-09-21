import TwoColorText from '@components/element/text/TwoColorText'
import FeatureCards from './FeatureCards'
import { FeaturesContainer } from './style'

const Features = () => {
	const texts = {
		first: 'Cras virra inter',
		second: 'commo vel tellus'
	}
	return (
		<FeaturesContainer>
			<div className='features-box'>
				<div className='features-title'>
					<TwoColorText wrapper='h2' text={texts} />
					<p>Donec vel justo at orci accumsan molestie quis in sapien. Vivamus suscipit vestibulum gravida.</p>
				</div>
				<div className='features-cards-container'>
					<FeatureCards />
				</div>
			</div>
		</FeaturesContainer>
	)
}

export default Features