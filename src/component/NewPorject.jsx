import Input from "./Input";

export default function NewProject(){
    return <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-900">Cancle</button></li>
            <li><button className="px-4 py-2 rounded-md bg-stone-700 text-stone-100 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
           <Input label="Title"/>
           <Input label="Description" textarea/>
           <Input label="Due Date"/>
        </div>
    </div>
}