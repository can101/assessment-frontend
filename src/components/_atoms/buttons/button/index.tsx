import { FC, ReactElement, ReactNode } from "react";
import styles from "./button.module.scss";
import { IconContext } from "react-icons";

type VariantType = "primary" | "secondary" | "tertiary" | "quaternary";
type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

interface IButton {
	variant?: VariantType;
	size?: SizeType;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	title?: string;
	onClick: () => void;
	isDisable: boolean;
}

const IsindeWrapper: FC<{ children: ReactNode }> = (props): ReactElement => {
	return <div className={styles.container__button__wrapper}>{props.children}</div>;
};

/**
 * This component is the atomic element.
 * @param {(primary | secondary | tertiary | quaternary)} variant [variant=primary]
 * @param {(xs | sm | md | lg | xl)} size [size=md]
 * @param {function} onClick - assigned button click function
 * @param {ReactNode} iconLEft - array left icon
 * @param {ReactNode} iconRight - array right icon
 * @param {boolean} isDisable - [isDisable=false] - assigned button disable state
 * @param {string} title -print button inside text
 * @returns button react component
 */

const Button: FC<IButton> = ({
	iconLeft,
	iconRight,
	isDisable = false,
	onClick,
	title,
	size = "xs",
	variant = "primary",
}): ReactElement => {
	const sizeClass = styles[`container__button__${size}`];
	const variantClass = styles[`container__button__v_${variant}`];
	const iconSizeClass = styles[`container__button__${size}__icon`];
	return (
		<div className={styles.container}>
			<IconContext.Provider value={{ className: `${iconSizeClass}` }}>
				<button
					className={`${styles.container__button} ${sizeClass} ${variantClass}`}
					disabled={isDisable}
					onClick={onClick}
				>
					{iconLeft && <IsindeWrapper>{iconLeft}</IsindeWrapper>}
					{title && <IsindeWrapper>{title}</IsindeWrapper>}
					{iconRight && <IsindeWrapper>{iconRight}</IsindeWrapper>}
				</button>
			</IconContext.Provider>
		</div>
	);
};

export default Button;
