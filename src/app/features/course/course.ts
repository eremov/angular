import {formatDate} from '@angular/common'

export class Course {
  title: String | undefined;
  description: String | undefined;
  creationDate: String | undefined;
  duration: String | undefined;
  authors: String | undefined;


  constructor(title: String, description: String, creationDate: Date, duration: Number, authors: String[]) {
    this.title = title;
    this.description = description;
    this.creationDate = formatDate(creationDate, 'dd.MM.yyyy', 'en_US')
    this.duration = this.getDuration(duration);
    this.authors = authors.join(", ")
  }

  getDuration(duration: Number) {
    // @ts-ignore
    let hours = duration / 60;
    let minutes;
    if (Number.isInteger(hours)) {
      return hours + ":00 hours"
    } else {
      hours = Math.trunc(hours);
      // @ts-ignore
      minutes = duration % 60;
      return hours + ":" + minutes + " hours";
    }
  }
}
