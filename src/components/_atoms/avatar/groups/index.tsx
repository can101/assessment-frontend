import { FC, ReactElement } from "react";
import Avatar, { IAvatar, SizeType } from "../";
import styles from "./groups.module.scss";

interface IGroup {
	items: IAvatar[];
	size?: SizeType;
	round?: boolean;
	border?: boolean;
}

/**
 * This component is the molecul element.
 * @param {IAvatar} items - passed items for loop
 * @param {boolean} round - [round=false] - assigned avatar round state
 * @param {boolean} border - [border=false] - assigned avatar border state
 * @param {(xs | sm | md | lg | xl)} size [size=md]
 * @returns avatar group react component
 */

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
