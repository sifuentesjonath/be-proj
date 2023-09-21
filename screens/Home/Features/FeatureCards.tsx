import featureIcon_1 from '@/public/png/home_feature_card_icon_01.png'
import featureIcon_2 from '@/public/png/home_feature_card_icon_02.png'
import featureIcon_3 from '@/public/png/home_feature_card_icon_03.png'
import FeatureCard from '@components/block/cards/Feature'

const cards = [
	{
		image: {
			alt: 'Solicitud',
			src: featureIcon_1
		},
		title: 'Vestibulum vel venenantis magna',
		description: 'Sed non enim leo. Nullam urna felis, rhoncus cursus eros.',
		key: 'request-card'
	},
	{

		image: {
			alt: 'Sending',
			src: featureIcon_2
		},
		title: 'Vestibulum vel venenantis magna',
		description: 'Sed non enim leo. Nullam urna felis, rhoncus cursus eros.',
		key: 'sending-card'
	},
	{
		image: {
			alt: 'Results',
			src: featureIcon_3
		},
		title: 'Vestibulum vel venenantis magna',
		description: 'Sed non enim leo. Nullam urna felis, rhoncus cursus eros.',
		key: 'result-card'
	}
]

const FeatureCards = () => {
	return (
		<>
			{cards.map(({ title, description, key, image }) => (
				<FeatureCard
					key={key}
					title={title}
					description={description}
					image={image}
				/>
			))}
		</>
	)
}

export default FeatureCards