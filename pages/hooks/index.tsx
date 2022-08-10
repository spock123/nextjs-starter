import Link from 'next/link';

import { Frame } from '@components';

const links: { href: string; title: string }[] = [
  {
    href: '/hooks/use-state/use-state-example',
    title: 'useState'
  },
  {
    href: '/hooks/use-reducer/use-reducer-example',
    title: 'useReducer'
  },
  {
    href: '/hooks/use-effect/use-effect-example',
    title: 'useEffect'
  },
  {
    href: '/hooks/use-context/use-context-example',
    title: 'useContext'
  }
];

const Hooks = () => {
  return (
    <>
      <Frame title="Hooks">
        <ul>
          {links.map(({ href, title }, index) => (
            <li key={index}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Frame>
    </>
  );
};

export default Hooks;
