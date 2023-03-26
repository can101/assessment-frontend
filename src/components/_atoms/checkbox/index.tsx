import React, {FC, ReactElement, ReactNode, useRef, useState} from "react";
import styles from "./checkbox.module.scss";
import {TiTick} from "react-icons/all";

type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
type VariantType = "square" | "round";

interface ICheckbox {
	label?: string;
	size?: SizeType;
	disable?: boolean;
	variant?: VariantType;
	icon?: ReactNode;
}

/**
 * This component is the atomic element.
 * @param {("xs"|"sm"|"md"|"lg"|"xl")} size [size=md]
 * @param {("round"|"square")} variant [variant=square]
 * @param {ReactNode} icon - checkbox custom icon
 * @param {string} label -print checkbox label inside text
 * @param {boolean} disable - [disable=false] - assigned checkbox disable state
 * @returns checkbox react component
 */

const Checkbox: FC<ICheckbox> = ({label, variant = "square", size = "md", disable = false, icon}): ReactElement => {
	const [state, setState] = useState<boolean>(false);
	const [animState, setAnimState] = useState<boolean>(false);
	const checkboxRef = useRef<HTMLDivElement>(null);

	function handleToggle(): void {
		if (!disable) {
			setAnimState(true);
			setTimeout(() => {
				setAnimState(false);
			}, 1000);
			setState(prevState => !prevState);
		}
	};
	const variantClass = styles[`checkbox__variant__${variant}`];
	const sizeClass = styles[`checkbox__size__${size}`];
	return (
		<>
			<div className={`${styles.container} ${disable ? styles.container__disable : ""}`}>
				<div ref={checkboxRef}
					 className={`${styles.checkbox} ${variantClass} ${animState ? styles.checkbox__anim : ""} ${sizeClass}`}
					 onClick={handleToggle}
					 data-checked={state}
				>
					{state && (
						!icon ? (<TiTick className={styles.checkbox__icon}/>) : icon
					)}
				</div>
				{label && <span onClick={() => {
					if (checkboxRef.current) {
						checkboxRef.current.click();
					}
				}}>{label}</span>}
			</div>
		</>
	);
};

export default Checkbox;