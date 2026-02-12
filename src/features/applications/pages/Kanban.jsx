import { useSelector, useDispatch } from "react-redux";
import { DndContext, closestCorners } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";
import { useDroppable } from "@dnd-kit/core";

import { DragOverlay } from "@dnd-kit/core";
import { useState } from "react";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { moveCandidate } from "../applicationsSlice";

export default function Kanban() {
  const dispatch = useDispatch();

  const columns = useSelector((s) => s.applications.columns);
  const [activeCandidate, setActiveCandidate] = useState(null);

  const statuses = ["applied", "screening", "interview", "hired"];
  function DroppableColumn({ id, children }) {
    const { setNodeRef } = useDroppable({ id });

    return (
      <div ref={setNodeRef} className="bg-gray-100 p-4 rounded min-h-[400px]">
        {children}
      </div>
    );
  }

  function findColumn(id) {
    return statuses.find((status) => columns[status].some((c) => c.id === id));
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const from = findColumn(active.id);

    // ALWAYS detect column
    let to = statuses.find((status) => {
      if (over.id === status) return true;

      return columns[status].some((c) => c.id === over.id);
    });

    if (!from || !to) return;

    if (from !== to) {
      const candidate = columns[from].find((c) => c.id === active.id);

      dispatch(
        moveCandidate({
          from,
          to,
          candidate,
        }),
      );
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Hiring Pipeline</h2>

      <DndContext
        collisionDetection={closestCorners}
        onDragStart={(event) => {
          const id = event.active.id;

          const col = findColumn(id);

          const candidate = columns[col].find((c) => c.id === id);

          setActiveCandidate(candidate);
        }}
        onDragEnd={(event) => {
          handleDragEnd(event);
          setActiveCandidate(null);
        }}
      >
        <div className="grid grid-cols-4 gap-6">
          {statuses.map((status) => (
            <DroppableColumn key={status} id={status}>
              <h3 className="font-bold mb-4 capitalize">{status}</h3>

              <SortableContext
                items={columns[status]}
                strategy={verticalListSortingStrategy}
              >
                {columns[status].map((c) => (
                  <DraggableCard key={c.id} candidate={c} />
                ))}
              </SortableContext>
            </DroppableColumn>
          ))}
        </div>

        <DragOverlay>
          {activeCandidate ? (
            <div
              className="
      bg-white
      p-4
      shadow-xl
      rounded
      rotate-3
    "
            >
              {activeCandidate.name}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
