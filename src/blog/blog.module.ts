import { NgModule } from '@angular/core';

import { BlogComponent }   from './blog.component';
import { BlogService } from './blog.service';

@NgModule({
    imports: [],
    exports: [BlogComponent],
    declarations: [BlogComponent],
    providers: [BlogService],
})
export class BlogModule { }
