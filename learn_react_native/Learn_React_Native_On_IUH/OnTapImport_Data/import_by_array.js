import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const product_list = [
  {
    id: "1",
    title: "Ca nấu lẩu, nấu mì mini",
    shop: "Devang",
    image: require("./img/img_bai6/list1/khoga.jpg"),
  },
  {
    id: "2",
    title: "1KG KHÔ GÀ BƠ TỎI",
    shop: "LTD Food",
    image: require("./img/img_bai6/list1/khoga.jpg"),
  },
  {
    id: "3",
    title: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    image: require("./img/img_bai6/list1/khoga.jpg"),
  },
  // Thêm thông tin sản phẩm ở đây.
];

// 2 cách thêm link ảnh:
/**
 * 
 * Cách 1: truyền link vào image trong product_list:
 *  b1: image: 'https:asddsd/asdas/da/s'
 *  b2: source:{{uri: item.image}}
 * Cách 2: truyền require (đường dẫn trong asset) vào image trong product_list:
 *  b1: image: require('path')
 *  b2: source:{item.image}

 */
/**
 * 
 * Render UI with data:
 * b1: Tạo component UI: renderItem
 * b2: Tạo View với FlatList:
 *  <FlatList
 *      data = {arrayData}
 *      renderItem = {componentUI}
 *      keyExtractor={(item)=> item.id}
 *  />
 */

const App = () => {
  // Tạo view renderItem: (Component UI)
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage}></Image>
        <View style={styles.itemDetail}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemShop}>Shop: {item.shop}</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={product_list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  itemDetail: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemShop: {
    fontSize: 14,
    color: "#d35400",
  },
  chatButton: {
    backgroundColor: "#e73c3c",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  chatButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
