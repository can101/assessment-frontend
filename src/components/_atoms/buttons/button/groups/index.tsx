import {FC, ReactNode} from "react";
import styles from "./group.module.scss";

/**
 * This component is the molecule element.
 * @returns button group component
 */

const ButtonGroup: FC<{ children: ReactNode }> = ({children}) => {
	return <div className={styles.container}>{children}</div>;
};

export default ButtonGroup;
