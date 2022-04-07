import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storageName: string = 'app.theme.data';

  constructor() {}

  save(data: any) {
    try {
      localStorage.setItem(this.storageName, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  getData() {
    try {
      const loadedData = localStorage.getItem(this.storageName);
      if (loadedData) return JSON.parse(loadedData);

      return null;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
}
