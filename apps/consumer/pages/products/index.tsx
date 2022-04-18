import { TransitionLayout, Header } from '@monorepo/ui-shares';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

export interface ProductProps {
  id: number;
  data: any;
}

function Products(props: ProductProps) {
  const { data } = props;
  return (
    <div>
      <TransitionLayout
        title="Tất cả sản phẩm"
        description="Mua mọi thứ"
        photo=""
      >
        <>
          <Header title={'Sản phẩm'} />
          <div style={{ marginTop: 85, paddingBottom: 15 }}>
            <Row style={{ marginLeft: 0, marginRight: 0 }} gutter={[16, 16]}>
              {data &&
                data.map(
                  (item: any, index: number) =>
                    item.photo &&
                    index < 30 && (
                      <Col
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                        key={item.id}
                        span={12}
                      >
                        <Link href={`/products/details/${item?.id}`}>
                          <a>
                            <Card
                              hoverable
                              style={{ width: 172 }}
                              cover={
                                <Image
                                  alt="example"
                                  src={item?.photo}
                                  width={240}
                                  height={230}
                                  priority
                                />
                              }
                              actions={[
                                <div key="price">{item?.market_price}</div>,
                                <ShoppingCartOutlined key="cart" />,
                              ]}
                            >
                              <Meta
                                title={item?.name}
                                description={item?.category}
                              />
                            </Card>
                          </a>
                        </Link>
                      </Col>
                    )
                )}
            </Row>
          </div>
        </>
      </TransitionLayout>
    </div>
  );
}

export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Products;
