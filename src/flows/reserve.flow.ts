import { addKeyword } from "@builderbot/bot";
import devnullFlow from "./devnull.flow";

const rsrv_msg = `Haz dado un gran paso ☺️

Todo el valor que te quiero regalar lo encontraras una vez reserves en mi link

No lo olvides, es un regalo para ti ☺️

https://calendly.com/<TU-LINK-CALENDLY>`

export default addKeyword(['RESERVAR', 'reservar'])
    .addAnswer(rsrv_msg)