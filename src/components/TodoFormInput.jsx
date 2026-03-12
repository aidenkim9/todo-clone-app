import classes from "./TodoFormInput.module.css";

export default function TodoFormInput({ label, title, type, defaultValue }) {
  return (
    <p className={classes.container}>
      <label htmlFor={label} className={classes.label}>
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          type="text"
          id="description"
          name="description"
          className={classes.textarea}
          required
          defaultValue={defaultValue}
        />
      ) : (
        <input
          type={label === "date" ? "date" : "text"}
          id={label}
          name={label}
          className={classes.input}
          required
          defaultValue={defaultValue}
        />
      )}
    </p>
  );
}
