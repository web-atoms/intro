import XNode from "@web-atoms/core/dist/core/XNode";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

export default class HomePage extends ContentPage {

    public async init() {
        this.renderer = <div>
            <div text="Hello Web Atoms !!"/>
        </div>;
    }

}
