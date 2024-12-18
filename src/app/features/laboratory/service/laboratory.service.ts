import { Injectable } from '@angular/core';
import { AppService } from '../../../shared/services/app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService extends AppService {

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/v1/system/laboratories`);
  }
}
