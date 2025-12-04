import { useEffect } from 'react'

export const useBackspaceKeyDown = (callback, callback1, callback2) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 46 || event.keyCode === 8) {
        callback();
      }else if (event.keyCode === 37) {
        callback1();
      }else if (event.keyCode === 39) {
        callback2();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, callback1, callback2]);
};