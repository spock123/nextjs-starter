import Link from 'next/link';

import { Frame } from '@components';

const Hooks = () => {
  return (
    <>
      <Frame title="Hooks">
        <ul>
          <li>
            <Link href="/hooks/use-state">
              <a>useState</a>
            </Link>
          </li>
          <li>
            <Link href="/hooks/use-reducer">
              <a>useReducer</a>
            </Link>
          </li>
        </ul>
      </Frame>
    </>
  );
};

export default Hooks;
