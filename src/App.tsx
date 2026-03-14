import { useEffect } from "react";

export default function App() {

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
