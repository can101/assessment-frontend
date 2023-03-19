import { FC, ReactElement } from "react";
import Avatar, { IAvatar, SizeType } from "../";
import styles from "./groups.module.scss";

interface IGroup {
	items: IAvatar[];
	size?: SizeType;
	round?: boolean;
	border?: boolean;
}

const AvatarGroup: FC<IGroup> = ({
	items,
	size = "md",
	border = false,
	round = false,
}): ReactElement => {
	const size_length = 5;
	return (
		<div className={styles.container}>
			{[...items].splice(0, size_length).map((item, index) => (
				<Avatar key={index} {...item} size={size} border={border} round={round} />
			))}
			{items.length > size_length && (
				<Avatar
					border={border}
					round={round}
					size={size}
					title={"+" + (items.length - size_length)}
				/>
			)}
		</div>
	);
};

export default AvatarGroup;
