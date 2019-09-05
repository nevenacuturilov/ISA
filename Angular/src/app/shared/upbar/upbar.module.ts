import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpbarComponent } from './upbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ UpbarComponent ],
    exports: [ UpbarComponent ]
})

export class UpbarModule {}
