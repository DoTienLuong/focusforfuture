import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-web";

const food = [
  {
    name: "Beef Ramen",
    price: "$23.00",
    like: 100,
    image: require("./img/img_baiThi/mi1.png"),
    category: "Ramen",
  },
  {
    name: "Premium Ramen",
    price: "$27.00",
    like: 100,
    image: require("./img/img_baiThi/mi2.png"),
    category: "drink",
  },
  {
    name: "Salted Edd Ramen",
    price: "$25.00",
    like: 100,
    image: require("./img/img_baiThi/mi3.png"),
    category: "Ramen",
  },
  {
    name: "Chicken Ramen",
    price: "$20.95",
    like: 100,
    image: require("./img/img_baiThi/sup1.png"),
    category: "Ramen",
  },
  {
    name: "Crabstick Ramen",
    price: "$17.75",
    like: 100,
    image: require("./img/img_baiThi/sup2.png"),
    category: "drink",
  },
  {
    name: "Spicy Ramen",
    price: "$22.50",
    like: 100,
    image: require("./img/img_baiThi/mi1.png"),
    category: "Ramen",
  },
  // Add more drinks if needed
];
const Categories = [
  {
    name: "All",
    image: require("./img/img_baiThi/mi1.png"),
  },
  {
    name: "Ramen",
    image: require("./img/img_baiThi/mi1.png"),
  },
  {
    name: "Drink",
    image: require("./img/img_baiThi/mi1.png"),
  },
];

const App = () => {
  // Tạo Header
  const ViewHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="option" size={24} color="#000"></Icon>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ingoude Ramen</Text>
        <TouchableOpacity>
          <Image
            source={require("./img/img_baiThi/avt.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    );
  };

  // Tạo Search View
  const ViewSearch = () => {
    return (
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Icon name="search" size={20} color="#666" />
        <TouchableOpacity>
          <Icon name="option" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    );
  };

  // Tạo Panel View
  const ViewPanel = () => {
    return (
      <View style={styles.panel}>
        <Image
          source={require("./img/img_baiThi/panel.png")}
          style={styles.imagePanel}
        />
      </View>
    );
  };
  // Tạo useState Product
  const [dataFood, setDataFood] = useState([]);
  // Tạo fetch API Food:
  useEffect(() => {
    fetch("https://670b3e35ac6860a6c2cb8557.mockapi.io/foods")
      .then((res) => res.json())
      .then((data) => setDataFood(data))
      .catch((error) => console.log("Ko thể render sản phẩm: ", error));
  }, []);
  // Tao filter:
  const [chose, setChose] = useState("All"); // Tạo useState để set trạng thái
  const dataChose = dataFood.filter((item) => {
    // tạo mảng dataChose dùng filter với food. (Chỉ return những item đúng điều kiện)
    if (chose === "All") {
      // Nếu chose = All thì render tất cả
      return true;
    } else {
      // so sánh item lọc từ food.filter, item nào thoả điều kiện thì in ra. (chỉ out những item true)
      return item.category.toLowerCase() === chose.toLowerCase();
    }
  });
  // Tạo link fetch API:
  // Tạo useState cho navigation
  const [nav, setNav] = useState("");
  // Tạo render navigate:
  useEffect(() => {
    fetch("https://670b3e35ac6860a6c2cb8557.mockapi.io/navigate")
      .then((res) => res.json())
      .then((chose) => setNav(chose))
      .catch((error) => console.log("Không thể render vì lỗi: ", error));
  }, []);
  // Tạo Navigation View
  const ViewNav = () => {
    const renderCategori = ({ item }) => {
      return (
        <TouchableOpacity onPress={() => setChose(item.name)}>
          <View style={styles.navigation}>
            <Image source={item.image} style={styles.avatar} />
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.categories}>
        <FlatList
          data={nav}
          renderItem={renderCategori}
          keyExtractor={(item) => item.name}
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    );
  };

  // Tạo Product View
  const ViewItem = () => {
    const renderFood = ({ item }) => {
      return (
        <TouchableOpacity style={styles.foodContainer}>
          <Image source={item.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.foodPrice}>{item.price}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <ScrollView style={styles.viewScroll}>
        <View style={styles.viewItem}>
          <FlatList
            data={dataChose}
            renderItem={renderFood}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      </ScrollView>
    );
  };

  // Export ra app:
  return (
    <View style={styles.container}>
      {/* Header */}
      <ViewHeader />

      {/* Search Bar */}
      <ViewSearch />

      {/* Panel */}
      <ViewPanel />

      {/* Nav */}
      <ViewNav />

      {/* Item */}
      <ViewItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  header: {
    paddingTop: 10,
    // height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    margin: 16,
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  panel: {
    width: "100%",
    height: 120,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imagePanel: {
    flex: 1,
    height: 120,
    width: "100%",
    borderRadius: 15,
  },
  categories: {
    marginVertical: 16,
    flexDirection: "row", // Điều này giúp căn giữa các item theo chiều ngang
    justifyContent: "center", // Căn giữa tất cả các phần tử trong FlatList
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    marginHorizontal: 10, // Thêm khoảng cách giữa các item
    alignItems: "center", // Nọi dung căn giữa item
    height: 45,
    width: 100,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  contentContainer: {
    paddingHorizontal: 10, // Thêm padding xung quanh nếu cần
  },

  foodContainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  foodImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  foodName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  foodPrice: {
    fontSize: 14,
    color: "green",
  },
  row: {},
});

export default App;
