import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatBadgeModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatBadgeModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule {}
