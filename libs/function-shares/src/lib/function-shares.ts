export const roundToX = (num: number) => {
  if (num) return num.toFixed();
  return 0;
};

export const formatMoneyVND = (num: number) => {
  return (
    roundToX(num)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫'
  );
};
