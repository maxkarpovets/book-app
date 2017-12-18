import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
