import { FC } from 'react'
import Image from 'next/image'
import Logo from '@public/png/logo.png'
import Link from 'next/link';
import paths from '@/utils/paths';

interface IBeAdLogoProps {
	width?: number;
	height?: number;
}
const BeAdLogo: FC<IBeAdLogoProps> = ({
	width = 90,
	height = 50
}) => {
	return (
		<Link href={paths.home}>
			<Image alt='Be Ad Logo' src={Logo} width={width} height={height} />
		</Link>
	)
}

export default BeAdLogo