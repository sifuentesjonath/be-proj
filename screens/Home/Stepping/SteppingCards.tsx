import BubbleCard from "@components/block/cards/Bubble"
import cards from "./cards"

const SteppingCards = () => {
	return (
		<>
			{cards.map(({ title, description, image, key }) => (
				<BubbleCard
					key={key}
					title={title}
					description={description}
					image={image}
				/>
			))}
		</>
	)
}

export default SteppingCards