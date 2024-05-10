/* eslint-disable prettier/prettier */
import {Fonts, SH, SF, SW} from '../../utils';
import {StyleSheet} from 'react-native';

export default SwiperStyle = Colors =>
  StyleSheet.create({
    BottomViewBgcolor: {
      backgroundColor: Colors.theme_background,
      width: '100%',
      bottom: 0,
    },
    ScrollViewStyle: {
      height: 'auto',
      width: '100%',
    },
    SwiperMinView: {
      height: '100%',
      width: '100%',
      backgroundColor: Colors.white_text_color,
    },
    SwiperMinViewTwo: {
      backgroundColor: Colors.theme_background,
      height: 300,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    TitleStyles: {
      color: Colors.old_theme,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(28),
      fontWeight: '800',
      textAlign: 'center',
    },
    Textstyle: {
      color: Colors.white_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      fontWeight: '600',
      textAlign: 'center',
      opacity: 0.7,
    },
    NextTextStyle: {
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      fontWeight: '600',
      fontSize: SF(20),
      textAlign: 'center',
    },
    ButtonCircle: {
      top: SH(5),
    },
    AnimationViewStyles: {
      // width: SW(230),
      position: 'absolute',
    },
    AbsoluteView: {
      width: '100%',
      position: 'absolute',
      // top: SH(20),
      bottom: SH(110),
      paddingHorizontal: SH(15),
    },
    CenterView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    DotSwiperStyle: {
      width: SW(14),
      height: SH(16),
      borderRadius: 100,
      backgroundColor: Colors.light_gray_text_color,
      borderWidth: 2,
      borderColor: 'black',
      opacity: 0.5,
    },
    ActiveDotStyles: {
      width: SW(14),
      height: SH(16),
      borderRadius: 100,
      backgroundColor: Colors.white_text_color,
    },
  });
