export default interface Post {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  content: string;
  description: string;
}
