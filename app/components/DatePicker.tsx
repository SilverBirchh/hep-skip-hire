import { useState } from "react";

export default function DatePicker() {
  const [type, setType] = useState('text');

  return (
    <input
      type={type}
      onFocus={() => setType('date')}
      onChange={(evt) => {
        setType(evt.target.value ? 'date' : 'text')
        evt.target.blur()
      }}
      name="date"
      placeholder="Delivery date"
      min={Date.now()}
    ></input>
  );
}
