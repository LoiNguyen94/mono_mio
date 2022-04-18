import { useCallback, useState, useEffect } from 'react';

export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient]
  );

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const onHandleResize = () => {
      setSize(getSize);
    };
    window.addEventListener('resize', onHandleResize);
    return () => {
      window.removeEventListener('resize', onHandleResize);
    };
  }, [getSize, isClient]);

  return size;
};

export default useWindowSize;
