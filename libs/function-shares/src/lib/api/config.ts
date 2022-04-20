import axios from 'axios';
export const apiServer = process.env.NX_DOMAIN;

const InsAxios = axios.create({
  baseURL: apiServer,
  timeout: 1000,
});

export const getListProduct = async () => {
  const res = await InsAxios.get(`customer/products`);
  const data = await res.data;
  return data;
};

export const getProductDetail = async (id: string) => {
  const res = await InsAxios.get(`customer/products/${id}`);
  const data = await res.data;
  return data;
};
