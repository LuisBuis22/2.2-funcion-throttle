import * as fs from "fs";

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
      }, delay);
    }
  };
}


function pensando() {
  console.log("Dame 5 segundos para pensar");
}

const throttlePensando = throttle(pensando, 5000);