'use client';

import { dir } from 'i18next';
import { languages } from '../i18n/settings';

import '../../styles/globals.scss';
import { ReactNode } from 'react';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

interface IProps {
  children: ReactNode;
  params: { lang: string };
}

export default function RootLayout(props: IProps) {
  const {
    children,
    params: { lang }
  } = props;

  return (
    <html lang={lang} dir={dir(lang)}>
      <body className="overflow-y-scrol">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <b>Navbar</b>
          </div>

          <div className="col-start-3 space-y-6">
            <b>Address bar</b>

            <div className="rounded-xl border">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
