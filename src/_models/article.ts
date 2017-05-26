import {User} from './user'
export class Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  social_image: string;
  tag_list: Array<string>;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  user: User;
  body_html: string;

}
