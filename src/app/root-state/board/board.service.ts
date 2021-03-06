import { Order } from './board.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoardService {
  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('https://safe-sea-95431.herokuapp.com/api/order', order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('https://safe-sea-95431.herokuapp.com/api/order');
  }

  addOffer(id: string, activeSitter: string): Observable<Order> {
    return this.http.put<Order>(`https://safe-sea-95431.herokuapp.com/api/order/${id}`, {sitter: activeSitter});
  }

  deleteOrder(id: string): Observable<object> {
    return this.http.delete(`https://safe-sea-95431.herokuapp.com/api/order/${id}`);
  }

  removeOffer(id: string, sitterId: string): Observable<object> {
    return this.http.put(`https://safe-sea-95431.herokuapp.com/api/order/offer/${id}`, {sitterId: sitterId});
  }
}
