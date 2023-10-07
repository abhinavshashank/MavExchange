// import * as React from "react";
// import {
//   Text,
//   StyleSheet,
//   View,
//   TextInput,
//   Pressable,
//   ImageBackground,
//   StatusBar,
// } from "react-native";
// import { Image } from "expo-image";
// import { LinearGradient } from "expo-linear-gradient";
// import { Color, FontFamily, FontSize } from "../../utils/globalStyles";

// const Dashboard = () => {
//   return (
//     <View style={styles.dashboardLightV60}>
//       <View style={styles.toolBar}>
//         <TextInput
//           style={styles.searchMarketplace2}
//           placeholder="Search Marketplace"
//           keyboardType="default"
//           placeholderTextColor="rgba(0, 0, 0, 0.51)"
//         />
//         <Image
//           style={[styles.sortIcon, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/sort.png")}
//         />
//         <Image
//           style={[styles.filterIcon, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//       </View>
//       <Image
//         style={[styles.item1Icon1, styles.iconLayout1]}
//         contentFit="cover"
//         source={require("../../assets/images/filter.png")}
//       />
//       <Image
//         style={[styles.item2Icon1, styles.iconLayout1]}
//         contentFit="cover"
//         source={require("../../assets/images/filter.png")}
//       />
//       <Image
//         style={styles.chat11}
//         contentFit="cover"
//         source={require("../../assets/images/chat.png")}
//       />
//       <View style={styles.dashboardLightV60Child} />
//       <View style={[styles.itemCard, styles.itemCardLayout1]}>
//         <View style={[styles.itemCardChild, styles.itemCardShadowBox]} />
//         <Text style={styles.monthsOld}>3 months old</Text>
//         <Image
//           style={[styles.item1Icon2, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//         <Text style={[styles.logitechKeyboard, styles.textClr]}>
//           Logitech keyboard
//         </Text>
//         <Text style={[styles.text, styles.textFlexBox]}>$24</Text>
//         <Image
//           style={styles.chat31}
//           contentFit="cover"
//           source={require("../../assets/images/chat.png")}
//         />
//         <Image
//           style={styles.saveInstagram1Icon}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}
//         />
//         <Image
//           style={[styles.saveInstagram21, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//       </View>
//       <View style={styles.itemCard1}>
//         <View style={styles.itemCardPosition} />
//         <Text style={[styles.monthsOld1, styles.monthsTypo]}>3 months old</Text>
//         <Image
//           style={[styles.item1Icon2, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//         <Text style={[styles.logitechKeyboard1, styles.arrows1IconPosition]}>
//           Logitech keyboard
//         </Text>
//         <Text style={[styles.text1, styles.textTypo]}>$24</Text>
//         <Image
//           style={[styles.chat311, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/chat.png")}
//         />
//         <Image
//           style={[styles.saveInstagram21, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//         <Image
//           style={styles.saveInstagram1Icon}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//       </View>
//       <View style={[styles.itemCard2, styles.itemCardLayout1]}>
//         <View style={[styles.itemCardInner, styles.itemCardShadowBox]} />
//         <Text style={[styles.monthsOld2, styles.monthsTypo]}>3 months old</Text>
//         <Image
//           style={[styles.item1Icon2, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//         <Text style={[styles.logitechKeyboard2, styles.logitechTypo]}>
//           Logitech keyboard
//         </Text>
//         <Text style={[styles.text2, styles.textTypo]}>$24</Text>
//         <Image
//           style={[styles.chat311, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/chat.png")}
//         />
//         <Image
//           style={[styles.saveInstagram21, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//         <Image
//           style={styles.saveInstagram1Icon}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//       </View>
//       <View style={[styles.itemCard3, styles.itemCardLayout1]}>
//         <View style={[styles.rectangleView, styles.itemCardShadowBox]} />
//         <Text style={[styles.monthsOld2, styles.monthsTypo]}>3 months old</Text>
//         <Image
//           style={[styles.item1Icon2, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//         <Text style={[styles.logitechKeyboard2, styles.logitechTypo]}>
//           Logitech keyboard
//         </Text>
//         <Text style={[styles.text2, styles.textTypo]}>$24</Text>
//         <Image
//           style={[styles.chat311, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/chat.png")}
//         />
//         <Image
//           style={[styles.saveInstagram21, styles.chat311Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//         <Image
//           style={styles.saveInstagram1Icon}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//       </View>
//       <Image
//         style={[styles.saveInstagram2Icon, styles.iconLayout2]}
//         contentFit="cover"
//         source={require("../../assets/images/save.png")}      />
//       <View style={[styles.itemCard4, styles.itemCardLayout]}>
//         <View style={[styles.itemCardChild1, styles.itemCardShadowBox]} />
//         <Text style={[styles.monthsOld2, styles.monthsTypo]}>3 months old</Text>
//         <Image
//           style={[styles.item1Icon2, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//         <Text style={[styles.logitechKeyboard2, styles.logitechTypo]}>
//           Logitech keyboard
//         </Text>
//         <Text style={[styles.text2, styles.textTypo]}>$24</Text>
//         <Image
//           style={[styles.chat314, styles.chat314Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/chat.png")}
//         />
//         <Image
//           style={[styles.saveInstagram1Icon4, styles.chat314Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//         <Image
//           style={styles.saveInstagram1Icon}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//       </View>
//       <View style={[styles.itemCard5, styles.itemCardLayout]}>
//         <View style={styles.itemCardPosition} />
//         <Text style={[styles.monthsOld2, styles.monthsTypo]}>3 months old</Text>
//         <Image
//           style={[styles.item1Icon2, styles.iconLayout2]}
//           contentFit="cover"
//           source={require("../../assets/images/filter.png")}
//         />
//         <Text style={[styles.logitechKeyboard2, styles.logitechTypo]}>
//           Logitech keyboard
//         </Text>
//         <Text style={[styles.text2, styles.textTypo]}>$24</Text>
//         <Image
//           style={[styles.chat314, styles.chat314Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/chat.png")}
//         />
//         <Image
//           style={styles.saveInstagram1Icon}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//         <Image
//           style={[styles.saveInstagram1Icon4, styles.chat314Layout]}
//           contentFit="cover"
//           source={require("../../assets/images/save.png")}        />
//       </View>
//       <LinearGradient
//         style={[
//           styles.dashboardLightV60Item,
//           styles.rectangleStatusbarPosition,
//         ]}
//         locations={[0, 1]}
//         colors={["rgba(255, 255, 255, 0)", "rgba(125, 125, 125, 0)"]}
//       />
//       <Image
//         style={styles.user1Icon}
//         contentFit="cover"
//         source={require("../../assets/images/user.png")}
//       />
//       <Image
//         style={[styles.add1Icon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/add.png")}
//       />
//       <Image
//         style={[styles.home21, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/home.png")}
//       />
//       <Image
//         style={[styles.search11, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/search_category.png")}
//       />
//       <Image
//         style={[styles.left1Icon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/filter.png")}
//       />
//       <ImageBackground
//         style={[styles.arrows1Icon, styles.arrows1IconPosition]}
//         resizeMode="cover"
//         source={require("../../assets/images/filter.png")}
//       />
//       <Image
//         style={[styles.send11, styles.sendLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/dm.png")}
//       />
//       <Image
//         style={[styles.send21, styles.sendLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/dm.png")}
//       />
//       <StatusBar
//         style={styles.rectangleStatusbarPosition}
//         barStyle="default"
//         translucent={true}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   logitechKeyboard2FlexBox: {
//     justifyContent: "center",
//     textAlign: "center",
//     position: "absolute",
//   },
//   iconLayout4: {
//     height: 190,
//     width: 172,
//     display: "none",
//     position: "absolute",
//   },
//   iconLayout2: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   iconLayout1: {
//     height: 176,
//     top: 739,
//     width: 172,
//     display: "none",
//     position: "absolute",
//   },
//   itemCardLayout1: {
//     height: 216,
//     width: 195,
//     left: 0,
//     position: "absolute",
//   },
//   itemCardShadowBox: {
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   textClr: {
//     color: Color.gray_100,
//     fontFamily: FontFamily.ubuntuRegular,
//     position: "absolute",
//   },
//   textFlexBox: {
//     width: "8.85%",
//     left: "5.21%",
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//   },
//   chat311Layout: {
//     bottom: "9.57%",
//     top: "83.94%",
//     width: "7.18%",
//     height: "6.48%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   monthsTypo: {
//     top: "85.78%",
//     color: Color.black,
//     fontSize: FontSize.size_3xs,
//     textAlign: "center",
//     fontFamily: FontFamily.ubuntuRegular,
//     position: "absolute",
//   },
//   arrows1IconPosition: {
//     left: 10,
//     position: "absolute",
//   },
//   textTypo: {
//     top: "91.28%",
//     color: Color.gray_100,
//     fontSize: FontSize.size_3xs,
//     textAlign: "center",
//     fontFamily: FontFamily.ubuntuRegular,
//     position: "absolute",
//   },
//   logitechTypo: {
//     top: "78.89%",
//     color: Color.gray_100,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.ubuntuRegular,
//   },
//   itemCardLayout: {
//     width: 196,
//     left: 197,
//     height: 216,
//     position: "absolute",
//   },
//   chat314Layout: {
//     width: "7.14%",
//     bottom: "9.57%",
//     top: "83.94%",
//     height: "6.48%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   rectangleStatusbarPosition: {
//     left: 0,
//     width: 393,
//     position: "absolute",
//   },
//   iconLayout: {
//     height: 24,
//     width: 24,
//     position: "absolute",
//   },
//   sendLayout: {
//     height: 20,
//     width: 20,
//     position: "absolute",
//   },
//   searchMarketplace1: {
//     height: "55.26%",
//     marginLeft: -80,
//     fontSize: 18,
//     color: "rgba(0, 0, 0, 0.51)",
//     width: 161,
//     alignItems: "center",
//     display: "flex",
//     justifyContent: "center",
//     textAlign: "center",
//     fontFamily: FontFamily.ubuntuRegular,
//     top: "0%",
//     left: "50%",
//   },
//   searchMarketplaceChild: {
//     top: "97.37%",
//     height: 0,
//     maxWidth: "100%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     overflow: "hidden",
//     width: "100%",
//   },
//   searchMarketplace: {
//     marginLeft: -152.5,
//     top: 81,
//     width: 306,
//     height: 38,
//     display: "none",
//     left: "50%",
//     position: "absolute",
//   },
//   item1Icon: {
//     top: 600,
//     left: 17,
//   },
//   item2Icon: {
//     top: 674,
//     left: 203,
//   },
//   searchMarketplace2: {
//     height: "88.37%",
//     width: "74.67%",
//     right: "25.33%",
//     bottom: "11.63%",
//     fontSize: 16,
//     left: "0%",
//     fontFamily: FontFamily.ubuntuRegular,
//     top: "0%",
//     position: "absolute",
//   },
//   sortIcon: {
//     right: "12.13%",
//     left: "80.67%",
//     bottom: "20.93%",
//     top: "23.26%",
//     width: "7.2%",
//     height: "55.81%",
//     maxHeight: "100%",
//   },
//   filterIcon: {
//     right: "0.14%",
//     left: "92.66%",
//     bottom: "20.93%",
//     top: "23.26%",
//     width: "7.2%",
//     height: "55.81%",
//     maxHeight: "100%",
//   },
//   toolBar: {
//     top: 61,
//     right: 18,
//     borderStyle: "solid",
//     borderColor: "#000",
//     borderLeftWidth: 1,
//     height: 31,
//     left: 17,
//     position: "absolute",
//   },
//   item1Icon1: {
//     left: 17,
//   },
//   item2Icon1: {
//     left: 205,
//   },
//   chat11: {
//     top: 303,
//     left: 165,
//     width: 18,
//     height: 18,
//     display: "none",
//     position: "absolute",
//   },
//   heart11: {
//     top: 151,
//     left: 174,
//     width: 12,
//     height: 12,
//     display: "none",
//     position: "absolute",
//   },
//   dashboardLightV60Child: {
//     top: -5,
//     left: -13,
//     width: 100,
//     height: 100,
//     display: "none",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   heart21: {
//     top: 330,
//     left: 135,
//     width: 16,
//     height: 16,
//     display: "none",
//     position: "absolute",
//   },
//   itemCardChild: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     top: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   monthsOld: {
//     top: "85.65%",
//     color: Color.black,
//     fontSize: FontSize.size_3xs,
//     left: "5.21%",
//     width: "31.25%",
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     fontFamily: FontFamily.ubuntuRegular,
//     position: "absolute",
//   },
//   item1Icon2: {
//     height: "76.61%",
//     top: "0.46%",
//     bottom: "22.94%",
//     left: "0%",
//     right: "0%",
//     maxHeight: "100%",
//     width: "100%",
//   },
//   logitechKeyboard: {
//     width: "62.5%",
//     top: "78.7%",
//     textAlign: "left",
//     fontSize: FontSize.size_xs,
//     color: Color.gray_100,
//     left: "5.21%",
//     alignItems: "center",
//     display: "flex",
//   },
//   text: {
//     top: "91.2%",
//     color: Color.gray_100,
//     fontFamily: FontFamily.ubuntuRegular,
//     position: "absolute",
//     fontSize: FontSize.size_3xs,
//     width: "8.85%",
//     textAlign: "center",
//   },
//   chat31: {
//     top: "83.8%",
//     right: "7.18%",
//     bottom: "9.72%",
//     left: "85.64%",
//     width: "7.18%",
//     height: "6.48%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   saveInstagram1Icon: {
//     height: "7.34%",
//     width: "8.51%",
//     right: "19.15%",
//     bottom: "8.72%",
//     left: "72.34%",
//     top: "83.94%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     display: "none",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   saveInstagram21: {
//     right: "20.48%",
//     left: "72.34%",
//   },
//   itemCard: {
//     borderRadius: 10,
//     top: 114,
//     height: 216,
//     width: 195,
//   },
//   itemCardPosition: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     top: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   monthsOld1: {
//     left: "5.21%",
//     width: "31.25%",
//     top: "85.78%",
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//   },
//   logitechKeyboard1: {
//     width: 112,
//     top: "78.89%",
//     color: Color.gray_100,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.ubuntuRegular,
//     textAlign: "left",
//   },
//   text1: {
//     width: "8.85%",
//     left: "5.21%",
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//   },
//   chat311: {
//     right: "7.71%",
//     left: "85.11%",
//   },
//   itemCard1: {
//     left: 197,
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     height: 216,
//     width: 195,
//     top: 114,
//     position: "absolute",
//   },
//   itemCardInner: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     top: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   monthsOld2: {
//     left: "2.64%",
//   },
//   logitechKeyboard2: {
//     width: "58.51%",
//     left: "0%",
//     justifyContent: "center",
//     textAlign: "center",
//     position: "absolute",
//     top: "78.89%",
//   },
//   text2: {
//     left: "2.13%",
//   },
//   itemCard2: {
//     top: 331,
//   },
//   rectangleView: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     top: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   itemCard3: {
//     top: 549,
//   },
//   saveInstagram2Icon: {
//     height: "2.35%",
//     width: "5.09%",
//     top: "95.42%",
//     right: "29.01%",
//     bottom: "2.23%",
//     left: "65.9%",
//   },
//   itemCardChild1: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     top: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   chat314: {
//     right: "7.75%",
//     left: "85.11%",
//   },
//   saveInstagram1Icon4: {
//     right: "20.52%",
//     left: "72.34%",
//   },
//   itemCard4: {
//     top: 550,
//   },
//   itemCard5: {
//     top: 331,
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   dashboardLightV60Item: {
//     top: 796,
//     height: 56,
//     backgroundColor: "transparent",
//     width: 393,
//   },
//   user1Icon: {
//     top: 806,
//     left: 329,
//     width: 32,
//     height: 32,
//     position: "absolute",
//   },
//   add1Icon: {
//     left: 41,
//     top: 811,
//     width: 24,
//   },
//   home21: {
//     left: 185,
//     top: 811,
//     width: 24,
//   },
//   search11: {
//     left: 113,
//     top: 811,
//     width: 24,
//   },
//   left1Icon: {
//     top: 18,
//     left: 7,
//     display: "none",
//   },
//   arrows1Icon: {
//     top: 15,
//     width: 30,
//     height: 30,
//   },
//   send11: {
//     top: 22,
//     left: 352,
//     display: "none",
//   },
//   send21: {
//     top: 20,
//     left: 355,
//   },
//   dashboardLightV60: {
//     backgroundColor: "#fff",
//     flex: 1,
//     height: 852,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default Dashboard;



/////////////////
////NEW CODE////
///////////////

import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Padding, Border, Color } from "../../utils/globalStyles";

const Dashboard = () => {
  return (
    <View style={[styles.dashboardLightV70, styles.item1IconLayout]}>
      <View style={[styles.toolbar, styles.toolbarFlexBox]}>
        <ImageBackground
          style={styles.arrows1Icon}
          resizeMode="x"
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
    </View>
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
