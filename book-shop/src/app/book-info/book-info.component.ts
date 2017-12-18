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

  constructor(private booksService: BooksService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getBookInfo();
  }

  getBookInfo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.getBook(id)
      .subscribe(book => this.book = book);
  }

}
