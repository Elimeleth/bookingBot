import { EVENTS, addKeyword } from "@builderbot/bot";

export default addKeyword(EVENTS.ACTION)
    .addAction(async (_, { endFlow }) => endFlow())