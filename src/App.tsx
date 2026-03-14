import { useEffect, useState } from "react";
import classes from "./App.module.css";

const Bounds = {
  A: 65,
  Z: 90,
} as const;

const SpecialKey = {
  Enter: 'Enter',
  Backspace: 'Backspace',
} as const;

const Limit      = 5;
const EmptyValue = '.';
const EmptyArray = Array(Limit).fill(EmptyValue);

const isEmptyValue = (l) => l === EmptyValue;
const isNotEmptyValue = (l) => l !== EmptyValue;

export default function App() {

  const [ currentLetters, setCurrentLetters ] = useState(EmptyArray);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      console.log('keydown', e.code, e.key);
    };

    document.addEventListener('keydown', keydownHandler)

    return () => {
      document.removeEventListener('keydown', keydownHandler)
    };
  }, [])

  return (
    <div>
      Wordle Clone
      {Array(5).fill('').map((row, key) => (
        <div className={classes.tiles} key={key}>
          <div className={classes.tile}></div>
          <div className={classes.tile}></div>
          <div className={classes.tile}></div>
          <div className={classes.tile}></div>
          <div className={classes.tile}></div>
        </div>
      ))}
    </div>
  );
}
