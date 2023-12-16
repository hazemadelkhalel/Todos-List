import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const tasks = this.httpClient.get<Task[]>(this.apiUrl);
    return tasks;
  }
}
