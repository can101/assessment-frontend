import React, {FC, ReactElement, useState} from "react";
import styles from "./toogle.module.scss";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
interface IToogle {
	shadow?: boolean;
	disable?: boolean;
	checked?: boolean;
	label?: string;
	size?: SizeType;
}

/**
 * This component is the atomic element.
 * @param {(xs | sm | md | lg | xl)} size [size=sm]
 * @param {boolean} checked - [checked=false] - assigned checked state
 * @param {boolean} shadow - [shadow=false] - assigned toogle shadow state
 * @param {boolean} disable - [disable=false] - assigned toogle disable state
 * @param {string} label -print toogle label inside text
 * @returns toogle react component
 */

const Toogle: FC<IToogle> = ({shadow = false, checked = false, disable = false, label, size = "sm"}): ReactElement => {
	const [state, setState] = useState<boolean>(false);
	const handleToogle = (): void => {
		if (!disable) {
			setState(prevState => !prevState);
		}
	};
	return (
		<div className={styles.container}>
			<div
				className={`${styles.toogle} ${shadow ? styles.toogle__shadow : ""} ${styles[`container__size__${size}`]} `}
				onClick={handleToogle}
				data-check={checked ? state : false} data-toogle={state} data-disable={disable}></div>
			{label && <span onClick={handleToogle} className={styles.label}>{label}</span>}
		</div>
	);
};

export default Toogle;