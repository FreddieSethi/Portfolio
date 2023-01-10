import React, { useState, useEffect, useContext } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import WeatherComponent from "../components/WeatherComponent";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let KEY = "266334445ebc4114ae3357267564861b";

  // sports = https://newsapi.org/v2/top-headlines?q=sports&apiKey=266334445ebc4114ae3357267564861b
  // bbc news = https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=266334445ebc4114ae3357267564861b

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=sports&apiKey=266334445ebc4114ae3357267564861b"
      )
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <WeatherComponent
          style={{ position: "absolute", top: 20, right: 20 }}
        />
      </View>

      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <View>
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.userImage}
                resizeMode="cover"
              />
              <Image style={styles.image} source={{ uri: item.urlToImage }} />
              <Text style={styles.item}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#eee",
    paddingTop: 100,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  food: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
  weather: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default NewsList;
