import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Image, Text, ScrollView} from 'react-native';
import {ProfileTabStyles} from '../../styles';
import {RouteName} from '../../routes';
import {SH} from '../../utils';
import {
  // Button,
  Input,
  Spacing,
  ConfirmationAlert,
  PasswordInput,
} from '../../components';
import {useTranslation} from 'react-i18next';
import images from '../../index';
import CreateAstroProfile from '../../images/custom/create_astro_profile.png';
import {Button} from 'react-native-elements';

const CreateAstrologer = props => {
  const {navigation} = props;
  const {t} = useTranslation();

  const array = {
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    contact: '',
    address: '',
  };

  const [state, setState] = useState(array);
  const [alertOtpVisible, setAlertOtpVisible] = useState(false);
  const [alertOtpMessage, setAlertOtpMessage] = useState('');

  let alerOtptdata = {
    logout: 'Created Astrologer Successfully',
  };
  const OtpButton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  };

  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const onChangeText = text => {
    if (text === 'TextInputPassword')
      setpasswordVisibility(!passwordVisibility);
  };

  const {Colors} = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);

  return (
    <>
      <ScrollView>
        <Spacing />
        <Text style={ProfileTabStyle.heading}>CREATE ASTROLOGER</Text>
        <Spacing />
        <View style={ProfileTabStyle.tabminview}>
          <View style={ProfileTabStyle.ImageCenter}>
            <Image
              source={CreateAstroProfile}
              style={ProfileTabStyle.ImageBorderRedus}
            />
          </View>
          <Spacing space={SH(25)} />
          <View style={ProfileTabStyle.padH20}>
            <Input
              title={'Full Name'}
              // placeholder={t('Book_Pooja_Title_23')}
              value={state.fullname}
              onChangeText={text => setState({...state, fullname: text})}
            />
          </View>
          <View style={ProfileTabStyle.padH20}>
            <Input
              title={'Last Name'}
              // placeholder={t('Book_Pooja_Title_23')}
              value={state.fullname}
              onChangeText={text => setState({...state, fullname: text})}
            />
          </View>
          <View style={ProfileTabStyle.padH20}>
            <Input
              title={'Username'}
              // placeholder={t('Book_Pooja_Title_23')}
              value={state.fullname}
              onChangeText={text => setState({...state, fullname: text})}
            />
          </View>
          <View style={ProfileTabStyle.padH20}>
            <PasswordInput
              // style={}
              name={passwordVisibility ? 'eye-off' : 'eye'}
              label={'Password'}
              value={state.password}
              onPress={() => {
                onChangeText('TextInputPassword');
              }}
              onChangeText={text => setState({...state, password: text})}
              secureTextEntry={passwordVisibility}
            />
          </View>
          <View style={ProfileTabStyle.padH20}>
            <Input
              title={'Email Id'}
              // placeholder={t('Book_Pooja_Title_23')}
              value={state.fullname}
              onChangeText={text => setState({...state, fullname: text})}
            />
          </View>
          <View style={ProfileTabStyle.padH20}>
            <Input
              title={'Contact'}
              // placeholder={t('Book_Pooja_Title_23')}
              value={state.fullname}
              onChangeText={text => setState({...state, fullname: text})}
            />
          </View>
          <View style={ProfileTabStyle.padH20}>
            <Input
              title={'Address'}
              // placeholder={t('Book_Pooja_Title_23')}
              value={state.fullname}
              onChangeText={text => setState({...state, fullname: text})}
            />
          </View>
          <Spacing space={SH(25)} />
          <View style={ProfileTabStyle.padH20}>
            <Button
              buttonStyle={[ProfileTabStyle.errorbtn]}
              title={'Reset'}
              onPress={() => {
                // setAlertOtpVisible(true);
                // setAlertOtpMessage(alerOtptdata.logout);
              }}
            />
            <Button
              buttonStyle={[ProfileTabStyle.successbtn]}
              title={'Create'}
              onPress={() => {
                setAlertOtpVisible(true);
                setAlertOtpMessage(alerOtptdata.logout);
              }}
            />
          </View>
        </View>
        <Spacing />
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
      </ScrollView>
    </>
  );
};

export default CreateAstrologer;
