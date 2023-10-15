export function throttle(
  func: () => void,
  delay: number
): () => void {
  let throttling = false;
  
  return function () {
    if (!throttling) {
      func();
      throttling = true;
      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
}




