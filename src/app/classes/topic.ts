import {Request} from "./request";
import {PipeTransform, Injectable, Pipe} from "@angular/core";

export class Topic {

  constructor(
    public error:      string,
    public message:    string,
    public offsets:    number[],
    public request:    Request
  ) {};

}

// This is used for filtering partition results
@Pipe({
  name: 'topicSort',
  pure: false
})

@Injectable()
export class TopicSortPipe implements PipeTransform {
  transform(array: Array<any>): Array<string> {
    if (array == null) return array;
    array.sort((a: any, b: any) => {
      if (a.request.topic.toLowerCase() < b.request.topic.toLowerCase()) {
        return -1;
      } else if (a.request.topic.toLowerCase() > b.request.topic.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
