export class Course {
  title: string;
  description: string;
  creationDate: Date;
  duration: string;
  authors: string;


  constructor(title: string, description: string, creationDate: Date, duration: number, authors: string[]) {
    this.title = title;
    this.description = description;
    this.creationDate = creationDate;
    this.duration = this.getDuration(duration);
    this.authors = authors.join(", ")
  }

  getDuration(duration: number) {
    let hours = duration / 60;
    let minutes;
    if (Number.isInteger(hours)) {
      return hours + ":00 hours"
    } else {
      hours = Math.trunc(hours);
      minutes = duration % 60;
      return hours + ":" + minutes + " hours";
    }
  }
}
