import XNode from "@web-atoms/core/dist/core/XNode";
import { Drawer } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

export default class AppMenu extends Drawer {

    public async init() {

        this.renderer = <div>
            <div>Drawer Menu</div>
        </div>;
    }

}