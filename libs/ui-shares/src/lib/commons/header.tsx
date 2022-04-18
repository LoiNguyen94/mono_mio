import styles from './common.module.scss';
import { useRouter } from 'next/router';
import { Button } from 'antd';
export interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header(props: HeaderProps) {
  const { title, subtitle } = props;
  const router = useRouter();
  return (
    <div className={styles['container']}>
      <div style={{ position: 'absolute' }}>
        <Button
          onClick={() => router.back()}
          style={{ backgroundColor: 'rgba(255,255,255,0)', border: 'none' }}
        >
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none">
            <path
              d="M10.3063 17.2294L3.1147 9.99645L10.3063 2.7635C10.7833 2.28377 10.7833 1.50881 10.3063 1.02907C9.82932 0.549335 9.05879 0.549335 8.5818 1.02907L0.521807 9.13539C0.0448117 9.61512 0.0448116 10.3901 0.521807 10.8698L8.5818 18.9761C9.05879 19.4559 9.82932 19.4559 10.3063 18.9761C10.7711 18.4964 10.7833 17.7091 10.3063 17.2294Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>

      <div className={styles['title']}>{title}</div>
    </div>
  );
}

export default Header;
