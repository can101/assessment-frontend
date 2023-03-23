import React, {FC, ReactElement, ReactNode} from "react";
import styles from "./chip.module.scss";
import {IconContext} from "react-icons";
import {IoClose} from "react-icons/io5";

type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

interface IChip {
	icon?: ReactNode;
	title?: string;
	deleteClick?: () => void;
	border?: boolean;
	disable?: boolean;
	size?: SizeType;
}

/**
 * This component is the atomic element.
 * @param {(xs | sm | md | lg | xl)} size [size=md]
 * @param {ReactNode} icon - chip custom icon
 * @param {boolean} border - [border=false] - assigned chip border state
 * @param {boolean} disable - [disable=false] - assigned disable state
 * @param {string} title - print first characters of the text
 * @param {function} deleteClick - delete chip assigned click function
 * @returns chip react component
 */

const Chip: FC<IChip> = ({
	title,
	deleteClick,
	icon,
	border = false,
	disable = false,
	size = "md"
}): ReactElement => {
	const handleClick = () => {
		if (!disable) {
			if (deleteClick) {
				deleteClick();
			}
		}
	};
	const sizeClass = styles[`container__size__${size}`];
	return (
		<div
			className={`${styles.container} ${border ? styles.container__border : ""} ${disable ? styles.container__disable : ""} ${sizeClass}`}>
			<IconContext.Provider value={{className: styles.container__icon, size: "inherit"}}>
				{icon && <span>{icon}</span>}
				{title && <span>{title}</span>}
				{deleteClick && <span onClick={handleClick}><IoClose/></span>}
			</IconContext.Provider>
		</div>
	);
};

export default Chip;