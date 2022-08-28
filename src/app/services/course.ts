export interface Course {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
}

export class CourseModel implements Course {
  authors: string[];
  authorName: string;
  creationDate: string;
  description: string;
  duration: number;
  id: string;
  title: string;

  constructor() {
  }
}
