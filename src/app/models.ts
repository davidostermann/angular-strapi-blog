export interface Article {
  _id: String;
  id: String;
  title: String;
  excerpt: String;
  content: String;
  image: String;
  slug: String;
  tags: Tag[];
}

export interface Tag {
  _id: String;
  id: String;
  label: String;
  articles: Article[];
}

