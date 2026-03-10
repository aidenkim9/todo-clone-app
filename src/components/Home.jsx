import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>TTodoist</h1>
      <p>Plan your day. Track your tasks. Stay productive.</p>
    </div>
  );
}
