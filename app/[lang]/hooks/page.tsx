import Link from 'next/link';
import { useTranslation } from '../../i18n';

import { Frame } from '@components';

interface ILink {
  href: string;
  title: string;
}

interface IProps {
  params: {
    lang: string;
  };
}

const hooksLinks: ILink[] = [
  {
    href: 'use-state',
    title: 'useState'
  },
  {
    href: 'use-reducer',
    title: 'useReducer'
  },
  {
    href: 'use-effect',
    title: 'useEffect'
  },
  {
    href: 'use-context',
    title: 'useContext'
  },
  {
    href: 'use-ref',
    title: 'useRef'
  }
];

const customHooksLinks: ILink[] = [
  {
    href: 'use-fetch',
    title: 'useFetch'
  },
  {
    href: 'use-localstorage',
    title: 'useLocalstorage'
  }
];

const Hooks = async (props: IProps) => {
  const { lang } = props.params;
  const { t } = await useTranslation(lang, 'translation');

  return (
    <>
      <Frame title="Hooks">
        <h1>Built in Hooks:</h1>
        <ul>
          {hooksLinks.map(({ href, title }, index) => (
            <li key={index}>
              <Link href={`/${lang}/hooks/${href}`}>{title}</Link>
            </li>
          ))}
        </ul>

        <h1>Custom Hooks:</h1>
        <ul>
          {customHooksLinks.map(({ href, title }, index) => (
            <li key={index}>
              <Link href={`/${lang}/hooks/custom-hooks/${href}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </Frame>
    </>
  );
};

export default Hooks;
