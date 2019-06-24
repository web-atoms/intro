// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import DemoViewModel from "./DemoViewModel";
	    import DemoStyle from "./styles/DemoStyle";
	
	
	export default class Demo extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  DemoStyle ;
			
			this.viewModel =  this.resolve(DemoViewModel) ;
			
			this.runAfterInit(() => this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root ));
			
			const e1 = document.createElement("span");
			
			this.append(e1);
			
			this.runAfterInit( () => this.setLocalValue(e1, "text",  ((this.viewModel) ? this.viewModel.message : undefined) ) );
		}
	}