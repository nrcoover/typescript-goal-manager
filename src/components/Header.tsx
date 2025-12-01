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
	return (
		<header>
			<img {...image} />
			{children}
		</header>
	);
};

export default Header;
