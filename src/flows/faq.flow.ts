import { EVENTS, addKeyword } from "@builderbot/bot"

const faq_msg = `Algunas de las Preguntas más frecuentes que suelen tener nuestros afiliados:

1. ¿Que precio tiene el ebook?
    - El ebook tiene un precio de $10 el cual viene incluido en el paquete 1 a 1.

2. ¿Cuánto tiempo dura el ebook?
    - El ebook dura aproximadamente 30 min de lectura.

3. ¿Cómo puedo descargar el ebook?
    - El ebook se puede descargar una vez adquieras tu reserva 1 a 1.

4. ¿Cómo puedo adquirir el ebook?
    - El ebook se puede adquirir una vez adquieras tu reserva 1 a 1.

5. ¿Cómo puedo comprar el ebook?
    - El ebook se puede comprar una vez adquieras tu reserva 1 a 1.
`

export default addKeyword(EVENTS.ACTION)
    .addAnswer(faq_msg)
    .addAction(async (_, { endFlow }) => endFlow())