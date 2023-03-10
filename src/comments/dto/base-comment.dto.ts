import { Comments } from './../entities/comment.entity';
import * as moment from 'moment';

export class BaseCommentDto {
  content: string;
  publication_id: number;
}
export class CreateCommentDto {
  content: string;
  publication_id: number;
}

export class DbCommentDto {
  content: string;
  createdAt: string;
  updatedAt: string;

  static dtoFromComment(comment: Comments) {
    const db = new DbCommentDto();
    db.content = comment.content;
    db.createdAt = moment(comment.createdAt).format('DD/MM/YYYY hh:mm');
    db.updatedAt = moment(comment.updatedAt).format('DD/MM/YYYY hh:mm');
  }

  static arrayDtoFromComments(comments: Comments[]) {
    return comments.map((comment) => this.dtoFromComment(comment));
  }
}
