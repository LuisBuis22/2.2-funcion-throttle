"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const pensar_controller_1 = require("../controllers/pensar-controller");
function pensando() {
    console.log("Dame 5 segundos para pensar");
}
const program = new commander_1.Command;
program
    .version("1.0.0")
    .description("No se puede llamar otra vez a la función durante 5 segundos");
program
    .command("Llamar")
    .alias("ll")
    .description("No insistir durante 5 segundos")
    .action(() => {
    const throttlePensando = (0, pensar_controller_1.throttle)(pensando, 5000);
    throttlePensando();
});
//# sourceMappingURL=cli.js.map