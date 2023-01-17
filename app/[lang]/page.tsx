'use client';

import { Frame } from '../../components';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from '../i18n';

interface IProps {
  params: {
    lang: string;
  };
}

export default function Page(props: IProps) {
  const { lang } = props.params;
  //const { t } =  useTranslation(lang);

  return (
    <div className={styles.container}>
      <Frame title="NextJS Starter">
        <main className={styles.main}>
          <Fade direction="down">
            <Link href={`${lang}/hooks`}>Hooks</Link>
          </Fade>

          <p>
            Public environment variable: {process.env.NEXT_PUBLIC_ENV_VARIABLE}
          </p>
        </main>
      </Frame>
    </div>
  );
}
