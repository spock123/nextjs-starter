import { Frame } from '../../components';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';

interface IProps {
  params: {
    lang: string;
  };
}

export default async function Page(props: IProps) {
  let { lang } = props.params;
  if (languages.indexOf(lang) < 0) lang = fallbackLng;
  const { t } = await useTranslation(lang);

  return (
    <>
      <div className={styles.container}>
        <Frame title={t('title')}>
          <main className={styles.main}>
            {/* Interpolation */}

            <Trans t={t} i18nKey="blog.text">
              <a href={t('blog.link')}>blog post</a> wtf is this.
            </Trans>

            <Link href={`${lang}/hooks`}>Hooks</Link>

            <p>
              Public environment variable:{' '}
              {process.env.NEXT_PUBLIC_ENV_VARIABLE}
            </p>
          </main>
        </Frame>
      </div>
    </>
  );
}
