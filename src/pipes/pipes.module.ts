import { NgModule } from '@angular/core';
import { SortPipe } from './sort/sort';
import { RelativeTimePipe } from './relative-time/relative-time';
@NgModule({
	declarations: [SortPipe,
    RelativeTimePipe],
	imports: [],
	exports: [SortPipe,
    RelativeTimePipe]
})
export class PipesModule {}
