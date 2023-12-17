import { IAstrologerCard, AstrologerCardType } from '@/Types/Home/astrologers';
import { IBlogCard, BlogCardType } from '@/Types/Home/Blogs';
import {
  IAstrotodayTestimonyCard,
  AstrotodayTestimonyCardType,
} from '@/Types/Home/CustomerTestimony';

export type cardData = IAstrologerCard | IBlogCard | IAstrotodayTestimonyCard;

export type cardDataType =
  | AstrologerCardType
  | BlogCardType
  | AstrotodayTestimonyCardType;
