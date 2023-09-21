import mainTheme from '@/styles/theme';
import { FC } from 'react'
import styled from 'styled-components'

interface ICitationCardProps {
	text: string;
	author: string;
}
const CitationCard: FC<ICitationCardProps> = ({
	text,
	author
}) => {
	return (
		<CitationCardContainer>
			<p>{text}</p>
			<div className='citation-author-container'>
				<hr />
				<p>{author}</p>
			</div>
		</CitationCardContainer>
	)
}

const CitationCardContainer = styled.div`
padding: 24px 16px;
margin-top: 20px;

background-color: ${mainTheme.citeCardBackground};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 4px;

max-width: 408px;
color: ${mainTheme.textPrimary};

.citation-author-container {
	display: flex;
	gap: 8px;
	width: fit-content;
	margin-top: 14px;
}
.citation-author-container hr {
	border: 1px solid ${mainTheme.textPrimary};
	width: 24px;
}
`;

export default CitationCard