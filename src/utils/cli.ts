import { Command } from "commander"
import { throttle } from "../controllers/pensar-controller"


function pensando() {
  console.log("Dame 5 segundos para pensar");
}

const program = new Command;

program 
  .version("1.0.0")
  .description("No se puede llamar otra vez a la función durante 5 segundos");

  program
  .command ("Llamar")
  .alias ("ll")
  .description ("No insistir durante 5 segundos")
  .action (() => {
    const throttlePensando = throttle(pensando, 5000);
    throttlePensando();
  })

  program.parse(process.argv);