import {Command} from "commander";
const program = new Command();

// Comando -> Descripcion -> Valor por Default.
program
	.option("p-<port>", "puerto en donde se inicia el servidor.", 8080)
	.option("--mode <mode>", "modo de trabajo", "produccion");
program.parse();

export default program;
