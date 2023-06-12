/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";

const ReplaceableList = ({ children, title, name }) => {
    const [droppedChild, setDroppedChild] = useState({});

    const handleDrop = (child) => {
        setDroppedChild(child);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-2 mx-5">{title}</h2>
            <div className="">
                <Droppable droppableId={name}>
                    {(provided) => (
                        <div ref={provided.innerRef} className="h-screen">
                            <div className="p-5 rounded-md min-h-max bg-yellow-50 mx-2 gap-y-3 flex flex-col h-screen">
                                {droppedChild ? (
                                    <div>{droppedChild}</div>
                                ) : (
                                    <div className="placeholder">
                                        Drag component here
                                    </div>
                                )}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>
            </div>
            <div>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        onDrop: () => handleDrop(child),
                    })
                )}
            </div>
        </div>
    );
};

export default ReplaceableList;
