export interface IBlogCard {
  blogImg: string;
  blogTitle: string;
  publisherName: string;
  PublishedDate: string;
}
export type BlogCardType = IBlogCard & {
  type: 'Blog';
};
