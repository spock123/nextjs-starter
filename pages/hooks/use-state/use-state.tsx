import { useState } from 'react';

export const UseState = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => setCounter(counter + 1);
  return (
    <>
      <div className="container grid gap-y-6">
        <h1 className="text-3xl font-bold">useState</h1>
        <p className="text-2xl font-bold">Counter: {counter}</p>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={updateCounter}
          >
            Update
          </button>
        </p>
      </div>
    </>
  );
};
