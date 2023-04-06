import {FC, ReactElement} from "react";
import styles from "./link.module.scss";
import {IoIosInformationCircle} from "react-icons/io";
import {MdOutlineArrowOutward} from "react-icons/md";
import {IconContext} from "react-icons";

type SizeType = "sm" | "md" | "lg" | "xl";

interface ILink {
    handleClick: () => void;
    title: string;
    disable?: boolean;
    iconState?: boolean;
    size?: SizeType;
}

/**
 * This component is the atomic element.
 * @param {("sm"|"md"|"lg"|"xl")} size [size=md]
 * @param {boolean} disable - [disable=false] - assigned disable state
 * @param {boolean} iconState - [iconState=true] - assigned iconState state
 * @param {string} title - print text
 * @param {function} handleClick - link assigned onclick method
 * @returns link react component
 */

const Link: FC<ILink> = ({handleClick, title, disable = false, iconState = true, size = "md"}): ReactElement => {
    return (
        <div
            onClick={() => {
                if (!disable) handleClick();
            }}
            className={`${styles.container} ${styles[`size__${size}`]}`}
            data-disable={disable}
        >
            <IconContext.Provider value={{className: styles.container__icon, size: "1.5em"}}>
                {iconState && <span>
					<IoIosInformationCircle/>
				</span>}
                <span>{title}</span>
                <span>
					<MdOutlineArrowOutward/>
				</span>
            </IconContext.Provider>
        </div>
    );
};

export default Link;
