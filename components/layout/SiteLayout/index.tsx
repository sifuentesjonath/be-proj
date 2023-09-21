'use client';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

const SiteLayout = (props) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default SiteLayout;
