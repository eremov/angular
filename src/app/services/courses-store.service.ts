import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Course} from "./course";
import {CoursesService} from "./courses.service";

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  private courses$$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  public course$: Observable<Course[]> = this.courses$$.asObservable();

  constructor(private courseService: CoursesService) {
  }

  getAll() {
    this.isLoading$$.next(true);
    this.courseService.getAll().subscribe(courses => {
      this.courses$$.next(courses);
      this.isLoading$$.next(false);
    })
  }

  createCourse(title: string, description: string, duration: number, authors: string[]) {
    this.courseService.createCourse(title, description, duration, authors);
  }

  editCourse(title: string, description: string, duration: number, authors: string[], id: string) {
    this.courseService.editCourse(title, description, duration, authors, id);
  }

  getCourse(id: string) {
    this.courseService.getCourse(id);
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id);
  }

  searchCoursesByTitle(title: string) {
    this.courseService.searchCoursesByTitle(title).subscribe(courses => {
      this.courses$$.next(courses);
    })
  }
}
