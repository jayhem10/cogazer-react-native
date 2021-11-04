import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

const MainScreen = (props: { navigation: string[] }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch("http://192.168.1.45:8000/api/categories");
      const json = await response.json();
      const data = json["hydra:member"];
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9" />
      </View>
    );
  } else {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Image style={styles.tinyLogo} source={{ uri: item.image }} />
          </View>
        )}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  card: {
    width: 50,
    height: 50,
  },
});

export default MainScreen;
