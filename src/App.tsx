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
      switch (true) {
        case (e.key === SpecialKey.Enter):
          console.log('[ENTER] pressed...');
          break;
        case (e.key === SpecialKey.Backspace):
          console.log('[BACKSPACE] pressed...');
          break;
        // using keyCode is deprecated, will update later
        case (e.keyCode >= Bounds.A && e.keyCode <= Bounds.Z):
          console.log("[" + e.key.toUpperCase() + "] pressed...");
          break;
      }
    };

    document.addEventListener('keydown', keydownHandler)

    return () => {
      document.removeEventListener('keydown', keydownHandler)
    };
  }, [currentLetters]);

  return (
    <div>
      Wordle Clone
      <div className={classes.tiles}>
        {currentLetters.map((letter, key) => (
          <div className={classes.tile} key={key}>
            {letter}
          </div>
        ))}
      </div>
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
