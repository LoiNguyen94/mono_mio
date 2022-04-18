import styles from './layout.module.scss';

/* eslint-disable-next-line */
import React, { ReactNode } from 'react';

import Head from 'next/head';

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  photo?: string;
}

export function MainLayout({
  children,
  title = 'Mio',
  description,
  photo,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={photo} />
      </Head>
      <div className={styles['container']}>
        <div className={styles['frame']}>{children}</div>
      </div>
    </>
  );
}

export default MainLayout;
