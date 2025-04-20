import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 })
 export class enseigantService {
   addenseigant(value: any) {
     throw new Error('Method not implemented.');
   }
   deleteenseigant(id: number) {
     throw new Error('Method not implemented.');
   }
   updateenseigant(editingenseigantId: never, value: any): void | Observable<any> {
     throw new Error('Method not implemented.');
   }
   private apiUrl = 'http://localhost:3000/enseigant'; 
 
   constructor(private http: HttpClient) {}
 
   
   getEnseigant(): Observable<any[]> {
     return this.http.get<any[]>(this.apiUrl);
   }
 
   
   addEnseigant(enseigant: any): Observable<any> {
     return this.http.post(this.apiUrl, enseigantService);
   }
 
   
   updateEnseigant(id: number, enseigant: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/${id}`, enseigantService);
   }
 
   //deleteEnseigant(id: number, Number: NumberConstructor, { id }: { id: number; }): Observable<any> {
     //return this.http.delete(`${this.apiUrl}/${id}`);
  // }
 }
 