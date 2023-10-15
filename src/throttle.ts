export function throttle(
  fn: () => void,
  delay: number
): () => void {
  let throttling = false;
  
  return function () {
    if (!throttling) {
      fn();
      throttling = true;
      setTimeout(() => {
        throttling = false;
      }, 1000);
    }
  };
}



