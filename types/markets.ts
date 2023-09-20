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
  comments: Comment[];
  trades: string[];
  positions: TradePosition[];
};

export type TradePosition = {
  // avatar: Avatar.Icon;
  authorName: string;
  totalPosition: number;
  positionType: TradePositionType;
};

export enum TradePositionType {
  YES,
  NO,
}

export type Comment = {
  // avatar: Avatar.Icon;
  authorName: string;
  comment: string;
  date: string;
};
