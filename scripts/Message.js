import { world } from "@minecraft/server";
import { AttributedCode, ColorCode } from "./enums/TextCode";

/**
 * システムメッセージをフォーマットして送信します。
 *
 * @param {string} text - メッセージの主題や内容。
 * @param {string|number|boolean} value - メッセージに含める詳細な値（文字列、数値、または真偽値）。
 *
 * @returns {void} - この関数は値を返しません。
 */
export function systemMessage(text, value) {
    const prefix = `${ColorCode.GRAY}[SYSTEM]${AttributedCode.RESET}`;

    let formattedText = `${ColorCode.MATERIAL_IRON}${text}${AttributedCode.RESET}`;
    let formattedValue = "";
    if(value !== undefined) {
        formattedValue = ': '
        switch (typeof value) {
            case `number`:
                formattedValue += `${ColorCode.AQUA}${value}`
                break;
            case `boolean`:
                formattedValue += value ? `${ColorCode.GREEN}${value}` : `${ColorCode.BLUE}${value}`
                break;
            default:
                formattedValue += `${ColorCode.WHITE}${value}`
                break;
        }
        formattedValue += `${AttributedCode.RESET}`;
    }
    world.sendMessage(`${prefix}${formattedText}${formattedValue}${AttributedCode.RESET}`);
}