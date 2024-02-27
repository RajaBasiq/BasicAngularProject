import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  apiUrl = 'https://localhost:44375/file';

  constructor(private http: HttpClient) { }

//   getPosts(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/getfile`);
//   }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getfile?fileid=${id}`);
  }

//   addPost(post: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/posts`, post);
//   }

//   updatePost(id: number, post: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
//   }

//   deletePost(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
//   }
}