import { GameMode, Player, TimeOfDay, WeatherType, world } from "@minecraft/server";
import { systemMessage } from "./Message";
import { DimensionId } from "./enums/DimensionId";

/**
 * ワールドに対して設定を行う
 */
export function configureWorld() {
    world.setTimeOfDay(TimeOfDay.Day);
    world.getDimension(DimensionId.OVER_WORLD).setWeather(WeatherType.Clear);
    world.gameRules.doDayLightCycle = false;
    world.gameRules.doWeatherCycle = false;
    world.gameRules.showDeathMessages = false;
    world.gameRules.commandBlockOutput = false;

    systemMessage('World getTimeOfDay', world.getTimeOfDay());
    systemMessage('World GameRule doDayLightCycle', world.gameRules.doDayLightCycle);
    systemMessage('World GameRule doWeatherCycle', world.gameRules.doWeatherCycle);
    systemMessage('World GameRule showDeathMessages', world.gameRules.showDeathMessages);
    systemMessage('World GameRule commandBlockOutput', world.gameRules.commandBlockOutput);
}

/**
 * 全てのプレイヤーに対して設定を行う
 */
export function configureAllPlayers() {
    for(const player of world.getAllPlayers()) {
        configurePlayer(player);
    }
}

/**
 * プレイヤーに対して設定を行う
 * @param {Player} player - 設定対象のプレイヤー
 * @returns {void}
 */
export function configurePlayer(player) {
    player.setGameMode(GameMode.adventure);
    player.resetLevel();

    systemMessage(`${player.name} GameMode`, player.getGameMode());
}