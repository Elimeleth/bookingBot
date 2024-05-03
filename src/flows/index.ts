import { createFlow } from "@builderbot/bot";
import faqFlow from "./faq.flow";
import reserveFlow from "./reserve.flow";
import welcomeFlow from "./welcome.flow";
import devnullFlow from "./devnull.flow";


export default createFlow([
    faqFlow,
    reserveFlow,
    devnullFlow,
    welcomeFlow
])