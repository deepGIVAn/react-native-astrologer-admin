
import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW } from '../../utils';

export default Otpstyle = (Colors) => StyleSheet.create({
  ParegraPhotpBottom: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    marginBottom: '8%',
    paddingRight: SH(10),
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },
  MinViewSecond: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  MinFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  ScrollViewStyle: {
    height: 'auto',
    width: '100%',
  },
  paregraph: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    textAlign: 'center',
    opacity: 0.7
  },
  ResendTextBold: {
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    color: Colors.theme_background,
  },
  FlexRowText: {
    flexDirection: 'row',
  },
  EnterSixDigitText: {
    fontSize: SF(30),
    textAlign: 'center',
    paddingBottom: SH(15),
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  OtpViewStyles: {
    width: '80%',
    height: SH(100),
    marginHorizontal: SH(30)
  },
  CodeInputStyles: {
    width: SW(50),
    height: SW(51),
    padding: SH(0),
    borderWidth: 2.5,
    fontSize: SF(28),
    fontWeight: '700',
    borderRadius: 7,
    color: Colors.theme_background,
    borderColor: Colors.theme_background
  },
  buttonotp: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  BackgroundViewWhite: {
    backgroundColor: Colors.white_text_color,
    borderRadius: 300,
    height: SW(200),
    width: SW(200),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  Lottiewidthstyle: {
    height: SW(220),
    width: SW(220),
  },
  CenterAnimation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  CustomeInputView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SH(20)
  },
  CustomeInput: {
    width: SW(40),
    height: SW(40),
    borderWidth: 2,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: SF(18),
    padding: SH(0),
    paddingTop: SH(4),
    fontFamily: Fonts.Poppins_Medium
  },
});
