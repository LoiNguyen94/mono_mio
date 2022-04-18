import { useState, ReactNode, useEffect } from 'react';
import styles from './layout.module.scss';
import Head from 'next/head';

export interface LayoutTransProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  photo?: string;
}

export function TransitionLayout({
  children,
  title = 'Mio',
  description,
  photo,
}: LayoutTransProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={photo} />
      </Head>
      <div className={styles['container']}>
        <div
          onTransitionEnd={() => {
            if (transitionStage === 'fadeOut') {
              console.log('fading out');
              setDisplayChildren(children);
              setTransitionStage('fadeIn');
            }
          }}
          className={`${styles['frame']} ${styles['content']} ${styles[transitionStage]}`}
        >
          {displayChildren}
        </div>
        {/* <div className={styles['frame']}>{children}</div> */}
      </div>
    </div>
  );
}

export default TransitionLayout;
