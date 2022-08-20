export class Course {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];


  constructor(title: string, description: string, creationDate: Date, duration: number, authors: string[]) {
    this.title = title;
    this.description = description;
    this.creationDate = creationDate;
    this.duration = duration;
    this.authors = authors;
  }
}
