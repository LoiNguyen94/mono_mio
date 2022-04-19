import styles from './index.module.scss';
import { Button } from 'antd';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Button
        onClick={() => {
          router.push('./products');
        }}
        type="primary"
      >
        Go to Product Page
      </Button>
    </div>
  );
}

export default Index;
