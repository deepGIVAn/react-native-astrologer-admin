import {StyleSheet} from 'react-native';
import {SW, SH, SF, widthPercent, Fonts} from '../../utils';

export default ProfileTabStyles = Colors =>
  StyleSheet.create({
    ImageStyles: {
      height: SW(130),
      width: SW(130),
      borderRadius: SH(10),
    },
    FlexViewProfile: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ProfileView: {
      paddingLeft: SH(30),
    },
    ButtonStyle: {
      height: SW(30),
      width: widthPercent(40),
      padding: 0,
    },
    ButtonTextStyle: {
      fontSize: SF(17),
    },
    TextViewStyle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(22),
    },
    TextViewStyleTwo: {
      color: Colors.gray_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(16),
    },
    FlexRowThreeView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: Colors.white_text_color,
      paddingHorizontal: SH(15),
      borderRadius: 10,
      paddingVertical: SH(10),
      borderWidth: 1,
      borderColor: Colors.theme_background,
    },
    FlexRowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    FlexTextStyle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(14),
      paddingLeft: SH(10),
    },
    MinViewBgwhite: {
      flexDirection: 'row',
      backgroundColor: Colors.white_text_color,
      paddingHorizontal: SH(10),
      borderBottomWidth: 0.5,
      paddingBottom: SH(10),
      borderBottomColor: Colors.light_gray_text_color,
      marginBottom: SH(10),
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: SH(10),
    },
    TextStyle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(17),
      paddingLeft: SH(10),
    },
    FlexButtonvIEW: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    SetButtonWidth50: {
      width: '85%',
    },
    BgcolorViewWhite: {
      backgroundColor: Colors.white_text_color,
      paddingTop: SH(10),
      borderRadius: SH(20),
    },
    heading: {
      marginHorizontal: 10,
      fontSize: SF(27),
      color: Colors.theme_background,
      fontFamily: Fonts.Poppins_Medium,
    },
    tabminview: {
      paddingTop: SH(24),
      backgroundColor: Colors.admin_background,
      marginHorizontal: 10,
      borderRadius: SH(10),
      paddingBottom: SH(20),
    },
    padH20: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: SW(20),
    },
    successbtn: {
      borderRadius: SH(10),
      paddingHorizontal: SH(30),
      backgroundColor: '#185A1A',
    },
    errorbtn: {
      paddingHorizontal: SH(30),
      borderRadius: SH(10),
      backgroundColor: '#C54E3E',
    },
    logoutStyel: {
      width: SW(200),
      height: SH(150),
      alignSelf: 'center',
    },
    centerBtn: {
      justifyContent: 'center',
    },
    ImageCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    ImageBorderRedus: {
      width: SW(100),
      borderRadius: 200,
      height: SW(100),
    },
  });
