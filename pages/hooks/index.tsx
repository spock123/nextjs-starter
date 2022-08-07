import Link from 'next/link';

import { Frame } from '@components';

const Hooks = () => {
  return (
    <>
      <Frame title="Hooks">
        <ul>
          <li>
            <Link href="/hooks/use-stat/use-state-example">
              <a>useState</a>
            </Link>
          </li>
          <li>
            <Link href="/hooks/use-reducer/use-reducer-example">
              <a>useReducer</a>
            </Link>
          </li>
          <li>
            <Link href="/hooks/use-effect/use-effect-example">
              <a>useEffect</a>
            </Link>
          </li>
        </ul>
      </Frame>
    </>
  );
};

export default Hooks;
