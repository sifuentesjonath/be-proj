"use client";
import Welcoming from "./Welcoming"
import SolvingProcess from "./SolvingProcess";
import Booking from "./Booking";
import Opinions from "./Opinions";
import Features from "./Features";
import ContactBox from "./ContactBox";
import JoinUs from "./JoinUs";
import Stepping from "./Stepping";

const HomeScreen = () => {
	return (
		<main>
			<Welcoming />
			<SolvingProcess />
			<Booking />
			<Opinions />
			<Features />
			<Stepping />
			<ContactBox />
			<JoinUs />
		</main>
	)
}

export default HomeScreen