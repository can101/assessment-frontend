import {FC, FormEvent, ReactElement, ReactNode, useId} from "react";
import styles from "./input.module.scss";
import {IoIosAlert} from "react-icons/io";

type SizeType = "sm" | "md" | "lg" | "xl";
type WidthSize = "full" | "default";
type StatusType = "danger" | "success" | "default";

interface IInput {
	size?: SizeType;
	placeholder?: string;
	label?: string;
	disable?: boolean;
	value: string;
	handleChange: (e: string) => void;
	widthSize?: WidthSize;
	leftIcon?: ReactNode;
	status?: StatusType;
	hintText?: string;
}

/**
 * This component is the atomic element.
 * @param {("sm"|"md"|"lg"|"xl")} size [size=md]
 * @param {("full"|"default")} widthSize [widthSize=default]
 * @param {ReactNode} leftIcon - input left custom icon
 * @param {boolean} disable - [disable=false] - assigned disable state
 * @param {string} label - print info text
 * @param {string} placeholder - print empty input inf
 * @param {string} value - print input text
 * @param {string} hintText - alert message
 * @param {("danger"|"success"|"default")} status [status=default] - hint status
 * @param {function} handleChange - input assigned onchange function method
 * @returns input react component
 */

const Input: FC<IInput> = ({
	size = "md",
	disable = false,
	handleChange,
	label,
	leftIcon,
	placeholder,
	status = "default",
	value,
	widthSize = "default",
	hintText,
}): ReactElement => {
	// add custom id
	const Id = useId();
	// icon  show status
	const iconStatus = !!leftIcon;

	// onchange function
	function onHandleChange(e: FormEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value as string;
		handleChange(newValue);
	}

	return (
		<div
			className={`${styles.container} ${styles[`width__full__${widthSize}`]}`}
			data-diable={disable}
		>
			{label && (
				<label htmlFor={Id + "--input"} className={styles.label}>
					{label}
				</label>
			)}
			<div className={styles.input__box}>
				{iconStatus && (
					<span
						className={`${styles.input__left_icon} ${styles[`input__left_icon__size__${size}`]}`}
					>
						{leftIcon}
					</span>
				)}
				<input
					placeholder={placeholder}
					className={`${styles.input} ${styles[`input__size__${size}`]} ${
						styles[`input__size__${size}__pl`]
					}`}
					type="text"
					id={Id + "--input"}
					onChange={onHandleChange}
					value={value}
					disabled={disable}
				/>
			</div>
			{hintText && (
				<div className={`${styles.hint} ${styles[`hint__status__${status}`]}`}>
					<span className={styles.hint__icon}>
						<IoIosAlert size={"1.4rem"}/>
					</span>
					<span className={styles.hint__text}>{hintText}</span>
				</div>
			)}
		</div>
	);
};

export default Input;
