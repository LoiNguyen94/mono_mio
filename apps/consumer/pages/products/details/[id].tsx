import { Detail } from '@monorepo/ui-shares';
import { TransitionLayout, Header } from '@monorepo/ui-shares';
import { getProductDetail, getListProduct } from '@monorepo/function-shares';
import dynamic from 'next/dynamic';

const DetailPro = ({ detail, errors }: any) => {
  if (errors) {
    return <span style={{ color: 'red' }}>ERR: {errors}</span>;
  }

  return (
    <TransitionLayout
      title={detail?.name}
      photo={detail?.photo}
      description={detail?.log_time}
    >
      <Header title="Chi tiết sản phẩm" />
      <Detail detail={detail} errors={errors} />
    </TransitionLayout>
  );
};

export default dynamic(() => Promise.resolve(DetailPro), { ssr: false });

export const getStaticPaths = async () => {
  // const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
  // const data = await res.json();
  const data = await getListProduct();
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    // const res = await fetch(
    //   `https://dev-api.itaphoa.com/customer/products/${id}`
    // );
    const detail = await getProductDetail(id);
    return { props: { detail } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
