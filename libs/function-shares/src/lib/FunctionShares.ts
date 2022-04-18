export const roundToX = (num: number) => {
  return num.toFixed();
};

export const formatMoneyVND = (num: number) => {
  return (
    roundToX(num)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫'
  );
};
