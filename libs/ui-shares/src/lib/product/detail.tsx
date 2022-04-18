import { useState } from 'react';
import { Card, Rate, Row, Col, Button } from 'antd';
import Image from 'next/image';
import styles from './product.module.scss';

import FreeShip from './../../../assets/freeship.png';
import OneChangeOne from './../../../assets/onechangeone.png';
import ShipDayAfter from './../../../assets/shipdayafter.png';
import Cup from './../../../assets/cup.png';

import { formatMoneyVND } from '@monorepo/function-shares';
import {
  Dividers,
  ModalDetailInfo,
  Buttons,
  ModalAddCart,
} from '@monorepo/ui-shares';
import { useWindowSize } from '@monorepo/function-shares';

export interface DetailProps {
  detail: any;
  errors: any;
}

export function Detail(props: DetailProps) {
  const { errors, detail } = props;
  const fakeData = ['Bao ăn', '1 đổi 1'];
  const [countStar, setCountStar] = useState(1);
  const [visibleModalProductInfo, setVisibleModalProductInfo] = useState(false);
  const [visibleModalAddCart, setVisibleModalAddCart] = useState(false);
  const { width } = useWindowSize();
  const widthFocus = width || 501;

  if (errors) {
    return <span style={{ color: 'red' }}>ERR: {errors}</span>;
  }

  const handleRate = (e: any) => {
    setCountStar(e);
  };

  return (
    <div style={{ marginTop: 85, paddingBottom: 15 }}>
      <Image
        alt="bg"
        src={detail?.photo}
        width={widthFocus >= 500 ? 500 : widthFocus}
        height={320}
        priority
      />
      <div style={{ padding: '0px 20px', marginTop: -40 }}>
        {/* <div style={{ backgroundColor: 'red', padding: 15 }}>dsadsa</div> */}
        <Card className={styles['card_custom']}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <div className={styles['name_product']}>
                {detail?.name} - {detail?.unit}
              </div>
            </Col>
            <Col span={24}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#EC4261' }}>
                {formatMoneyVND(detail?.market_price)}
              </span>
              <span
                style={{
                  marginLeft: 19,
                  fontSize: 14,
                  color: '#B6BDCB',
                  textDecoration: 'line-through',
                }}
              >
                {formatMoneyVND(detail?.market_price)}
              </span>
            </Col>
            <Col className={styles['row_between_center']} span={24}>
              <div>
                <Rate
                  onChange={handleRate}
                  allowHalf
                  allowClear={false}
                  defaultValue={countStar}
                />
                <span style={{ fontSize: 14, color: '#F4C82B', marginLeft: 5 }}>
                  {countStar}/5
                </span>
              </div>
              <div>Đã bán 50</div>
            </Col>
            <Col className={styles['row_center']} span={9}>
              <div style={{ width: 25, height: 21 }}>
                <Image
                  layout="fixed"
                  alt="FreeShip"
                  src={FreeShip}
                  width={17}
                  height={21}
                />
              </div>
              <span style={{ fontSize: 12 }}>
                Freeship đơn
                <br /> hàng 210k
              </span>
            </Col>
            <Col className={styles['row_center']} span={9}>
              <div style={{ width: 25, height: 21 }}>
                <Image
                  layout="fixed"
                  alt="ShipDayAfter"
                  src={ShipDayAfter}
                  width={21}
                  height={21}
                />
              </div>
              <span style={{ fontSize: 12 }}>
                Giao hàng vào
                <br /> ngày hôm sau
              </span>
            </Col>
            <Col className={styles['row_center']} span={6}>
              <div style={{ width: 25, height: 21 }}>
                <Image
                  layout="fixed"
                  alt="OneChangeOne"
                  src={OneChangeOne}
                  width={17}
                  height={21}
                />
              </div>
              <span style={{ fontSize: 12 }}>
                Bao ăn
                <br /> 1 đổi 1
              </span>
            </Col>
            <Col className={styles['row_center']} span={24}>
              <div style={{ width: 25, height: 21 }}>
                <Image
                  layout="fixed"
                  alt="Cup"
                  src={Cup}
                  width={18}
                  height={18}
                />
              </div>
              <div style={{ fontSize: 12 }}>
                <span style={{ color: '#EC4261' }}>Top 3</span> sản phẩm bán
                chạy trong Thịt mát
              </div>
            </Col>
          </Row>
        </Card>
        <p
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#576071',
            margin: '20px 0px 10px 0px',
          }}
        >
          Thông tin sản phẩm
        </p>
        <Row style={{ fontSize: 14 }} gutter={[10, 10]}>
          <Col span={13}>Giá trị trường</Col>
          <Col span={11}>{formatMoneyVND(detail?.market_price)}</Col>

          <Col span={13}>Giá Mio cung cấp</Col>
          <Col style={{ color: '#EC4261' }} span={11}>
            {formatMoneyVND(detail?.market_price)}
          </Col>

          <Col span={13}>Danh mục</Col>
          <Col className={styles['row_between_center']} span={11}>
            {detail?.category}{' '}
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
              <path
                d="M5.71588 4.75822L1.64326 0.310303C1.55396 0.211979 1.44773 0.133936 1.33068 0.0806779C1.21363 0.0274197 1.08809 0 0.961285 0C0.834485 0 0.708939 0.0274197 0.59189 0.0806779C0.474841 0.133936 0.368606 0.211979 0.279313 0.310303C0.100415 0.506853 0 0.772733 0 1.04987C0 1.32701 0.100415 1.59289 0.279313 1.78944L3.67957 5.50303L0.279313 9.21662C0.100415 9.41317 0 9.67905 0 9.95619C0 10.2333 0.100415 10.4992 0.279313 10.6958C0.369065 10.793 0.475506 10.8699 0.592534 10.9221C0.709562 10.9743 0.834874 11.0008 0.961285 11C1.0877 11.0008 1.21301 10.9743 1.33004 10.9221C1.44706 10.8699 1.55351 10.793 1.64326 10.6958L5.71588 6.24785C5.80591 6.15033 5.87736 6.0343 5.92613 5.90647C5.97489 5.77863 6 5.64152 6 5.50303C6 5.36455 5.97489 5.22743 5.92613 5.0996C5.87736 4.97176 5.80591 4.85574 5.71588 4.75822Z"
                fill="#677187"
              />
            </svg>
          </Col>

          <Col span={13}>Đơn vị</Col>
          <Col span={11}>{detail?.unit}</Col>

          <Col span={13}>Xuất sứ</Col>
          <Col span={11}>{detail?.origin}</Col>
        </Row>
      </div>
      <Dividers height="8" top="20" bottom="20" />
      <div style={{ padding: '0px 20px' }}>
        <p
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#576071',
            marginBottom: '15px',
          }}
        >
          Mô tả sản phẩm
        </p>
        <Row style={{ fontSize: 14 }} gutter={[10, 10]}>
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
        <div className={styles['text_description']} style={{ marginTop: 15 }}>
          {detail?.info?.description}
        </div>
      </div>
      <Dividers top="20" bottom="10" />
      <Button
        onClick={() => {
          setVisibleModalProductInfo(true);
        }}
        type="link"
        className={`${styles['row_center']} ${styles['button_custom']}`}
      >
        <span style={{ color: '#EC4261', fontSize: 14, marginRight: 5 }}>
          Xem thêm
        </span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M10.59 0.59375L6 5.17375L1.41 0.59375L0 2.00375L6 8.00375L12 2.00375L10.59 0.59375Z"
            fill="#EC4261"
          />
        </svg>
      </Button>
      <div style={{ backgroundColor: '#F6F6F6', padding: '24px 20px' }}>
        <p
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#576071',
            marginBottom: '15px',
          }}
        >
          Sản phẩm tương tự
        </p>
      </div>

      <div style={{ padding: '20px 20px 0px 20px' }}>
        <Buttons
          handleClick={() => setVisibleModalAddCart(true)}
          title="Thêm vào giỏ hàng"
          bgColor="#EC4261"
        />
      </div>

      {visibleModalProductInfo && (
        <ModalDetailInfo
          // visibleParent={visibleModalProductInfo}
          content={detail?.info?.description}
          handle={() => setVisibleModalProductInfo(false)}
        />
      )}

      {visibleModalAddCart && (
        <ModalAddCart
          data={detail}
          // visibleParent={visibleModalAddCart}
          handle={() => setVisibleModalAddCart(false)}
        />
      )}
    </div>
  );
}

export default Detail;
