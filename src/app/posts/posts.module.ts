import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';;
import { PostsComponent } from './posts.component';
import { PostsService } from "./posts.service";
import { BurningDirective } from './burning.directive';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PostsComponent,
    BurningDirective,
    HighlightPipe
],
  providers: [PostsService],
  exports: [PostsComponent]
})
export class PostsModule { }