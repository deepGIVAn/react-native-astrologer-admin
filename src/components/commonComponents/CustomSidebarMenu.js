import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Sidemenu} from '../../styles';
import {RouteName} from '../../routes';
import {ConfirmationAlert, VectorIcon} from '../../components';
import {Colors, SF} from '../../utils';
import {useTranslation} from 'react-i18next';

const CustomSidebarMenu = props => {
  const {t} = useTranslation();
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    logout: t('Are_You_Sure_logout'),
  };
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };
  const Onpressfunction = e => {
    navigation.toggleDrawer();
    navigation.navigate(e);
  };

  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <VectorIcon
            icon="Feather"
            size={SF(19)}
            name="home"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_21')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.BOOK_A_POOJA_SCREEN)}>
          <VectorIcon
            icon="FontAwesome"
            size={SF(23)}
            name="fire"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_22')}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.LIVE_SCREEN)}>
          <VectorIcon
            icon="Fontisto"
            size={SF(23)}
            name="livestream"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_23')}</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ORDER_HISTORTY_SCREEN)}>
          <VectorIcon
            icon="Feather"
            size={SF(23)}
            name="list"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_24')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ORDER_HISTORTY_SCREEN)}>
          <VectorIcon
            icon="AntDesign"
            size={SF(23)}
            name="wallet"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_25')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.BUY_MEBERSHIP)}>
          <VectorIcon
            icon="FontAwesome5"
            size={SF(23)}
            name="crown"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_26')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.PAYMENT_SCREEN)}>
          <VectorIcon
            icon="MaterialIcons"
            size={SF(23)}
            name="payment"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.PAYMENT_SUCCESSFULLY)}>
          <VectorIcon
            icon="MaterialIcons"
            size={SF(23)}
            name="payments"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>Payment Successful</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ASTROMALL_SCREEN)}>
          <VectorIcon
            icon="Entypo"
            size={SF(23)}
            name="shopping-bag"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_27')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.Astrotalks_BLOG_SCREEN)}>
          <VectorIcon
            icon="FontAwesome5"
            size={SF(23)}
            name="blog"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_28')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.CHAT_TAB)}>
          <VectorIcon
            icon="AntDesign"
            size={SF(23)}
            name="wechat"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_29')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.CALLS_TAB)}>
          <VectorIcon
            icon="Feather"
            name="phone-call"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
            size={SF(20)}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_30')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.DAILY_HOROSCOPE)}>
          <VectorIcon
            icon="Fontisto"
            name="dailymotion"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
            size={SF(20)}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_31')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.FREE_CUNDALI_SCREEN)}>
          <VectorIcon
            icon="Entypo"
            name="500px-with-circle"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
            size={SF(20)}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_32')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.KUNDALI_MATCHING_SCREEN)}>
          <VectorIcon
            icon="MaterialCommunityIcons"
            name="human-male-girl"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
            size={SF(20)}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_33')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.AUDIO_CALL_SCREEN)}>
          <VectorIcon
            icon="Feather"
            name="phone-call"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
            size={SF(20)}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_34')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ADD_MONEY_TO_WALLET)}>
          <VectorIcon
            icon="FontAwesome"
            name="money"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
            size={SF(20)}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_35')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.SETTING_SCREEN)}>
          <VectorIcon
            icon="AntDesign"
            size={SF(19)}
            name="setting"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Setting_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.FAQ_SCREEN)}>
          <VectorIcon
            icon="Entypo"
            size={SF(19)}
            name="help"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('FAQ_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.REVIEWS_SCREEN)}>
          <VectorIcon
            icon="Entypo"
            size={SF(19)}
            name="star"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Reviews_Screen')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.NOTIFICTION_SCREEN)}>
          <VectorIcon
            icon="Ionicons"
            size={SF(19)}
            name="notifications"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Notification_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.PROFILE_TAB)}>
          <VectorIcon
            icon="FontAwesome"
            size={SF(19)}
            name="user-circle"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Call_Title_36')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.HELP_SCREEN)}>
          <VectorIcon
            icon="FontAwesome5"
            size={SF(19)}
            name="hands-helping"
            style={Sidemenu.logoimage}
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t('Help_Text')}</Text>
        </TouchableOpacity>
        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => {
              setAlertVisible(true);
              setAlertMessage(alertdata.logout);
            }}>
            <VectorIcon
              icon="Entypo"
              name="log-out"
              color={Colors.theme_background}
              size={SF(23)}
            />
            <Text style={Sidemenu.hometextstyle}>{t('Log_Out')}</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => {
            setAlertVisible(!alertVisible), onoknutton();
          }}
          cancelButtonText={t('Cancel_Button')}
          buttonText={t('Ok')}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;
