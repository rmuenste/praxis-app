import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule,
            MatBadgeModule,
            MatToolbarModule,
            MatIconModule,
            MatListModule,
            MatSidenavModule],
  exports: [MatButtonModule,
            MatBadgeModule,
            MatToolbarModule,
            MatIconModule,
            MatListModule,
            MatSidenavModule]
})
export class MaterialModule {}
