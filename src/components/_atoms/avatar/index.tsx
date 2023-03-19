import { FC, ReactElement, ReactNode } from "react";
import { IconContext } from "react-icons";
import styles from "./avatar.module.scss";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export interface IAvatar {
	src?: string;
	alt?: string;
	size?: SizeType;
	title?: string;
	border?: boolean;
	badgeIcon?: ReactNode;
	round?: boolean;
	active?: boolean;
}

const Avatar: FC<IAvatar> = ({
	src,
	alt,
	title,
	size = "md",
	badgeIcon,
	border = false,
	round = false,
	active = false,
}): ReactElement => {
	const sizeClass = styles[`container__size__${size}`];
	const basgeSizeClass = styles[`container__size__${size}__badge`];
	return (
		<article
			className={`${styles.container} ${sizeClass} ${
				round ? styles.container__variant__round : ""
			} ${border ? styles.container__shadow : ""}`}
		>
			{src && <img src={src} alt={alt} />}
			{title && <span>{title}</span>}
			{active &&
				(!badgeIcon ? (
					<span className={`${styles.container__badge} ${basgeSizeClass}`}></span>
				) : (
					<IconContext.Provider
						value={{
							className: `${styles.container__badge} ${basgeSizeClass} ${styles.container__badge__icon}`,
						}}
					>
						{badgeIcon}
					</IconContext.Provider>
				))}
		</article>
	);
};

export default Avatar;
