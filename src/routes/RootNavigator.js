import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {Colors} from '../utils';
import {HeaderTitle} from '../components';
import {RouteName, SideNavigator} from '../routes';
import {
  LoginScreen,
  RegisterScreen,
  OtpVeryfiveScreen,
  SplashScreen,
  RegistrationSuccessful,
  AstrotalkBlogScreen,
  Swiperscreen,
  TranslationScreen,
  ForgotPassword,
  AstrotalkBlogDetailsScreen,
  EditProfileScreen,
  AudioCallScreen,
  DailyHoroscope,
  FreeKundliScreen,
  KundaliProgressScreen,
  KundaliReportScreen,
  KundaliMatchingScreen,
  KundaliMatchingResults,
  BuyMembership,
  AstroMallScreen,
  AddMoneyToWallet,
  SearchScreen,
  FilterScreen,
  BookPoojaDetailScreen,
  AstroMallDetailsScreen,
  AstroMallPanditListScreen,
} from '../screens';
import {OrderHistory} from '../screens/OrderHistory';
import {HeaderTopIcon} from '../components';

const RootNavigator = props => {
  const Stack = createNativeStackNavigator();
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors,
  };
  const [colorValue, setColorValue] = useState(MyTheme);
  useEffect(() => {
    if (Colors.length !== 0 && colorrdata !== '') {
      Colors.theme_background = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors,
      };
      setColorValue(MyThemeNew);
    }
  }, [colorrdata, Colors]);

  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.white_text_color,
    headerShadowVisible: false,
  };

  const renderScreens = () => {
    return (
      <>
        <Stack.Screen name={RouteName.SPLSH} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={RouteName.REGISTER_SCREEN}
          component={RegisterScreen}
        />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen
          name={RouteName.REGIATRAION_SUCCESSFULL}
          component={RegistrationSuccessful}
        />
        <Stack.Screen
          name={RouteName.OTP_VERYFY_SCREEN}
          component={OtpVeryfiveScreen}
        />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen
          name={RouteName.SELECT_LANGUAGE}
          component={TranslationScreen}
        />
        <Stack.Screen
          name={RouteName.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={RouteName.EDIT_PROFILE_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_38" />
            ),
          }}
          component={EditProfileScreen}
        />
        <Stack.Screen
          name={RouteName.AUDIO_CALL_SCREEN}
          component={AudioCallScreen}
        />

        <Stack.Screen
          name={RouteName.Astrotalks_BLOG_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_28" />
            ),
            headerRight: props => (
              <HeaderTopIcon
                Searchtrue={true}
                {...props}
                onPresSearch={() =>
                  navigation.navigate(RouteName.SEARCH_SCREEN)
                }
              />
            ),
          }}
          component={AstrotalkBlogScreen}
        />
        <Stack.Screen
          name={RouteName.Astrotalks_BLOG_DETAILS_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_28" />
            ),
          }}
          component={AstrotalkBlogDetailsScreen}
        />
        <Stack.Screen
          name={RouteName.DAILY_HOROSCOPE}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_31" />
            ),
          }}
          component={DailyHoroscope}
        />
        <Stack.Screen
          name={RouteName.FREE_CUNDALI_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_39" />
            ),
          }}
          component={FreeKundliScreen}
        />
        <Stack.Screen
          name={RouteName.KUNDALI_PROGRESS_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_39" />
            ),
          }}
          component={KundaliProgressScreen}
        />
        <Stack.Screen
          name={RouteName.KUNDALI_REPORT_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_39" />
            ),
          }}
          component={KundaliReportScreen}
        />
        <Stack.Screen
          name={RouteName.ORDER_HISTORTY_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_24" />
            ),
          }}
          component={OrderHistory}
        />
        <Stack.Screen
          name={RouteName.KUNDALI_MATCHING_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_40" />
            ),
          }}
          component={KundaliMatchingScreen}
        />
        <Stack.Screen
          name={RouteName.BOOK_POOJA_DETAILES_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_41" />
            ),
          }}
          component={BookPoojaDetailScreen}
        />
        <Stack.Screen
          name={RouteName.KUNDALI_MATCHING_RESULTS_SCREEN}
          component={KundaliMatchingResults}
        />
        <Stack.Screen
          name={RouteName.BUY_MEBERSHIP}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_3" />
            ),
          }}
          component={BuyMembership}
        />
        <Stack.Screen
          name={RouteName.ASTROMALL_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_27" />
            ),
          }}
          component={AstroMallScreen}
        />
        <Stack.Screen
          name={RouteName.ADD_MONEY_TO_WALLET}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_35" />
            ),
          }}
          component={AddMoneyToWallet}
        />
        <Stack.Screen
          name={RouteName.SEARCH_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Filter_Title_22" />
            ),
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name={RouteName.FILTER_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Call_Title_42" />
            ),
          }}
          component={FilterScreen}
        />
        <Stack.Screen
          name={RouteName.ASTROMALL_DETAILS_SCREEN}
          component={AstroMallDetailsScreen}
        />
        <Stack.Screen
          name={RouteName.ASTROMALL_PANDITLISTING_SCREEN}
          options={{
            ...HeaderArray,
            headerStyle: {backgroundColor: Colors.theme_background},
            headerTitle: props => (
              <HeaderTitle {...props} Title="Daily_Horoscope_37" />
            ),
          }}
          component={AstroMallPanditListScreen}
        />
      </>
    );
  };

  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
