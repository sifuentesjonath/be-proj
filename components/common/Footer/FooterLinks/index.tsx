import Link from "@components/element/Link"
import paths from "@/utils/paths"
const FooterLinks = () => {
	return (
		<ul>
			<li>
				<Link href={paths.home}>Blog</Link>
			</li>
			<li>
				<Link href={paths.home}>Resources</Link>
			</li>
			<li>
				<Link href={paths.home}>Services</Link>
			</li>
		</ul>
	)
}

export default FooterLinks