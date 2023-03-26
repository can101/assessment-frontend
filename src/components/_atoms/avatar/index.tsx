import {FC, ReactElement, ReactNode} from "react";
import {IconContext} from "react-icons";
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

/**
 * This component is the atomic element.
 * @param {("xs"|"sm"|"md"|"lg"|"xl")} size [size=md]
 * @param {ReactNode} badgeIcon - badge custom icon
 * @param {string} src - image source link
 * @param {string} alt - image alt attribute text
 * @param {boolean} active - [active=false] - assigned avatar badge active state
 * @param {boolean} round - [round=false] - assigned avatar badge round state
 * @param {boolean} border - [border=false] - assigned avatar badge border state
 * @param {string} title -print first characters of the text
 * @returns avatar react component
 */

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
	const badgeSizeClass = styles[`container__size__${size}__badge`];
	return (
		<article
			className={`${styles.container} ${sizeClass} ${
				round ? styles.container__variant__round : ""
			} ${border ? styles.container__shadow : ""}`}
		>
			{src && <img src={src} alt={alt}/>}
			{title && <span>{title}</span>}
			{active &&
				(!badgeIcon ? (
					<span className={`${styles.container__badge} ${badgeSizeClass}`}></span>
				) : (
					<IconContext.Provider
						value={{
							className: `${styles.container__badge} ${badgeSizeClass} ${styles.container__badge__icon}`,
						}}
					>
						{badgeIcon}
					</IconContext.Provider>
				))}
		</article>
	);
};

export default Avatar;
