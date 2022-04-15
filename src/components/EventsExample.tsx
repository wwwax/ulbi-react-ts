import { FC, useState, ChangeEvent, MouseEvent, DragEvent, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: MouseEvent<HTMLButtonElement>) {
    console.log('inputRef.current :>> ', inputRef.current?.value);
  }

  function dragHandler(e: DragEvent<HTMLDivElement>) {
    console.log("drag");
  }

  function dropHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(false);
    console.log(e.dataTransfer);
  }

  function overHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(true)
  }

  function leaveHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDrag(false);
  }

  return (
    <div>
      <div className="font-bold uppercase text-center py-5 bg-gray-300 mb-5">Events Example</div>

      <div className="flex flex-col p-10">
        <input
          className="border-4 border-gray-500 mb-2 p-4"
          type="text"
          value={value}
          onChange={changeHandler}
          placeholder="controlled..."
        />

        <input
          className="border-4 border-gray-500 mb-2 p-4"
          type="text"
          placeholder="uncontrolled..."
          ref={inputRef}
        />

        <button
          className="bg-gray-300 px-5 py-2 border-4 border-gray-500"
          onClick={clickHandler}
        >
          click
        </button>
      </div>

      {/* drag n drop */}
      <div className="mx-auto w-3/4 border-4 border-green-500 relative">
        <div className="bg-red-300 w-20 h-20" draggable onDrag={dragHandler}></div>

        <div
          className="bg-red-300 w-20 h-20 mt-10 absolute bottom-0 right-0"
          onDrop={dropHandler}
          onDragLeave={leaveHandler}
          onDragOver={overHandler}
          style={{ background: isDrag ? "blue" : "red" }}
        ></div>
      </div>
    </div>
  );
}

export default EventsExample;
