import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  constructor(private booksService: BooksService, private localstorage: LocalstorageService) { }

  ngOnInit() {}

  /*
   * Get books data from fake Json fake.
   */
  getBooksFromJson() {
    this.booksService.getBooksFromJson()
    .subscribe(
      (data) => {
        this.localstorage.setItems('books', data);
    },
    err => console.log('Error with books getting'),
    () => this.getBooksList()
    );
  }

  /*
   * Get books list from localstorage.
   * Spike implementation, should be replaced for 
   * real projects.
   */
  getBooksList() {
    this.books = this.localstorage.getItems('books');
  }

}
