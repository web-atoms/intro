import Colors from "web-atoms-core/dist/core/Colors";
import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { AtomTheme } from "web-atoms-core/dist/web/styles/AtomTheme";
import {IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export default class DemoStyle extends AtomStyle {

    public theme = this.styleSheet as AtomTheme;

    public get root(): IStyleDeclaration {
        return {
            color: this.theme.app.screen.screenType === "mobile" ? Colors.green : Colors.blue
        };
    }

}
