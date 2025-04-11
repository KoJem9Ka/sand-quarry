import { useRef, useEffect } from 'react';


export function usePrevious<Value, Init extends Value | undefined>(
  value: Value, initValue?: Init,
): Init extends undefined ? Value | undefined : Value {
  const ref = useRef<Value>(initValue as Value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current as Init extends undefined ? Value | undefined : Value;
}
