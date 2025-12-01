import { type ReactNode } from "react";

type Image = {
	src: string;
	alt: string;
};

interface HeaderProps {
	image: Image;
	children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
	const { src, alt } = image;

	return (
		<header>
			<img src={src} alt={alt} />
			{children}
		</header>
	);
};

export default Header;
