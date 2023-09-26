import { Avatar } from "react-native-paper";

export interface MarketFullCardProps {
  id: number;
  question: string;
  authorName: string;
  price: number;
  numberOfTraders: number;
  numberOfComments: number;
}
export interface MarketPageViewProps {
  id: number;
  question: string;
  closingDate: string;
  authorName: string;
  price: number;
  numberOfTraders: number;
  description: string;
  comments: Comment[];
  trades: Trade[];
  positions: TradePosition[];
}

export interface TradePosition {
  authorName: string;
  totalPosition: number;
  positionType: TradePositionType;
}

export enum TradePositionType {
  YES,
  NO,
}

export interface Trade {
  traderName: string;
  // This is gonna have to be much more complex than this
  trade: string;
}

export interface Comment {
  authorName: string;
  comment: string;
  date: string;
}
