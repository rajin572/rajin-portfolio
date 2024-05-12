export type TProjects = {
  _id?: string;
  image: string;
  title: string;
  liveLink: string;
  clientLink: string;
  serverLink: string;
  technology: string[];
  keyFeature: string[];
  ratting: number;
  description: string;
};
export type Tskill = {
  _id?: string;
  image: string;
  skillName: string;
  percentage: number;
};
export type TBlogs = {
  _id: string;
  image: string;
  title: string;
  readingTime: number;
  author: string;
  technology: string[];
  description: string;
  publishDate: string;
  createdAt: string;
};
