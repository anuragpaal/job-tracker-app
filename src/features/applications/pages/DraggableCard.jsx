import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableCard({ candidate }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: candidate.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: "transform 200ms ease",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 mb-3 shadow rounded cursor-grab"
    >
      {candidate.name}
    </div>
  );
}
