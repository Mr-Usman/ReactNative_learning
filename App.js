import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    ImageScreen,
    Counter,
    Colors: ColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
