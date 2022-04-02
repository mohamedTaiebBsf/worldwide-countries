import { Injectable } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  search(data: any, pattern: string) {
    return data.filter((c: any) =>
      c.name.common.toLowerCase().includes(pattern)
    );
  }
}
