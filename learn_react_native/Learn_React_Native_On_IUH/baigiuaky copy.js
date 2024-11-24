// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const food = [
  {
    "name": "Beef Ramen",
    "price": "$23.00",
    "like": 100,
    "image": require('./assets/sup.png'),
    "category": "Ramen"
  },
  {
    "name": "Premium Ramen",
    "price": "$27.00",
    "like": 100,
    "image": require('./assets/salted.png'),
    "category": "Ramen"
  },
  {
    "name": "Salted Edd Ramen",
    "price": "$25.00",
    "like": 100,
    "image": require('./assets/sup4.png'),
    "category": "Ramen"
  },
  {
    "name": "Chicken Ramen",
    "price": "$20.95",
    "like": 100,
    "image": require('./assets/mi.png'),
    "category": "Ramen"
  },
  {
    "name": "Crabstick Ramen",
    "price": "$17.75",
    "like": 100,
    "image": require('./assets/chicken.png'),
    "category": "Ramen"
  },
  {
    "name": "Spicy Ramen",
    "price": "$22.50",
    "like": 100,
    "image": require('./assets/sup.png'),
    "category": "Ramen"
  },
  // Add more drinks if needed
];


const category = [
  {
    "name": "",
    "image": ""
  },
  {
    "name": "",
    "image": ""
  },
  {
    "name": "",
    "image": ""
  }
]

// const renderFood = ({ item }) => (
//   <View style={styles.productContainer}>
//     <Image 
//       source={require(item.image)} // Sử dụng require cho hình ảnh
//       style={styles.productImage} 
//     />
//     <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
//     <Text style={styles.productPrice}>{item.price}</Text>
//   </View>
// );
const renderFood = ({ item }) => (
  <View style={styles.productContainer}>
    <Image 
      source={item.image} // Sử dụng trực tiếp item.image
      style={styles.productImage} 
    />
    <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
  </View>
);

const App = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch("")  // Replace with API URL
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);
  const handleFilterChange = (type) => {
    setFilter(type);
  };
  const filteredProducts = filter === 'All' ? products : products.filter(product => product.name === filter);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="options" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ingoude Ramen</Text>
        <TouchableOpacity>
          <Image 
            source={require('./assets/anh1.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Icon name="search" size={20} color="#666" />
          <TouchableOpacity>
            <Icon name="options" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      
      {/* Panel */}
        <View style={styles.panel}>
          <Image 
            source={require('./assets/Capture.PNG')}
            style={styles.imagePanel}
          />
        </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleFilterChange('All')}>
            <Image 
            source={require('./assets/anh1.png')}
            style={styles.avatar}
            />
            <Text style={styles.navText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleFilterChange('Ramen')}>
            <Image 
            source={require('./assets/sup.png')}
            style={styles.avatar}
            />
            <Text style={styles.navText}>Ramen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleFilterChange('Drink')}>
            <Image 
            source={require('./assets/coca.png')}
            style={styles.avatar}
            />
            <Text style={styles.navText}>Drink</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Danh sách sản phẩm */}
      <FlatList
        data={food}
        renderItem={renderFood}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  panel:{
    width: '100%',
    height: 120,
    backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagePanel:{
    height: 120,
    width: "100%",
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 16,
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesSection: {
    marginVertical: 16,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4EFF',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  navItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#fff"
  },
  navText: {
    marginLeft: 5,
    color: '#000',
    fontWeight: 'bold',
  },





  productContainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;