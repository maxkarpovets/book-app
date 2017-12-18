import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CommunicationService } from './communication.service';
import 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class BooksService {
  books: any;
  bookId: any;

  constructor(private http: Http, private cs: CommunicationService, private localstorage: LocalstorageService) {
    this.books = this.localstorage.getItems('books');
  }

  /*
   * Get hardcoded books from fake json file.
   */
  getBooksFromJson() {
    return this.http.get('../../assets/books.json')
      .map(result => result.json());
  }

  /*
   * Find book by ID.
   */
  getBook(id: number): Observable<any> {
    this.cs.add(`BooksService: fetched book id=${id}`);
    return of(this.books.find(book => book.id === id));
  }

  /*
   * Update book.
   * This is spike implementation.
   * For real cases needed back end.
   */
  updateBook(book) {
    let editedBook = this.books.find(function (editedBook) { return editedBook.id === book.id; });
    let objIndex = this.books.findIndex((obj => obj.id === book.id));
    this.books[objIndex] = book;
    this.localstorage.setItems('books', this.books);
  }

}
