import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  setItems(storageKey, saveObject) {
    localStorage.setItem(storageKey, JSON.stringify(saveObject));
  }

  getItems(storageKey) {
    return JSON.parse(localStorage.getItem(storageKey));
  }

}
