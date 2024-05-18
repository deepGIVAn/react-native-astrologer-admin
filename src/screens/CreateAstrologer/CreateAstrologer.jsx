import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Image, Text} from 'react-native';
import {ProfileTabStyles} from '../../styles';
import {RouteName} from '../../routes';
import {SH} from '../../utils';
import {Button, Input, Spacing, ConfirmationAlert} from '../../components';
import {useTranslation} from 'react-i18next';
import images from '../../index';

const CreateAstrologer = props => {
  const {navigation} = props;
  const {t} = useTranslation();

  const array = {
    fullname: '',
    mobilenumber: '',
    email: '',
  };

  const [state, setState] = useState(array);
  const [alertOtpVisible, setAlertOtpVisible] = useState(false);
  const [alertOtpMessage, setAlertOtpMessage] = useState('');

  let alerOtptdata = {
    logout: t('Profile Update has been successful'),
  };
  const OtpButton = () => {
    navigation.navigate(RouteName.PROFILE_TAB);
  };

  const {Colors} = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);

  return (
    <>
      <Spacing />
      <View style={ProfileTabStyle.tabminview}>
        <View style={ProfileTabStyle.ImageCenter}>
          <Image
            source={images.Live_Astrologers_5}
            style={ProfileTabStyle.ImageBorderRedus}
          />
        </View>
        <Spacing space={SH(25)} />
        <View style={ProfileTabStyle.padH20}>
          <Input
            title={t('Book_Pooja_Title_22')}
            placeholder={t('Book_Pooja_Title_23')}
            value={state.fullname}
            onChangeText={text => setState({...state, fullname: text})}
          />
        </View>
        <View style={ProfileTabStyle.padH20}>
          <Input
            title={t('Book_Pooja_Title_24')}
            placeholder={'+91 2443543543'}
            keyboardType="numeric"
            value={state.mobilenumber}
            onChangeText={text => setState({...state, mobilenumber: text})}
          />
        </View>
        <View style={ProfileTabStyle.padH20}>
          <Input
            title={t('Book_Pooja_Title_25')}
            placeholder={'example@gmail.com'}
            autoCorrect={false}
            value={state.email}
            onChangeText={text => setState({...state, email: text})}
          />
        </View>
        <Spacing space={SH(25)} />
        <View style={ProfileTabStyle.padH20}>
          <Button
            title={t('Book_Pooja_Title_26')}
            onPress={() => {
              setAlertOtpVisible(true);
              setAlertOtpMessage(alerOtptdata.logout);
            }}
          />
        </View>
      </View>
      <ConfirmationAlert
        iconVisible={true}
        message={alertOtpMessage}
        modalVisible={alertOtpVisible}
        setModalVisible={setAlertOtpVisible}
        onPress={() => {
          setAlertOtpVisible(!alertOtpVisible), OtpButton();
        }}
        buttonText={t('Book_Pooja_Title_27')}
        source={images.loginsuccessful}
        Lottiewidthstyle={ProfileTabStyle.logoutStyel}
        buttonminview={ProfileTabStyle.centerBtn}
      />
    </>
  );
};

export default CreateAstrologer;
