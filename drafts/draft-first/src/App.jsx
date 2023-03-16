import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  DndContext,
  closestCenter,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


function SortableItem({ item }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='sortable-item'>
      {item.content}
    </div>
  )
}

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemList = [
      {
        id: 1,
        content: "First Item"
      }, {
        id: 2,
        content: "Second Item"
      }, {
        id: 3,
        content: "Third Item"
      },
    ];
    setItems(itemList);
  }, [])

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((list) => {
        const oldIndex = list.findIndex((item) => active.id == item.id);
        const newIndex = list.findIndex((item) => over.id == item.id);

        return arrayMove(list, oldIndex, newIndex);
      });
    }
  }
  return (
    <div className="App">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.length > 0 && items.map((item, index) => (<SortableItem key={index} item={item} />))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default App
