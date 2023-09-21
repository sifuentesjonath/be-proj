import Image from 'next/image';
import { FC } from 'react';

import socialItems from './socialItems';

interface ISocialMediaIconsProps {
	height?: number;
	width?: number;
}
const SocialMediaIcons: FC<ISocialMediaIconsProps> = ({
	height = 25,
	width = 25,
}) => {
	return (
		<>
			{socialItems.map(({ image, alt, url }) => (
				<a key={alt} className='social-media-icon' href={url}>
					<Image alt={alt} src={image} height={height} width={width} />
				</a>
			))}
		</>
	);
};

export default SocialMediaIcons;
