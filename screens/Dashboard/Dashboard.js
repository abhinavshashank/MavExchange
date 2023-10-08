import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Image } from "expo-image";
import { FontSize, FontFamily, Padding, Border, Color } from "../../utils/globalStyles";
import { useNavigation } from '@react-navigation/native';
import Chat from '../Chat/Chat'; // Import the Chat component

//sda
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseConfig from '../../firebaseConfig';
import { ScrollView } from "react-native-gesture-handler";



const Dashboard = () => {

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const productsRef = ref(database, 'products'); // Replace 'products' with the actual database reference to your products


  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the data object into an array (if it's not empty)
        const productArray = Object.values(data);
        setProducts(productArray);
      } else {
        // Handle the case where no data is available
        setProducts([]);
      }
    });

    // Unsubscribe from Firebase updates when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);



  const handleChatButtonPress = () => {
    // Navigate to the Chat screen when the chat button is pressed
    navigation.navigate('Chat');
  };

  const handleProductButtonPress = () => {
    // Navigate to the Chat screen when the chat button is pressed
    navigation.navigate('AddProductScreen');
  };


  return (

    < ScrollView>
      <View style={[styles.dashboardLightV70, styles.item1IconLayout]}>
        <View style={styles.itemList}>
          {products.map((product, index) => (
            <View style={styles.itemRow} key={index}>
              {/* Render the product details here */}
              <Text>{product.name}</Text>
              <Text>{product.description}</Text>
              <Text>${product.price}</Text>
              {/* Add more components for other product details */}
            </View>
          ))}
        </View>

        <View style={[styles.toolbar, styles.toolbarFlexBox]}>
          <ImageBackground
            style={styles.arrows1Icon}
            // resizeMode="x"
            source={require("../../assets/images/back.png")}
          />
          <Image
            style={styles.send21}
            contentFit="cover"
            source={require("../../assets/images/dm.png")}
          />
        </View>
        <View style={[styles.searchBar, styles.toolbarFlexBox]}>
          <TextInput
            style={styles.searchMarketplace}
            placeholder="Search Marketplace"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.51)"
          />
          <Image
            style={styles.sortIcon}
            contentFit="cover"
            source={require("../../assets/images/sort.png")}
          />
          <Image
            style={styles.sortIcon}
            contentFit="cover"
            source={require("../../assets/images/filter.png")}
          />
        </View>
        <View style={styles.itemList}>
          <View style={styles.itemRow}>
            <View style={styles.itemCardSpaceBlock}>
              <Image
                style={[styles.item1Icon, styles.item1IconLayout]}
                contentFit="cover"
                source={require("../../assets/images/keyboard.jpeg")}
              />
              <View style={[styles.itemOptions, styles.toolbarFlexBox]}>
                <View>
                  <Text style={styles.logitechKeyboard}>Logitech keyboard</Text>
                  <Text style={[styles.monthsOld, styles.textFlexBox]}>
                    3 months old
                  </Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
                </View>
                <View style={styles.actions}>
                  <Image
                    style={styles.chat31Layout}
                    contentFit="cover"
                    source={require("../../assets/images/chat.png")}
                  />
                  <Image
                    style={[styles.saveInstagram21, styles.chat31Layout]}
                    contentFit="cover"
                    source={require("../../assets/images/save.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.itemCard1, styles.itemCardSpaceBlock]}>
              <Image
                style={[styles.item1Icon, styles.item1IconLayout]}
                contentFit="cover"
                source={require("../../assets/images/keyboard.jpeg")}
              />
              <View style={[styles.itemOptions, styles.toolbarFlexBox]}>
                <View>
                  <Text style={styles.logitechKeyboard}>Logitech keyboard</Text>
                  <Text style={[styles.monthsOld, styles.textFlexBox]}>
                    3 months old
                  </Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
                </View>
                <View style={styles.actions}>
                  <Image
                    style={styles.chat31Layout}
                    contentFit="cover"
                    source={require("../../assets/images/chat.png")}
                  />
                  <Image
                    style={[styles.saveInstagram21, styles.chat31Layout]}
                    contentFit="cover"
                    source={require("../../assets/images/save.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.itemRow1}>
            <View style={styles.itemCardSpaceBlock}>
              <Image
                style={[styles.item1Icon, styles.item1IconLayout]}
                contentFit="cover"
                source={require("../../assets/images/desk-chair.jpg")}
              />
              <View style={[styles.itemOptions, styles.toolbarFlexBox]}>
                <View>
                  <Text style={styles.logitechKeyboard}>Logitech keyboard</Text>
                  <Text style={[styles.monthsOld, styles.textFlexBox]}>
                    3 months old
                  </Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
                </View>
                <View style={styles.actions}>
                  <Image
                    style={styles.chat31Layout}
                    contentFit="cover"
                    source={require("../../assets/images/chat.png")}
                  />
                  <Image
                    style={[styles.saveInstagram21, styles.chat31Layout]}
                    contentFit="cover"
                    source={require("../../assets/images/save.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.itemCard1, styles.itemCardSpaceBlock]}>
              <Image
                style={[styles.item1Icon, styles.item1IconLayout]}
                contentFit="cover"
                source={require("../../assets/images/monitor.jpg")}
              />
              <View style={[styles.itemOptions, styles.toolbarFlexBox]}>
                <View>
                  <Text style={styles.logitechKeyboard}>Logitech keyboard</Text>
                  <Text style={[styles.monthsOld, styles.textFlexBox]}>
                    3 months old
                  </Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
                </View>
                <View style={styles.actions}>
                  <Image
                    style={styles.chat31Layout}
                    contentFit="cover"
                    source={require("../../assets/images/chat.png")}
                  />
                  <Image
                    style={[styles.saveInstagram21, styles.chat31Layout]}
                    contentFit="cover"
                    source={require("../../assets/images/save.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.itemRow1}>
            <View style={styles.itemCardSpaceBlock}>
              <Image
                style={[styles.item1Icon, styles.item1IconLayout]}
                contentFit="cover"
                source={require("../../assets/images/mattress.jpeg")}
              />
              <View style={[styles.itemOptions, styles.toolbarFlexBox]}>
                <View>
                  <Text style={styles.logitechKeyboard}>Logitech keyboard</Text>
                  <Text style={[styles.monthsOld, styles.textFlexBox]}>
                    3 months old
                  </Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
                </View>
                <View style={styles.actions}>
                  <Image
                    style={styles.chat31Layout}
                    contentFit="cover"
                    source={require("../../assets/images/chat.png")}
                  />
                  <Image
                    style={[styles.saveInstagram21, styles.chat31Layout]}
                    contentFit="cover"
                    source={require("../../assets/images/save.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.itemCard1, styles.itemCardSpaceBlock]}>
              <Image
                style={[styles.item1Icon, styles.item1IconLayout]}
                contentFit="cover"
                source={require("../../assets/images/hoodie.jpeg")}
              />
              <View style={[styles.itemOptions, styles.toolbarFlexBox]}>
                <View>
                  <Text style={styles.logitechKeyboard}>Logitech keyboard</Text>
                  <Text style={[styles.monthsOld, styles.textFlexBox]}>
                    3 months old
                  </Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
                </View>
                <View style={styles.actions}>
                  <Image
                    style={styles.chat31Layout}
                    contentFit="cover"
                    source={require("../../assets/images/chat.png")}
                  />
                  <Image
                    style={[styles.saveInstagram21, styles.chat31Layout]}
                    contentFit="cover"
                    source={require("../../assets/images/save.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottonNav, styles.toolbarFlexBox]}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../../assets/images/add.png")}
          />
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../../assets/images/search-category.png")}
          />
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../../assets/images/home.png")}
          />
          <Image
            style={styles.send21}
            contentFit="cover"
            source={require("../../assets/images/save.png")}
          />
          <Image
            style={styles.userIcon}
            contentFit="cover"
            source={require("../../assets/images/user.png")}
          />
        </View>
        {/* Add a chat button */}
        <TouchableOpacity
          onPress={handleChatButtonPress}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 60,
            backgroundColor: 'blue', // Customize the button style
            borderRadius: 30,
            padding: 10,
          }}
        >
          {/* You can use any chat icon image or an icon component */}
          <Image
            source={require("../../assets/images/chat.png")} // Replace with your chat icon image source
            style={{
              width: 30,
              height: 30,
              tintColor: 'white', // Customize the icon color
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleProductButtonPress}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 0,
            backgroundColor: 'blue', // Customize the button style
            borderRadius: 30,
            padding: 10,
          }}
        >
          {/* You can use any chat icon image or an icon component */}
          <Image
            source={require("../../assets/images/user.png")} // Replace with your chat icon image source
            style={{
              width: 30,
              height: 30,
              tintColor: 'white', // Customize the icon color
            }}
          />
        </TouchableOpacity>
      </View >
    </ScrollView>



  );
};

const styles = StyleSheet.create({
  item1IconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  toolbarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textFlexBox: {
    marginTop: 2,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.ubuntuRegular,
    alignItems: "center",
  },
  chat31Layout: {
    height: 14,
    width: 14,
  },
  itemCardSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: 0,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flex: 1,
  },
  arrows1Icon: {
    width: 30,
    height: 30,
  },
  send21: {
    width: 20,
    height: 20,
  },
  toolbar: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 15,
    overflow: "hidden",
  },
  searchMarketplace: {
    width: 268,
    paddingTop: 4,
    paddingBottom: 1,
    alignItems: "flex-end",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.ubuntuRegular,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sortIcon: {
    width: 26,
    height: 17,
  },
  searchBar: {
    borderStyle: "solid",
    borderColor: "#000",
    borderLeftWidth: 1,
    marginTop: 14,
  },
  item1Icon: {
    maxWidth: "100%",
    height: 165,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  logitechKeyboard: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    width: 122,
    display: "flex",
    color: Color.gray_100,
    fontFamily: FontFamily.ubuntuRegular,
    alignItems: "center",
  },
  monthsOld: {
    color: Color.black,
    width: 61,
  },
  text: {
    width: 17,
    color: Color.gray_100,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  saveInstagram21: {
    marginLeft: 10,
  },
  actions: {
    flexDirection: "row",
  },
  itemOptions: {
    marginTop: 6,
  },
  itemCard1: {
    marginLeft: 3,
  },
  itemRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  itemRow1: {
    marginTop: 14,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  itemList: {
    width: 393,
    marginTop: 14,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  userIcon: {
    width: 32,
    height: 32,
  },
  bottonNav: {
    paddingHorizontal: 32,
    paddingVertical: Padding.p_3xs,
    opacity: 0.45,
    marginTop: 14,
    backgroundColor: Color.white,
    justifyContent: "space-between",
  },
  dashboardLightV70: {
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Dashboard;
