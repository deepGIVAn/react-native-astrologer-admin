import React, {useState, useEffect} from 'react';
import RouteName from './RouteName';
import {
  CustomSidebarMenu,
  AppHeader,
  CaLLicon,
  HeaderTopIcon,
} from '../components';
import {Colors} from '../utils';
import {DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {TabNavigator} from '../routes';
import {
  Chatscreen,
  SettingsScreen,
  HelpScreen,
  FAQScreen,
  ReviewsScreen,
  NotificationScreen,
  PaymentScreen,
  PaymentSuccessFully,
  BookAPoojaScreen,
} from '../screens';
import {Style} from '../styles';
import CreateAstrologer from '../screens/CreateAstrologer/CreateAstrologer';
import Blogs from '../screens/Blogs/Blogs';
import Astrologers from '../screens/Astrologers/Astrologers';
import ProfileRequests from '../screens/ProfileRequests/ProfileRequets';
import YearlyHoroscope from '../screens/YearlyHoroscope/YearlyHoroscope';
import MonthlyHoroscope from '../screens/MonthlyHoroscope/MonthlyHoroscope';
import AstroUniverseFAQ from '../screens/AstroUnifaqs/AstroUniverseFAQ';
import Purchases from '../screens/Purchases/Purchases';

const SideNavigator = props => {
  const Stack = createNativeStackNavigator();
  const {navigation} = props;
  const Drawer = createDrawerNavigator();
  const {detailsStore} = useSelector(state => state.DataReducer) || {
    detailsStore,
  };
  const {t} = useTranslation();
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors,
  };
  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.black_text_color,
    headerShadowVisible: false,
  };
  const [colorValue, setColorValue] = useState(MyTheme);
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != '') {
      Colors.theme_background = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors,
      };
      setColorValue(MyThemeNew);
    }
  }, [colorrdata, Colors]);
  return (
    <Drawer.Navigator
      theme={colorValue}
      drawerContent={props => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.TAB_NAVIGATOR} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN}
        component={Chatscreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Graham_Gooch')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
          headerRight: props => {
            return <CaLLicon {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN}
        component={HelpScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Help_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN}
        component={FAQScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('FAQ_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN}
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Notification_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN}
        component={ReviewsScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Reviews_Screen')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN}
        component={SettingsScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Setting_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />
      <Drawer.Screen
        name={RouteName.PAYMENT_SCREEN}
        component={PaymentScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={'Payment_Text'} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.CREATE_ASTROLOGER}
        component={CreateAstrologer}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle="Create Astrologer" />
          ),
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.BLOGS}
        component={Blogs}
        options={{
          headerTitle: props => <AppHeader {...props} headerTitle="Blogs" />,
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.ASTROLOGER_LIST}
        component={Astrologers}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle="Astrologers List" />
          ),
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.ASTROFAQ}
        component={AstroUniverseFAQ}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle="AstroUniverse FAQ" />
          ),
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.YEARLYHOROSCOPE}
        component={YearlyHoroscope}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle="Yearly Horoscope" />
          ),
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.MONTHLYHOROSCOPE}
        component={MonthlyHoroscope}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle="Monthly Horoscope" />
          ),
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.PURCHASES}
        component={Purchases}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle="Purchases" />
          ),
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
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />

      <Drawer.Screen
        name={RouteName.PAYMENT_SUCCESSFULLY}
        component={PaymentSuccessFully}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={'Paymnets_Title_1'} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
        }}
      />
      <Drawer.Screen
        name={RouteName.BOOK_A_POOJA_SCREEN}
        component={BookAPoojaScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={'Call_Title_22'} />
          ),
          ...HeaderArray,
          headerStyle: {backgroundColor: Colors.theme_background},
          headerRight: props => (
            <HeaderTopIcon
              Searchtrue={true}
              {...props}
              onPresSearch={() => navigation.navigate(RouteName.SEARCH_SCREEN)}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default SideNavigator;
