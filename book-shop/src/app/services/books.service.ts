import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CommunicationService } from './communication.service';
import 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class BooksService {

  constructor(private http: Http, private cs: CommunicationService, private localstorage: LocalstorageService) {}

  getBooksFromJson() {
    return this.http.get('../../assets/books.json')
      .map(result => result.json());
  }

  getBook(id: number): Observable<any> {
    this.cs.add(`BooksService: fetched book id=${id}`);
    let books = this.localstorage.getItems('books');
    return of(books.find(book => book.id === id));
  }
}
