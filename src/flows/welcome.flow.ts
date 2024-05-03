import { EVENTS, addKeyword } from "@builderbot/bot";
import reserveFlow from "./reserve.flow";
import faqFlow from "./faq.flow";
import devnullFlow from "./devnull.flow";

const wlcom_msg = `Hola! {name}

Quiero darte un regalo 😳

Te quiero regalar una conversación 1 a 1 con nuestra CEO donde podrás aprender muchisimo y mejorar tus habilidades.

Envia la palabra *RESERVAR* y no te pierdas esta gran oportunidad.

Pero si todo esto que te digo no es suficiente para ti {name} te prometo que encontraras todo el valor que necesitas
para obtener nuestro Ebook digital para que puedas mejorar tus habilidades.
`

const thanks_msg = `{name}, entiendo que tengas algunas dudas al momento de adquirir tu reserva

por eso quiero ofrecerte un set de preguntas respuestas para que hemos ido desarrollando para poder dar confianza a nuestro producto

Te las dejo aqui abajo`

export default addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {
        const re = /1498865/
        if (!re.test(ctx.from)) {
            return gotoFlow(devnullFlow)
        }
        await flowDynamic(wlcom_msg.replaceAll('{name}', ctx.name))
    })
    .addAnswer('¿Deseas reservar? (*SI*/*NO*)', { capture: true }, async (ctx, { gotoFlow }) => {
        if (['SI', 'RESERVAR'].includes(ctx.body.toLocaleUpperCase())) {
            return gotoFlow(reserveFlow)
        }
    })
    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {
        await flowDynamic(thanks_msg.replace('{name}', ctx.name))
        gotoFlow(faqFlow)
    })