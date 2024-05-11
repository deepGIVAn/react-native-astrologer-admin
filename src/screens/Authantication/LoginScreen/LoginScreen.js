import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Container,
  Input,
  Spacing,
  PasswordInput,
  VectorIcon,
} from '../../../components';
import {RouteName} from '../../../routes';
import {Style, Login} from '../../../styles';
import {SH, SF} from '../../../utils';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import AdminLogo from '../../../images/custom/adminlogo.png';

const LoginScreen = props => {
  const {Colors} = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [TextInputPassword, setTextInputPassword] = useState('');
  const onChangeText = text => {
    if (text === 'TextInputPassword')
      setpasswordVisibility(!passwordVisibility);
  };
  const {t} = useTranslation();

  const OnRegisterPress = () => {
    navigation.navigate(RouteName.REGISTER_SCREEN);
  };

  return (
    <Container>
      <StatusBar backgroundColor={Colors.theme_background} />
      <View style={Logins.MinViewScreen}>
        {/* <LinearGradient
          colors={['#C54E3E', '#5F261E']}
          style={Logins.LoginViewMintop}>
          <Spacing space={SH(20)} />
          <TouchableOpacity
            style={Logins.LoginViewMintopTwo}
            onPress={() => navigation.navigate(RouteName.SELECT_LANGUAGE)}>
            <VectorIcon
              name="chevron-left"
              icon="Entypo"
              size={SF(29)}
              color={Colors.theme_background}
            />
          </TouchableOpacity>
          <Spacing space={SH(30)} />
          <Text style={Logins.LoginText}>Log Into</Text>
          <Text style={Logins.LoginText}>Your account</Text>
        </LinearGradient> */}
        {/* <View> */}
        {/* </View> */}
        <View style={Logins.Container}>
          <View style={Logins.MinViewContent}>
            <Spacing space={SH(100)} />
            <Image source={AdminLogo} style={Logins.AdminLogo} />

            {/* <Spacing space={SH(1)} /> */}
            <View style={Logins.InputSpaceView}>
              <Input
                title={t('Enter_Your_Email')}
                // placeholder={t('Mobile_Number')}
                onChangeText={value => setMobileNumber(value)}
                value={mobileNumber}
                inputType="email"
                maxLength={10}
                placeholderTextColor={Colors.gray_text_color}
              />
            </View>
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
            {/* <Spacing space={SH(10)} />
            <View style={Logins.ViewTextStyle}>
              <Text style={Logins.TextStyle}>
                {t('Dont_Have_Account')}{' '}
                <Text
                  style={Logins.registerTextStyle}
                  onPress={() => OnRegisterPress()}>
                  {' '}
                  {t('Register_Text')}
                </Text>
              </Text>
            </View> */}
            <Spacing space={SH(40)} />
            <View style={Logins.LoginButton}>
              <Button
                title={t('Login_Text')}
                onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)}
              />
            </View>
            {/* <Spacing space={SH(10)} />
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.FORGOT_PASSWORD)}>
              <Text style={Logins.ForgetPasswordStyles}>
                {t('Forgot_Password')}
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Container>
  );
};
export default LoginScreen;
