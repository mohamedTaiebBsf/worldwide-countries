import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  options: Partial<IndividualConfig> = {
    progressBar: true,
    progressAnimation: 'decreasing',
    closeButton: true,
    tapToDismiss: false,
  };

  constructor(private toastr: ToastrService) {}

  success(error: string, title?: string) {
    this.toastr.success(error, title, this.options);
  }

  error(error: string, title?: string) {
    this.toastr.error(error, title, this.options);
  }
}
