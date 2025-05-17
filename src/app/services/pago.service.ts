import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  crearTransaccion(amount: number, sessionId: string, buyOrder: string, returnUrl: string) {
    return this.http.post<any>(`${this.apiUrl}/crear-transaccion`, {
      amount,
      sessionId,
      buyOrder,
      returnUrl
    });
  }
}