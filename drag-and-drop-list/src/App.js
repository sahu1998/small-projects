import { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "./data.json";

function App() {
  const [allUsers, setAllUsers] = useState(data);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    console.log("result>>>>>>", result);
    const allUsersTemp = [...allUsers];
    const sourceIndex = result.source.index; // index of from which index user dragged
    const [reorderedItem] = allUsersTemp.splice(sourceIndex, 1);
    const destinationIndex = result.destination.index;  // index of where user dropped
    allUsersTemp.splice(destinationIndex, 0, reorderedItem);
    setAllUsers(allUsersTemp);
  };

  return (
    <div className="p-5">
      <div className="border">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="allUsers">
            {(provided, watchDropping) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="p-3"
                // style={watchDropping.isDraggingOver ? {
                //   background: "grey"
                // } : {
                //   background: "black"
                // }}
                style={{background: "black"}}
              >
                {console.log("watchDropping>>>>>> ", watchDropping)}
                {allUsers?.map((user, index) => (
                  <Draggable
                    key={user.id}
                    draggableId={user.id.toString()}
                    index={index}
                  >
                    {(provided, watchDragging) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="fs-1 m-3 text-white rounded"
                        style={watchDragging.isDragging ? {
                          background: "yellow", ...provided.draggableProps.style
                        } : {
                          background: "red", ...provided.draggableProps.style
                        }}
                      >
                        {/* {console.log("provided.draggableProps.style>>>>", provided.draggableProps.style)} */}
                        {/* {console.log("dragging watchDragging>>>>", watchDragging)} */}
                        <div>{user.name}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
