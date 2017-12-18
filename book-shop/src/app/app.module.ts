import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Services
import { BooksService } from './services/books.service';
import { LocalstorageService } from './services/localstorage.service';
import { CommunicationService } from './services/communication.service';
import { appRoutingProviders, routing } from './app.routing';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { BookInfoComponent } from './book-info/book-info.component';
import { OrderPipe } from './pipes/orderby.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookInfoComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule,
    routing,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [BooksService, LocalstorageService, appRoutingProviders, CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
