import React, {FC, ReactElement, useState} from "react";
import styles from "./toogle.module.scss";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
interface IToggle {
	shadow?: boolean;
	disable?: boolean;
	checked?: boolean;
	label?: string;
	size?: SizeType;
}

/**
 * This component is the atomic element.
 * @param {("xs"|"sm"|"md"|"lg"|"xl")} size [size=sm]
 * @param {boolean} checked - [checked=false] - assigned checked state
 * @param {boolean} shadow - [shadow=false] - assigned toggle shadow state
 * @param {boolean} disable - [disable=false] - assigned toggle disable state
 * @param {string} label -print toggle label inside text
 * @returns toggle react component
 */

const Toggle: FC<IToggle> = ({shadow = false, checked = false, disable = false, label, size = "sm"}): ReactElement => {
	const [state, setState] = useState<boolean>(false);
	const handleToggle = (): void => {
		if (!disable) {
			setState(prevState => !prevState);
		}
	};
	return (
		<div className={styles.container}>
			<div
				className={`${styles.toggle} ${shadow ? styles.toggle__shadow : ""} ${styles[`container__size__${size}`]} `}
				onClick={handleToggle}
				data-check={checked ? state : false} data-toogle={state} data-disable={disable}></div>
			{label && <span onClick={handleToggle} className={styles.label}>{label}</span>}
		</div>
	);
};

export default Toggle;