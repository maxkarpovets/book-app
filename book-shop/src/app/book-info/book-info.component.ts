import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})

export class BookInfoComponent implements OnInit {
  book: any;
  editedBook: any;
  allowEdit: boolean = false;
  constructor(private booksService: BooksService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getBookInfo();
  }

  /*
   * Get all data about needed book.
   */
  getBookInfo() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.getBook(id)
      .subscribe(book => this.book = book);

    this.editedBook = Object.assign({}, this.book);
  }

  editBook() {
    this.allowEdit = true;
  }

  blockEdit() {
    this.allowEdit = false;
  }

  save() {
    this.booksService.updateBook(this.editedBook);
  }

  cancel() {
    this.editedBook = this.book;
  }

}
