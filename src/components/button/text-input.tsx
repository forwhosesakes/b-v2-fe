import { forwardRef } from 'react';

const TextInput = forwardRef<HTMLInputElement, { placeholder: string }>(
  (props, ref) => {
    return <input ref={ref} type="text" placeholder={props.placeholder} />;
  }
);
export default TextInput