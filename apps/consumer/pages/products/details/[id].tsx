import { Detail } from '@monorepo/ui-shares';
import { TransitionLayout, Header } from '@monorepo/ui-shares';

const DetailPro = ({ detail, errors }: any) => {
  if (errors) {
    return <span style={{ color: 'red' }}>ERR: {errors}</span>;
  }
  return (
    <TransitionLayout
      title={'Chi tiết sản phẩm'}
      photo={detail?.photo}
      description={detail?.log_time}
    >
      <Header title="Chi tiết sản phẩm" />
      <Detail detail={detail} errors={errors} />
    </TransitionLayout>
  );
};

export default DetailPro;

export const getStaticPaths = async () => {
  const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
  const data = await res.json();
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch(
      `https://dev-api.itaphoa.com/customer/products/${id}`
    );
    const detail = await res.json();
    return { props: { detail } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
