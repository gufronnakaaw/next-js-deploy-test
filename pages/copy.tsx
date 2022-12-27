import { useRef } from 'react';

export default function copy() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCopy(): void {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputRef.current!.value);
    console.log('copied');
  }
  return (
    <>
      <input type="text" defaultValue="testing" ref={inputRef} />
      <button onClick={handleCopy}>copy</button>
    </>
  );
}
