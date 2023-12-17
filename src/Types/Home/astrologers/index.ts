export interface IAstrologerCard {
  profile_image: string;
  astrologerName: string;
  astrologerMainSkill: string;
  astrologerRating: number;
}

export type AstrologerCardType = IAstrologerCard & {
  type: 'astrologerCard';
};
