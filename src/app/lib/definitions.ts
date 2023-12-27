export type User = {
  id: string;
  email: string;
  password: string;
}

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  publication_date: string;
}

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
}

export type Tree = {
  id: string;
  scientific_name: string;
  common_name: string;
  image_url: string;
}
