import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ProfileTabStyles, Style} from '../../../styles';
import {
  Button,
  ConfirmationAlert,
  Spacing,
  VectorIcon,
  ProfileAccountView,
} from '../../../components';
import images from '../../../index';
import {SH, SF} from '../../../utils';
import {RouteName} from '../../../routes';
import {useTranslation} from 'react-i18next';

const ProfileTab = props => {
  const {navigation} = props;
  const {t} = useTranslation();

  const CategoryData = [
    {
      id: 1,
      text: 'Call_Title_3',
      url: RouteName.BUY_MEBERSHIP,
    },
    {
      id: 2,
      text: 'Call_Title_4',
      url: RouteName.ORDER_HISTORTY_SCREEN,
    },
    {
      id: 3,
      text: 'Call_Title_5',
      url: RouteName.FREE_CUNDALI_SCREEN,
    },
    {
      id: 4,
      text: 'Call_Title_6',
      url: RouteName.ASTROMALL_SCREEN,
    },
    {
      id: 5,
      text: 'Call_Title_7',
      url: RouteName.SETTING_SCREEN,
    },
  ];
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const {Colors} = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);

  var alertdata = {
    logout: t('Are_You_Sure_logout'),
  };
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };
  return (
    <View style={Style.height100width100}>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(10)} />
            <View style={ProfileTabStyle.FlexViewProfile}>
              <View>
                <Image
                  source={images.Live_Astrologers_5}
                  resizeMode="contain"
                  style={ProfileTabStyle.ImageStyles}
                />
              </View>
              <View style={ProfileTabStyle.ProfileView}>
                <Text style={ProfileTabStyle.TextViewStyle}>
                  {t('Call_Title_8')}
                </Text>
                <Text style={ProfileTabStyle.TextViewStyleTwo}>
                  {t('Call_Title_9')}
                </Text>
                <Text style={ProfileTabStyle.TextViewStyleTwo}>
                  example@gmail.com
                </Text>
                <Text style={ProfileTabStyle.TextViewStyleTwo}>
                  +91 2443543543
                </Text>
                <Spacing space={SH(10)} />
                <Button
                  buttonStyle={ProfileTabStyle.ButtonStyle}
                  onPress={() =>
                    navigation.navigate(RouteName.EDIT_PROFILE_SCREEN)
                  }
                  buttonTextStyle={ProfileTabStyle.ButtonTextStyle}
                  title={t('Call_Title_10')}
                />
              </View>
            </View>
            <Spacing space={SH(35)} />
            <View style={ProfileTabStyle.FlexRowThreeView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteName.ORDER_HISTORTY_SCREEN)
                }
                style={ProfileTabStyle.FlexRowStyle}>
                <VectorIcon
                  icon="FontAwesome"
                  name="first-order"
                  size={SF(25)}
                />
                <Text style={ProfileTabStyle.FlexTextStyle}>
                  {t('Call_Title_11')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={ProfileTabStyle.FlexRowStyle}>
                <VectorIcon icon="MaterialIcons" name="report" size={SF(25)} />
                <Text style={ProfileTabStyle.FlexTextStyle}>
                  {t('Call_Title_12')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
                style={ProfileTabStyle.FlexRowStyle}>
                <VectorIcon icon="Feather" name="settings" size={SF(25)} />
                <Text style={ProfileTabStyle.FlexTextStyle}>
                  {t('Call_Title_13')}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacing space={SH(35)} />
            <View style={ProfileTabStyle.BgcolorViewWhite}>
              <FlatList
                data={CategoryData}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <ProfileAccountView
                    item={item}
                    onPress={() => navigation.navigate(item.url)}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <Spacing space={SH(20)} />
            <View style={ProfileTabStyle.FlexButtonvIEW}>
              <Button
                buttonStyle={ProfileTabStyle.SetButtonWidth50}
                title={t('Call_Title_13')}
              />
              <Button
                onPress={() => {
                  setAlertVisible(true);
                  setAlertMessage(alertdata.logout);
                }}
                buttonStyle={ProfileTabStyle.SetButtonWidth50}
                title={t('Log_Out')}
              />
            </View>
            <Spacing space={SH(20)} />
          </View>
        </View>
      </ScrollView>
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
        cancelButtonTextStatus={true}
      />
    </View>
  );
};
export default ProfileTab;
