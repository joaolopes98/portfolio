import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtilsService {
  calculateYearsSince(fromDate: Date): number {
    const today = new Date();
    let years = today.getFullYear() - fromDate.getFullYear();
    const hasNotHadAnniversaryThisYear =
      today.getMonth() < fromDate.getMonth() ||
      (today.getMonth() === fromDate.getMonth() &&
        today.getDate() < fromDate.getDate());

    if (hasNotHadAnniversaryThisYear) {
      years--;
    }
    return years;
  }
}
