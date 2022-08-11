import Link from 'next/link';

import { Frame } from '@components';

interface ILink {
  href: string;
  title: string;
}

const hooksLinks: ILink[] = [
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

const customHooksLinks: ILink[] = [
  {
    href: '/hooks/custom-hooks/use-fetch/use-fetch-example',
    title: 'useFetch'
  }
];

const Hooks = () => {
  return (
    <>
      <Frame title="Hooks">
        <h1>Built in Hooks:</h1>
        <ul>
          {hooksLinks.map(({ href, title }, index) => (
            <li key={index}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <h1>Custom Hooks:</h1>
        <ul>
          {customHooksLinks.map(({ href, title }, index) => (
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
