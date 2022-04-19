export const apiServer = process.env.NX_DOMAIN;


export const getListProduct = async () => {
  const res = await fetch(`${apiServer}customer/products`);
  const data = await res.json();
  return data;
};

export const getProductDetail = async (id: string) => {
  const res = await fetch(`${apiServer}customer/products/${id}`);
  const data = await res.json();
  return data;
};
