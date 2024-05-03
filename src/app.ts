import "dotenv/config"
import  { MemoryDB, createBot } from "@builderbot/bot"
import flows from "./flows"
import provider from "./provider"


async function main () {

    const { httpServer } = await createBot({
        flow: flows,
        database: new MemoryDB(),
        provider
    })

    httpServer(9000)
}

main()