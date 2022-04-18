import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Modal, Row, Col } from 'antd';
import styles from './common.module.scss';
import Corner from './../../../assets/cornerv.png';

import { useWindowSize, formatMoneyVND } from '@monorepo/function-shares';
import { Buttons, AdjustedQuantity } from '@monorepo/ui-shares';

export interface ModalAddCartProps {
  // visibleParent: boolean;
  data: any;
  handle(): any;
}

export function ModalAddCart({
  // visibleParent = false,
  data,
  handle,
}: ModalAddCartProps) {
  const { width } = useWindowSize();
  const widthFocus = width || 501;
  const fakeData = ['Gói 250', 'Gói 350', 'Gói 450'];
  const [chooseType, setChooseType] = useState(1);
  const [total, setTotal] = useState('0');

  const getQuantity = (child: number) => {
    setTotal(formatMoneyVND(parseInt(data?.market_price) * child));
  };

  return (
    <Modal
      bodyStyle={{
        width: '100%',
        bottom: 0,
        borderRadius: '12px 12px 0px 0px',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 20,
        paddingLeft: 0,
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
      transitionName=""
      visible={true}
    >
      <div className={styles['p_10_20_10_20']}>
        <div style={{ position: 'absolute' }}>
          <Button
            className={styles['p_0']}
            onClick={() => {
              handle();
            }}
            style={{
              backgroundColor: 'rgba(255,255,255,0)',
              border: 'none',
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
          Thêm vào giỏ hàng
        </div>
      </div>
      <Row
        className={styles['m_10_0_0_0']}
        style={{
          fontSize: 14,
        }}
        gutter={[10, 24]}
      >
        <Col
          className={styles['p_0']}
          style={{
            backgroundColor: '#F4F6F8',
          }}
          span={24}
        >
          <div
            className={`${styles['p_10_20_10_20']} ${styles['row_center']}`}
            style={{
              backgroundColor: '#F4F6F8',
            }}
          >
            <Image alt="bg" src={data?.photo} width={56} height={56} priority />
            <div style={{ marginLeft: 12 }}>
              <p style={{ color: '#576071', fontSize: 12 }}>{data?.name}</p>
              <p>
                <span
                  style={{ fontSize: 14, fontWeight: 700, color: '#29313F' }}
                >
                  {formatMoneyVND(data?.market_price)}
                </span>
                <span
                  style={{
                    marginLeft: 19,
                    fontSize: 11,
                    color: '#B6BDCB',
                    textDecoration: 'line-through',
                  }}
                >
                  {formatMoneyVND(data?.market_price)}
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col className={styles['p_0_20']} span={24}>
          <p
            style={{
              color: '#576071',
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Chọn loại hàng
          </p>
          <Row gutter={[10, 24]}>
            {fakeData.map((item, index) => (
              <Col key={index} span={6}>
                <div
                  onClick={() => setChooseType(index)}
                  key={index}
                  className={
                    chooseType === index
                      ? styles['item_product_type_active']
                      : styles['item_product_type']
                  }
                >
                  {chooseType === index && (
                    <div style={{ position: 'absolute', top: 0, right: 0 }}>
                      <Image
                        alt="bg"
                        src={Corner}
                        width={20}
                        height={20}
                        priority
                      />
                    </div>
                  )}
                  <div className={styles['p_9_16']}>{item}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col className={styles['p_0_20']} span={24}>
          <p
            style={{
              color: '#576071',
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Số lượng
          </p>
          <AdjustedQuantity handleQuantity={getQuantity} />
        </Col>
        <Col className={styles['p_0_20']} span={24}>
          <Row gutter={[10, 24]}>
            <Col span={12}>
              <p style={{ color: '#576071', fontSize: 12 }}>Tạm tính:</p>
              <p style={{ color: '#EC4261', fontSize: 16, fontWeight: 700 }}>
                {total}
              </p>
            </Col>
            <Col span={12}>
              <Buttons
                handleClick={() => alert()}
                title="Thêm vào giỏ hàng"
                bgColor="#EC4261"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalAddCart;
