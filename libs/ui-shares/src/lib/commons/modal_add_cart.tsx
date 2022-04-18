import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Modal, Row, Col } from 'antd';
import styles from './common.module.scss';
import Corner from './../../../assets/cornerv.png';

import { useWindowSize, formatMoneyVND } from '@monorepo/function-shares';
import { Buttons } from '@monorepo/ui-shares';

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
  const [quantity, setQuantity] = useState(1);

  const handleCount = (prefix: number) => {
    switch (prefix) {
      case 1:
        if (quantity < 2) return;
        setQuantity(quantity - 1);
        break;
      case 2:
        setQuantity(quantity + 1);
        break;
    }
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
          <div className={styles['row_center']}>
            <Button
              onClick={() => handleCount(1)}
              className={styles['button_custom_quantity']}
            >
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                <path
                  d="M0.12224 2C0.12224 1.37868 0.62592 0.875 1.24724 0.875L14.7472 0.875C15.3686 0.875 15.8722 1.37868 15.8722 2C15.8722 2.62132 15.3686 3.125 14.7472 3.125L1.24724 3.125C0.62592 3.125 0.12224 2.62132 0.12224 2Z"
                  fill="#798395"
                />
              </svg>
            </Button>
            <div className={styles['quantity_picker']}>{quantity}</div>
            <Button
              onClick={() => handleCount(2)}
              className={styles['button_custom_quantity']}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.24724 6.875C0.62592 6.875 0.12224 7.37868 0.12224 8C0.12224 8.62132 0.62592 9.125 1.24724 9.125L6.87233 9.125L6.87233 14.75C6.87233 15.3713 7.37601 15.875 7.99733 15.875C8.61865 15.875 9.12233 15.3713 9.12233 14.75L9.12233 9.125H14.7472C15.3686 9.125 15.8722 8.62132 15.8722 8C15.8722 7.37868 15.3686 6.875 14.7472 6.875L9.12233 6.875L9.12233 1.25C9.12233 0.628681 8.61865 0.125001 7.99733 0.125C7.37601 0.125 6.87233 0.628681 6.87233 1.25L6.87233 6.875L1.24724 6.875Z"
                  fill="#798395"
                />
              </svg>
            </Button>
          </div>
        </Col>
        <Col className={styles['p_0_20']} span={24}>
          <Row gutter={[10, 24]}>
            <Col span={12}>
              <p style={{ color: '#576071', fontSize: 12 }}>Tạm tính:</p>
              <p style={{ color: '#EC4261', fontSize: 16, fontWeight: 700 }}>
                {formatMoneyVND(parseInt(data?.market_price) * quantity)}
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
