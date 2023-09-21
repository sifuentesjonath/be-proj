import { LinkProps } from 'next/link'
import { forwardRef } from 'react'
import { anchorStylesType, StyledAnchor } from './style'

interface ILinkProps extends LinkProps {
	children: React.ReactNode
	type?: anchorStylesType
}
const Link = forwardRef(
	({ children, type = 'normal', ...props }: ILinkProps, ref: any) => {
		return (
			<StyledAnchor type={type} {...props} ref={ref}>
				{children}
			</StyledAnchor>
		)
	}
)

export default Link