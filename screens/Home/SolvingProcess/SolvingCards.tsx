import SolvingCard from '@/components/block/cards/SolvingCard'
// icons
import calendarIcon from '@/public/png/icon_calendar.png'
import decreasingIcon from '@/public/png/icon_chart_decreasing.png'
import dollarSignInFrameIcon from '@/public/png/icon_dollar_sign_in_frame.png'
import toDoListIcon from '@/public/png/icon_to_do_list.png'

const cards = [
	{
		title: 'Real-Time Monitoring',
		key: 'real-time-monitoring',
		image: {
			src: calendarIcon,
			alt: 'Calendar icon',
		}
	},
	{
		title: 'Reduced Operational Cost',
		key: 'reduced-op-cost',
		image: {
			src: decreasingIcon,
			alt: 'Chart icon',
		}
	},
	{
		title: 'Financial Control',
		key: 'financial-ctrl',
		image: {
			src: dollarSignInFrameIcon,
			alt: 'Dollar sign icon',
		}
	},
	{
		title: 'Activities Tracking',
		key: 'act-tracking',
		image: {
			src: toDoListIcon,
			alt: 'To do list icon',
		}
	}
]

const SolvingCards = () => {
	return (
		<>
			{cards.map(({ key, image, title }) => (
				<SolvingCard key={key} image={image} title={title} />
			))}
		</>
	);
}

export default SolvingCards