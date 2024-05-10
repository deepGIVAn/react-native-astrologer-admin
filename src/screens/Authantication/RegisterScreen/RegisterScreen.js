import React, {useState, useMemo} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {
  Input,
  Button,
  CheckBox,
  Spacing,
  Countrycode,
  PasswordInput,
  VectorIcon,
} from '../../../components';
import {SH, SF} from '../../../utils';
import {RouteName} from '../../../routes';
import {Login, Style} from '../../../styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Register = props => {
  const {navigation} = props;
  const {Colors} = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const stateArray = {
    username: '',
    emailId: '',
    mobileNumber: '',
    toggleCheckBox: false,
  };
  const [state, setState] = useState(stateArray);
  const {t} = useTranslation();
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [TextInputPassword, setTextInputPassword] = useState('');
  const onChangeText = text => {
    if (text === 'TextInputPassword')
      setpasswordVisibility(!passwordVisibility);
  };
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={Logins.MinViewBgColor}>
      <LinearGradient
        colors={['#C54E3E', '#5F261E']}
        style={Logins.LoginViewMintop}>
        <Spacing space={SH(20)} />
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
          style={Logins.LoginViewMintopTwo}>
          <VectorIcon
            name="chevron-left"
            icon="Entypo"
            size={SF(29)}
            color={Colors.theme_background}
          />
        </TouchableOpacity>
        <Spacing space={SH(30)} />
        <Text style={Logins.LoginText}>Create Your</Text>
        <Text style={Logins.LoginText}>account</Text>
      </LinearGradient>
      <ScrollView contentContainerStyle={Style.ScrollViewStyle}>
        <Spacing space={SH(230)} />
        <View style={Logins.Container}>
          <View style={Style.MinViewContent}>
            <Input
              title={t('Enter_Your_Name')}
              //   placeholder={t('Enter_Your_Name')}
              onChangeText={text => setState({...state, username: text})}
              value={state.username}
            />
            <Spacing space={SH(20)} />
            <View style={Style.FlexRowPassword}>
              <View style={Style.InputViewWidth}>
                <View style={Style.CountryCodeIconCenter}>
                  <Countrycode />
                </View>
                <Input
                  title={t('Mobile_Number')}
                  //   placeholder={t('Mobile_Number')}
                  onChangeText={text =>
                    setState({...state, mobileNumber: text})
                  }
                  value={state.mobileNumber}
                  maxLength={10}
                  inputType="numeric"
                  placeholderTextColor={Colors.gray_text_color}
                  inputStyle={Style.PaddingLeftCountryInput}
                />
              </View>
            </View>
            <Spacing space={SH(20)} />
            <Input
              title={t('Enter_Your_Email')}
              //   placeholder={t('Enter_Your_Email')}
              onChangeText={text => setState({...state, emailId: text})}
              value={state.emailId}
              placeholderTextColor={Colors.gray_text_color}
            />
            <PasswordInput
              name={passwordVisibility ? 'eye-off' : 'eye'}
              label={t('Password_Text')}
              //   placeholder={t('Password_Text')}
              value={TextInputPassword}
              onPress={() => {
                onChangeText('TextInputPassword');
              }}
              onChangeText={text => setTextInputPassword(text)}
              secureTextEntry={passwordVisibility}
            />
            <Spacing space={SH(20)} />
            <View style={Logins.FlexRowChekBox}>
              <View style={Logins.CheckBoxView}>
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={Colors.theme_background}
                />
              </View>
              <Text style={Logins.SimpleTextStyle}>
                {t('I_Agree_Text')}{' '}
                <Text style={Logins.borderbottomTwo}>
                  <Text
                    style={Logins.bluecolor}
                    onPress={() =>
                      Linking.openURL('https://myaccount.google.com/')
                    }>
                    {' '}
                    {t('Terms_Of_Service')}{' '}
                  </Text>
                </Text>
                {t('And_text')}{' '}
                <Text
                  onPress={() =>
                    Linking.openURL('https://myaccount.google.com/')
                  }
                  style={Logins.bluecolor}>
                  {t('Privacy_Policy')}
                </Text>
              </Text>
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.ButtonView}>
              <Button
                title={t('Sign_Up_Text')}
                onPress={() =>
                  navigation.navigate(RouteName.REGIATRAION_SUCCESSFULL)
                }
              />
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.TopSpace}>
              <View style={Logins.AlredyAndLoginBox}>
                <Text style={Logins.MemberTextStyle}>
                  {t('Already_Member')}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                  <Text style={Logins.LoginScreenText}>{t('Login_Text')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Register;
