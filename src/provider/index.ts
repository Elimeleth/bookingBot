import { createProvider } from "@builderbot/bot"
import { MetaProvider as provider } from "@builderbot/provider-meta"

export default createProvider(provider, {
    jwtToken: process.env.JWT_TOKEN,
    numberId: process.env.NUMBER_ID,
    verifyToken: process.env.VERIFY_TOKEN,
    version: process.env.VERSION
})