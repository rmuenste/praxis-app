import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [MatButtonModule, MatBadgeModule],
  exports: [MatButtonModule, MatBadgeModule]
})
export class MaterialModule {

}
