import { StyleSheet } from "react-native";
import { ScrollView, View, Text } from "react-native";
import MarketFullCard from "../../components/MarketFullCard";
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import isToken from "../../utils/isToken";
import { Redirect } from "expo-router";
import getMarkets from "../../utils/getMarkets";
import { MarketFullCardProps } from "../../types/markets";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [markets, setMarkets] = useState<MarketFullCardProps[]>([]);

  useEffect(() => {
    const isLoggedIn = async () => {
      const token = await isToken();
      if (!token) return;
      setIsAuthenticated(true);
    };

    isLoggedIn();
  }, []);

  useEffect(() => {
    const getMarketsData = async () => {
      const markets = await getMarkets();
      setMarkets(markets);
    };

    getMarketsData();
  });

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* {
        markets.map((market) => (

      } */}

      <MarketFullCard
        id={12456}
        price={45}
        question="Will the price of Bitcoin be above $100,000 on December 31, 2021?"
        authorName="John Doe"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={100}
        numberOfComments={10}
      />
      <MarketFullCard
        id={223}
        price={99}
        question="Will Joe Biden be president on January 1, 2022?"
        authorName="Nikita Medvedev"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={1}
        numberOfComments={22}
      />
      <MarketFullCard
        id={1}
        price={2}
        question="Will he propose to me by 2025?"
        authorName="Polina Medvedeva"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={1234}
        numberOfComments={24}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 5,
    color: "white",
    marginHorizontal: 20,
    flexDirection: "column",
  },
});
