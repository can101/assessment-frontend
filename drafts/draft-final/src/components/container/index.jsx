import React from "react";
import styles from "./container.module.css";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Item from "../item";
import { useDroppable } from "@dnd-kit/core";

const Container = (props) => {
	const { id, items } = props;
	const { setNodeRef } = useDroppable({
		id,
	});
	return (
		<div className={styles.container}>
			<div>{id}</div>
			<SortableContext items={items} id={id} strategy={verticalListSortingStrategy}>
				<div ref={setNodeRef} className={styles.sort_list}>
					{items.map((key) => (
						<Item key={key} id={key} />
					))}
				</div>
			</SortableContext>
		</div>
	);
};

export default Container;
