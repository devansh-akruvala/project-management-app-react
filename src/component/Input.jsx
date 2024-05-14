export default function Input({label,textarea,...props}){
const classes="w-full p-1 border-2 border-stone-500 bg-stone-200 rounded-md focus:outline-none focus:border-stone-800"
return  <p>
    <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
    {textarea?<textarea className={classes} {...props}/>:<input className={classes} {...props}/>}
</p>
}