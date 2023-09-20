import { Avatar } from "react-native-paper";

export type MarketFullCardProps = {
  id: number;
  question: string;
  //   avatar: Avatar.Icon;
  authorName: string;
  price: number;
  numberOfTraders: number;
  numberOfComments: number;
};

export type MarketPageViewProps = {
  id: number;
  question: string;
  // avatar: Avatar.Icon;
  closingDate: string;
  authorName: string;
  price: number;
  numberOfTraders: number;
  description: string;
  comments: string[];
  trades: string[];
  positions: string[];
};
