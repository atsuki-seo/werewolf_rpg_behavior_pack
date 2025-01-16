import { world, system } from "@minecraft/server";
import { systemMessage } from "./Message";
import { configureWorld, configureAllPlayers } from "./Configuration";

function mainTick() {
    system.run(mainTick);
}

system.run(mainTick);

world.afterEvents.worldInitialize.subscribe(event => {
    systemMessage('World Initialized');
    configureWorld();
    configureAllPlayers();
});