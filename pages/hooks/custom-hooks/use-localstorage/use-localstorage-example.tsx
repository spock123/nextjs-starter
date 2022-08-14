import { useState } from 'react';
import { Frame } from '@/components';

// import { isBrowser } from '@/util';

const isBrowser = (): boolean => typeof window !== 'undefined';

//declare var window: any;

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    // SSR support
    if (!isBrowser()) {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window?.localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // SSR support
      if (!isBrowser()) {
        return;
      }
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      if (window) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const useLocalstorageExampleComponent = () => {
  const [name, setName] = useLocalStorage<string>('name', 'Lars');

  return (
    <Frame title="useLocalstorage">
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </Frame>
  );
};

export default useLocalstorageExampleComponent;
