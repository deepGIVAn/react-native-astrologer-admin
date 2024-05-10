import { Fonts, SH,SF, } from '../../utils';
import { StyleSheet } from 'react-native';

export default FilterStyle = (Colors) => StyleSheet.create({
  SortTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(25)
  },
  ApplyButtonView: {
    paddingHorizontal: SH(20),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor:Colors.white_text_color,
  }
});