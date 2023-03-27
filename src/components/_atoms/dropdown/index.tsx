import {FC, ReactElement, ReactNode, useState} from "react";
import styles from "./dropdown.module.scss";
import {IoIosAlert} from "react-icons/io";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {IconContext} from "react-icons";

type SizeType = "sm" | "md" | "lg" | "xl";
type WidthSize = "full" | "default" | "small";
type StatusType = "danger" | "success" | "default";

interface IListItem {
	id: number;
	name: string;
}

interface IDropdown {
	size?: SizeType;
	label?: string;
	divider?: boolean;
	disable?: boolean;
	title?: boolean;
	widthSize?: WidthSize;
	leftIcon?: ReactNode;
	status?: StatusType;
	hintText?: string;
	chooseList: IListItem[];
}


/**
 * This component is the atomic element.
 * @param {("sm"|"md"|"lg"|"xl")} size [size=md]
 * @param {("full"|"small"|"default")} widthSize [widthSize=default]
 * @param {ReactNode} leftIcon - input left custom icon
 * @param {boolean} disable - [disable=false] - assigned disable state
 * @param {boolean} divider - [divider=false] - assigned divider state
 * @param {boolean} title - [title=false] - assigned title state
 * @param {boolean} label - [label=false] - assigned label state
 * @param {string} hintText - alert message
 * @param {("danger"|"success"|"default")} status [status=default] - hint status
 * @param {array} chooseList - assigned choose list
 * @return dropdown react component
 */

const Dropdown: FC<IDropdown> = ({
	size = "md",
	disable = false,
	divider = false,
	title = false,
	label,
	leftIcon,
	status = "default",
	widthSize = "default",
	hintText,
	chooseList
}): ReactElement => {
	const [state, setState] = useState<boolean>(false);
	const [currentItem, setCurrentItem] = useState<IListItem>();

	const toggleState = (currentStatus: boolean, currentSeconds?: number) => {
		if (!disable) {
			setTimeout(() => {
				setState(currentStatus);
			}, currentSeconds ?? 1);
		}
	};
	return (
		<div
			className={`${styles.container} ${styles[`width__${widthSize}`]}`}
			data-diable={disable}
		>
			{label && (
				<label className={styles.label}>
					{label}
				</label>
			)}
			<div
				onMouseOver={() => toggleState(true)}
				onClick={() => toggleState(true)}
				onTouchStart={() => toggleState(true)}
				onTouchEnd={() => toggleState(false)}
				onMouseEnter={() => toggleState(true)}
				onMouseLeave={() => toggleState(false, 100)}
				className={`${styles.dropdown} ${styles[`size__${size}`]} ${styles[`width__${widthSize}`]}`}
				data-diable={disable}>
				<IconContext.Provider value={{className: styles.container__icon, size: "1.3em"}}>
					{leftIcon && <div className={styles.left_icon}>
						{leftIcon}
					</div>}
					{divider && <div className={styles.divider_vertical}>
						<div></div>
					</div>}
					{title && <div
						className={styles.fill_area}>{currentItem != undefined ? currentItem.name : "Select Item"}</div>}
					<div className={styles.right_icon}>
						<MdOutlineKeyboardArrowDown/>
					</div>
				</IconContext.Provider>
				{state && <span className={`${styles.dropdown__menu}`}>
					<ul className={`${styles.dropdown__menu__list}`}>
						{chooseList.map((item, i) => (
							<li key={i}>
								<div onClick={() => {
									setCurrentItem(item);
								}}
									 className={`${styles[`size__${size}`]} ${styles.dropdown__menu__list__item} `}
									 data-active={currentItem?.id == item.id ? true : ""}>
									{item.name}
								</div>
							</li>
						))}
					</ul>
				</span>}
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

export default Dropdown;
