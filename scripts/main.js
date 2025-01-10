import { world, system } from "@minecraft/server";

function mainTick() {
    if (system.currentTick % 200 === 0) {
        world.sendMessage("[SYSTEM] Welcome to 人狼RPG WORLD");
    }
    system.run(mainTick);
}

system.run(mainTick);