import { useEffect, useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import styles from './common.module.scss';
import { useWindowSize } from '@monorepo/function-shares';

export interface ModalDetailInfoProps {
  visibleParent: boolean;
  content: string;
  handle(): any;
}

export function ModalDetailInfo({
  visibleParent = false,
  content,
  handle,
}: ModalDetailInfoProps) {
  const fakeData = ['Giá rẻ nhất', 'Giao trong 24h'];
  const { width } = useWindowSize();
  const widthFocus = width || 501;

  return (
    <Modal
      bodyStyle={{
        width: '100%',
        bottom: 0,
        borderRadius: '12px 12px 0px 0px',
      }}
      maskStyle={{
        width: widthFocus >= 500 ? 500 : widthFocus,
        left: widthFocus >= 500 ? 'calc((100vw - 500px) / 2)' : 0,
        right: widthFocus >= 500 ? 'calc((100vw - 500px) / 2)' : 0,
      }}
      width={widthFocus >= 500 ? 500 : widthFocus}
      maskClosable={true}
      footer={false}
      closable={false}
      // mask={false}
      visible={visibleParent}
    >
      <div>
        <div style={{ position: 'absolute' }}>
          <Button
            onClick={() => {
              handle();
            }}
            style={{
              backgroundColor: 'rgba(255,255,255,0)',
              border: 'none',
              padding: 0,
            }}
          >
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.78164 1.13257C2.39112 0.742045 1.75796 0.742045 1.36743 1.13257L1.13173 1.36827C0.741205 1.7588 0.741205 2.39196 1.13173 2.78249L7.84924 9.5L1.13173 16.2175C0.741204 16.608 0.741204 17.2412 1.13173 17.6317L1.36743 17.8674C1.75795 18.258 2.39112 18.258 2.78164 17.8674L9.49916 11.1499L16.2167 17.8674C16.6072 18.258 17.2404 18.258 17.6309 17.8674L17.8666 17.6317C18.2571 17.2412 18.2571 16.608 17.8666 16.2175L11.1491 9.5L17.8666 2.78249C18.2571 2.39196 18.2571 1.7588 17.8666 1.36827L17.6309 1.13257C17.2404 0.742048 16.6072 0.742048 16.2167 1.13257L9.49916 7.85009L2.78164 1.13257Z"
                fill="#798395"
              />
            </svg>
          </Button>
        </div>
        <div
          className={styles['title']}
          style={{ color: '#29313F', fontSize: 16 }}
        >
          Thông tin sản phẩm
        </div>
      </div>
      <Row style={{ fontSize: 14, marginTop: 20 }} gutter={[10, 10]}>
        {fakeData.map((item, index) => (
          <Col key={index} className={styles['row_center']} span={8}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                fill="#DEF5EF"
              />
              <path
                d="M22 5.18L10.59 16.6L6.35 12.36L7.76 10.95L10.59 13.78L20.59 3.78L22 5.18ZM19.79 10.22C19.92 10.79 20 11.39 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C13.58 4 15.04 4.46 16.28 5.25L17.72 3.81C16.1 2.67 14.13 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.81 21.78 9.67 21.4 8.61L19.79 10.22Z"
                fill="#00A57B"
              />
            </svg>
            <div style={{ fontSize: 14, color: '#00A57B', marginLeft: 5 }}>
              {item}
            </div>
          </Col>
        ))}
      </Row>
      {content ? (
        <div style={{ marginTop: 20, color: '#798395' }}>{content}</div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          Không có thông tin tương ứng
        </div>
      )}
    </Modal>
  );
}

export default ModalDetailInfo;
