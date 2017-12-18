import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }
  /*
   * Set data to localstorage.
   */
  setItems(storageKey, saveObject) {
    localStorage.setItem(storageKey, JSON.stringify(saveObject));
  }

  /*
   * Get data to localstorage.
   */
  getItems(storageKey) {
    return JSON.parse(localStorage.getItem(storageKey));
  }
}
