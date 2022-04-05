import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  search(data: any[], pattern: string) {
    return data.filter((c: any) =>
      c.name.common.toLowerCase().includes(pattern)
    );
  }

  filter(data: any[], region: string) {
    if (region.toLowerCase() === 'all') return data;

    return data.filter(
      (c: any) => c.region.toLowerCase() === region.toLowerCase()
    );
  }

  paginate(data: any[], page: number, perPage: number) {
    let result: any[] = [];
    const startIndex = (page - 1) * perPage;
    const dataSlice = data.slice(startIndex);
    const range = [...Array(perPage).keys()];

    range.forEach((index: number) => {
      if (dataSlice[index] !== undefined) {
        result.push(dataSlice[index]);
      }
    });

    return result;
  }

  sortByName(data: any[]) {
    data.sort(function (a: any, b: any) {
      if (a.name.common < b.name.common) {
        return -1;
      } else return 1;
    });

    return data;
  }

  range(num: number) {
    return [...Array(num).keys()].map((i: number) => i + 1);
  }
}
