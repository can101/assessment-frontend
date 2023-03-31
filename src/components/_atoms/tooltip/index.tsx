import {FC, ReactElement, ReactNode, useState} from "react";
import Button from "../buttons/button";
import styles from "./tooltip.module.scss";

type  TooltipPos = "top_right" | "bottom_right" | "top_left" | "bottom_left" | "top_center" | "bottom_center" | "left_center" | "right_center";

interface ITooltip {
    title: string;
    children: ReactNode;
    position?: TooltipPos
}

/**
 * This component is the atomic element.
 * @param {TooltipPos} position [position="top_center"]
 * @param {ReactNode} children - it get all children, add tooltip component
 * @param {children} title - print tooltip text
 * @returns tooltip react component
 */

const Tooltip: FC<ITooltip> = ({title = "default", children, position = "top_center"}): ReactElement => {
    const [isShow, setIsShow] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <div className={styles.trigger} onMouseLeave={() => setIsShow(false)} onMouseEnter={() => setIsShow(true)}>
                {children}
            </div>
            {isShow && <div onMouseLeave={() => setIsShow(false)} onMouseEnter={() => setIsShow(true)} className={`${styles.tooltip} ${styles[`pos__${position}`]}`}>
                <div>
                    {title}
                    <Button isFull size={"sm"} title={"okay"} onClick={() => setIsShow(false)}/>
                </div>
            </div>}
        </div>
    );
};

export default Tooltip;
