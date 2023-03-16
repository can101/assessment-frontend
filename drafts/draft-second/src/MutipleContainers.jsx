import React, {useState} from "react";
import styles from './assets/styles/multiple-containers.module.css';
import {DndContext, closestCenter} from '@dnd-kit/core'
import {
    arrayMove, SortableContext, useSortable, verticalListSortingStrategy
} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities';

function Item(item) {
    const {
        attributes, listeners, setNodeRef, transform, transition,
    } = useSortable({id: item.id});

    const style = {
        transform: CSS.Transform.toString(transform), transition,
    };
    return (<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {item.content}
    </div>)
}

export default function () {
    const [list, setList] = useState({
        a: [1, 2, 3, 4, 5, 6, 7, 8], b: [21, 22, 23, 24, 25], c: [31, 32], d: [10, 11, 12, 13],
    });
    const [keys] = useState([...Object.keys(list)]);
    const _handleDragEnd = (event) => {
        // const oldIndex = event.findIndex((item) => active.id == item.id);
        // const newIndex = event.findIndex((item) => over.id == item.id);
        console.log(event)
    }
    return (<div className={styles.container}>
        <DndContext collisionDetection={closestCenter} onDragEnd={_handleDragEnd}>
            {keys.map((e, i) => {
                return (<div key={i}>
                    {e}
                    <SortableContext items={list[e]} strategy={verticalListSortingStrategy}>
                        {list[e].map((it, i) => <Item key={i} content={it + " Item index " + i} id={it}/>)}
                    </SortableContext>
                </div>)
            })}
        </DndContext>
    </div>)
}