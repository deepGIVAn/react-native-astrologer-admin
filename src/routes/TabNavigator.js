import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CallTab, ChatTab, Home, LiveScreen, Profile} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  CustomSidebarMenu,
  HeaderLeftMenuIcon,
  VectorIcon,
  AppHeader,
  HeaderTopIcon,
} from '../components';
import RouteName from '../routes/RouteName';
import {Colors, SH, SF} from '../utils';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerShadowVisible: false,
};
function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScsreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScsreenTabAll"
        options={{headerShown: false}}
        component={HomeScsreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator screenOptions="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack(props) {
  const {navigation} = props;
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={'Dashboard'} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => (
            <HeaderTopIcon
              ColorPickers={true}
              {...props}
              onPressPrice={() =>
                navigation.navigate(RouteName.ADD_MONEY_TO_WALLET)
              }
              Wallet={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ChatTabStackScreen(props) {
  const {navigation} = props;
  return (
    <Stack.Navigator initialRouteName="Offers">
      <Stack.Screen
        name="WishiList"
        component={ChatTab}
        options={{
          headerTitle: props => <AppHeader {...props} headerTitle={'Chat'} />,
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => (
            <HeaderTopIcon
              Filter={true}
              Price={true}
              {...props}
              onPressPrice={() =>
                navigation.navigate(RouteName.ADD_MONEY_TO_WALLET)
              }
              onPresSearch={() => navigation.navigate(RouteName.SEARCH_SCREEN)}
              Searchtrue={true}
              onPresFilter={() => navigation.navigate(RouteName.FILTER_SCREEN)}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function CallTabScreenStack(props) {
  const {navigation} = props;
  return (
    <Stack.Navigator initialRouteName="Checkout">
      <Stack.Screen
        name="Checkout"
        component={CallTab}
        options={{
          headerTitle: props => <AppHeader {...props} headerTitle={'Call'} />,
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => (
            <HeaderTopIcon
              Filter={true}
              Price={true}
              {...props}
              onPressPrice={() =>
                navigation.navigate(RouteName.ADD_MONEY_TO_WALLET)
              }
              onPresSearch={() => navigation.navigate(RouteName.SEARCH_SCREEN)}
              Searchtrue={true}
              onPresFilter={() => navigation.navigate(RouteName.FILTER_SCREEN)}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack(props) {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Profile_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll(props) {
  const {t} = useTranslation();
  const {navigation} = props;
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.theme_background,
        tabBarInactiveTintColor: Colors.gray_text_color,
        labeled: true,
        labelStyle: {},
        tabStyle: {
          height: SH(60),
          backgroundColor: Colors.white_text_color,
          paddingBottom: SH(10),
        },
      }}>
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t('Home_Titles_1'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="home"
              icon="AntDesign"
              size={SF(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.CHAT_TAB}
        component={ChatTabStackScreen}
        options={{
          tabBarLabel: t('Home_Titles_2'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="chatbox-ellipses-outline"
              icon="Ionicons"
              size={SF(25)}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={RouteName.LIVE_SCREEN}
        component={LiveScreen}
        options={{
          tabBarLabel: t('Home_Titles_3'),
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.LIVE_SCREEN)}>
              <VectorIcon
                color={
                  focused ? Colors.theme_background : Colors.gray_text_color
                }
                name="live-tv"
                icon="MaterialIcons"
                size={SF(25)}
              />
            </TouchableOpacity>
          ),
        }}
      /> */}
      <Tab.Screen
        name={RouteName.CALLS_TAB}
        component={CallTabScreenStack}
        options={{
          tabBarLabel: t('Home_Titles_4'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="phone-call"
              icon="Feather"
              size={SF(25)}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t('Profile_Text'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="user-circle"
              icon="FontAwesome"
              size={SF(20)}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
