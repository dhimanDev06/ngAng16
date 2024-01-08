import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppModule } from "./app.module";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [
    ],
    imports: [
      AppRoutingModule
    ],
    providers: [],
  })
export class ShoppingModule{
    constructor(){

    }
    static forRoot(): ModuleWithProviders<AppModule>{
        return {
            ngModule: AppModule,
            providers:[]
        }
    }
}