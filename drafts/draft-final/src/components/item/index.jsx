import React from 'react';
import styles from './item.module.css';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const Item = (props) => {
    const {attributes, listeners, transform, transition, setNodeRef} = useSortable({id: props.id})
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };
    return (
        <div style={style} ref={setNodeRef} {...listeners} {...attributes} className={styles.container}>
            <h1>{props.id}</h1>
        </div>
    )
}

export default Item;