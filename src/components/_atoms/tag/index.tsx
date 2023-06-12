import React, {FC, ReactElement, ReactNode} from "react";
import styles from "./tag.module.scss";
import {FaTimes} from "react-icons/fa";

type VariantType = "primary" | "secondary" | "tertiary" | "quaternary";

interface ITag {
	deleteClick?: () => void;
	icon?: ReactNode;
	title: string;
	variant?: VariantType;
	disable?: boolean;
}

/**
 * This component is the atomic element.
 * @param {function} deleteClick - delete tag assigned click function
 * @param {ReactNode} icon - tag custom icon
 * @param {string} title - print text
 * @param {("primary"|"secondary"|"tertiary"|"quaternary")} variant [variant=primary]
 * @param {boolean} disable - [disable=false] - assigned disable state
 * @returns tag react component
 */

const Tag: FC<ITag> = ({
	deleteClick,
	icon,
	title,
	variant = "primary",
	disable = false,
}): ReactElement => {
	return (
		<div
			className={`${styles.container} ${styles[`variant__${variant}`]} ${
				disable ? styles.disable : ""
			}`}
		>
			{icon && icon}
			{title}
			{deleteClick &&
				<span
					className={styles.close_button}
					onClick={() => {
						if (!disable) deleteClick();
					}
					}
					data-disable={disable}
				>
					<FaTimes size={".96em"}/>
				</span>
			}
		</div>
	);
};

export default Tag;
