import React, { useState } from "react";
import Item from "./components/item";
import Container from "./components/container";
// lib imports
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	closestCorners,
	DragOverlay,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function App() {
	const [items, setItems] = useState({
		A: [1, 2, 3, 4, 5],
		B: [6, 7, 8],
		C: [9, 10],
		D: [11, 12, 13, 14, 15, 16, 17],
	});
	const [active, setActive] = useState(null);
	const [keys] = useState([...Object.keys(items)]);
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);
	function findContainer(id) {
		const containerKeys = Object.keys(items);
		const idFoundContainerKey = containerKeys.find((key) => items[key].includes(id));
		return idFoundContainerKey || id;
	}
	const handleDragStart = (event) => {
		console.log("start worked");
		const { active } = event;
		setActive(active.id);
	};
	const handleDragOver = (event) => {
		console.log("over worked");
		// console.log("Over", event);
		const { active, over, draggingRect } = event;
		const { id } = active;
		const { id: overId } = over;

		// Find the containers
		const activeContainer = findContainer(id);
		const overContainer = findContainer(overId);

		if (!activeContainer || !overContainer || activeContainer === overContainer) {
			return;
		}

		setItems((prev) => {
			const activeItems = prev[activeContainer];
			const overItems = prev[overContainer];

			// Find the indexes for the items
			const activeIndex = activeItems.indexOf(id);
			const overIndex = overItems.indexOf(overId);

			let newIndex;
			if (overId in prev) {
				// We're at the root droppable of a container
				newIndex = overItems.length + 1;
			} else {
				console.log(
					over,
					overIndex,
					overItems.length - 1,
					draggingRect?.offsetTop,
					over.rect?.offsetTop,
					over.rect.height,
				);
				const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect?.offsetTop > over.rect?.offsetTop + over.rect.height;
				console.log(isBelowLastItem);
				const modifier = isBelowLastItem ? 1 : 0;

				newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
			}

			return {
				...prev,
				[activeContainer]: [...prev[activeContainer].filter((item) => item !== active.id)],
				[overContainer]: [
					...prev[overContainer].slice(0, newIndex),
					items[activeContainer][activeIndex],
					...prev[overContainer].slice(newIndex, prev[overContainer].length),
				],
			};
		});
	};
	const handleDragEnd = (event) => {
		console.log("end worked");
		const { active, over } = event;
		const { id } = active;
		const { id: overId } = over;
		console.log(id, overId);

		const activeContainer = findContainer(id);
		const overContainer = findContainer(overId);

		if (!activeContainer || !overContainer || activeContainer !== overContainer) {
			return;
		}

		const activeIndex = items[activeContainer].indexOf(active.id);
		const overIndex = items[overContainer].indexOf(overId);

		if (activeIndex !== overIndex) {
			setItems((items) => ({
				...items,
				[overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
			}));
		}

		setActive(null);
	};

	return (
		<div className='App'>
			<div className={"box"}>
				<DndContext
					sensors={sensors}
					collisionDetection={closestCorners}
					onDragEnd={handleDragEnd}
					onDragOver={handleDragOver}
					onDragStart={handleDragStart}
				>
					{keys?.map((e, i) => {
						console.log();
						return <Container key={i} id={e} items={items[e]} />;
					})}
					<DragOverlay>{active ? <Item id={active} /> : null}</DragOverlay>
				</DndContext>
			</div>
		</div>
	);
}

export default App;
