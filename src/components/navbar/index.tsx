import { FC, ReactElement } from "react";
import Logo from "../_atoms/logo";
import Dropdown from "../_atoms/dropdown";
import styles from "./navbar.module.scss";
import { IoMdColorFill } from "react-icons/io";
import { useChangeTeheme } from "../../hooks/useChangeTheme";

const ColorList = "default,warning,danger,secondary,info,success"
	.split(",")
	.map((name, i) => ({ id: i, name }));

const Navbar: FC = (): ReactElement => {
	const [setTeheme] = useChangeTeheme();
	return (
		<nav className={styles.navbar}>
			<div></div>
			<Logo />
			<Dropdown
				defaultItem={ColorList[3]}
				chooseList={ColorList}
				size='md'
				leftIcon={<IoMdColorFill />}
				onClick={(e) => setTeheme(e)}
			/>
		</nav>
	);
};

export default Navbar;
