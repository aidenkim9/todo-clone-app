import classes from "./TodoFormInput.module.css"

export default function TodoFormInput({label, title, type}){
    return <p className={classes.container}>
            <label htmlFor={label} className={classes.label}>{title}</label>
            {type === "textarea" ? <textarea type="text" id="description" name="description" className={classes.textarea} /> : <input type={label === "date" ? "date" : "text"} id={label} name={label} className={classes.input}/>}
        </p>
}