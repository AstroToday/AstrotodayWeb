export interface IAstrotodayTestimonyCard {
  img: string;
  name: string;
  description: string;
}
export type AstrotodayTestimonyCardType = IAstrotodayTestimonyCard & {
  type: 'reviewCard';
};
