import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave,onCancle }) {
  const modalRef = useRef();    

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
        modalRef.current.open()
        return;
    }

    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onSave(projectData);
  }



  return (
    <>
      <Modal ref={modalRef} buttontext="Ok">
        <h2 className="text-cl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone- 400 mb-4">Please enter valid value for every input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-900" onClick={onCancle}>
              Cancle
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded-md bg-stone-700 text-stone-100 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
