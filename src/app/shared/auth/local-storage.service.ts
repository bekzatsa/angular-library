import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storage {
  [name: string]: any;

  readonly length!: number;

  constructor() {

  }


  clear(): void {
    localStorage.clear();
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  key(index: number): string | null {
    return null;
  }

  removeItem(key: string): void {
  }

  setItem(key: string, value: string): void {
  }

}
