import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, take} from "rxjs";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get<CoursesResponse>('http://localhost:4000/courses/all')
      .pipe(map(response => response.result), take(1))
  }

  createCourse(title: string, description: string, duration: number, authors: string[]) {
    return this.http.post<any>('http://localhost:4000/courses/add', {
      title: title,
      description: description,
      duration: duration,
      authors: authors
    })
  }

  editCourse(title: string, description: string, duration: number, authors: string[], id: string | null) {
    return this.http.put<any>('http://localhost:4000/courses/' + id, {
      title: title,
      description: description,
      duration: duration,
      authors: authors
    })
  }

  getCourse(id: string) {
    return this.http.get<CourseResponse>('http://localhost:4000/courses/' + id).pipe(map(response => response.result), take(1))
  }

  deleteCourse(id: string) {
    return this.http.delete<string>('http://localhost:4000/courses/' + id);
  }

  searchCoursesByTitle(title: string) {
    const params = new HttpParams({
      fromObject: {
        title: title
      }
    });

    return this.http.get<CoursesResponse>('http://localhost:4000/courses/filter', {params: params})
      .pipe(map(response => response.result), take(1))
  }
}

interface CoursesResponse {
  successful: boolean;
  result: Course[];
}

interface CourseResponse {
  successful: boolean;
  result: Course;
}
