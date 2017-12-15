import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

// Services
import { BooksService } from './services/books.service';
import { LocalstorageService } from './services/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
