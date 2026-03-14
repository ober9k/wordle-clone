import { useEffect, useState } from "react";

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
    </div>
  );
}
