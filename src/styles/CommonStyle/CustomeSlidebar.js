import {StyleSheet} from 'react-native';
import {Colors, Fonts, SH, SW, SF} from '../../utils';

export default StyleSheet.create({
  customslidebarmenu: {
    paddingHorizontal: SH(20),
    paddingTop: SH(10),
  },
  hometextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: SH(20),
  },
  adminstyle: {
    fontSize: SF(28),
    fontFamily: Fonts.Poppins_Bold,
    paddingLeft: SH(20),
    color: Colors.theme_modified,
  },
  flexrowset: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomColor: Colors.light_gray_text_color,
    // borderBottomWidth: SH(1.5),
    paddingVertical: SH(10),
    // borderStyle: 'dotted',
    width: SW(220),
  },
  settingandlogout: {
    paddingTop: SH(40),
  },
  logoimage: {
    width: SW(20),
    height: SH(20),
  },
  listimage: {
    resizeMode: 'contain',
    width: SW(25),
    height: SH(25),
  },
  adminlogo: {
    resizeMode: 'contain',
    width: SW(40),
    height: SH(40),
  },
});
