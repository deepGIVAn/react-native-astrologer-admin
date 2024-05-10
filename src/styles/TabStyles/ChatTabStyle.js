import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH } from '../../utils';

export default ChatTabStyle = (Colors) => StyleSheet.create({
  HomeSelectProparty: {
    paddingHorizontal: SH(25),
    backgroundColor: Colors.theme_background,
    borderWidth: SH(1),
    marginBottom: SH(10),
    borderColor: Colors.theme_background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(33),
    borderRadius: SH(300),
    marginRight: SH(10),
  },
  HomeSelectPropartytwo: {
    paddingHorizontal: SH(25),
    backgroundColor: Colors.white_text_color,
    borderWidth: SH(1),
    marginBottom: SH(10),
    borderColor: Colors.theme_background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(33),
    borderRadius: SH(300),
    marginRight: SH(10),
  },
  HomeSelectPropartyTYext: {
    textAlign: 'center',
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.white_text_color,
    paddingLeft: SH(10)
  },
  HomeSelectPropartyTYexttwo: {
    textAlign: 'center',
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_background,
    paddingLeft: SH(10)
  },
  Paddingleft: {
    paddingLeft: SH(12)
  },
  ImageStyleDiscount: {
    height: SW(16),
    width: SW(16),
  },
  LootieChat: {
    width: SW(240),
    height: SW(240),
  },
  ImageStyleas: {
    width: SW(70),
    height: SW(70),
    borderRadius: 300,
  },
  FlexStartRatings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  OrderTextStyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(13),
    color: Colors.gray_text_color,
    textAlign: 'left'
  },
  FlexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0.5,
    padding: SH(10),
    borderRadius: 10,
    borderColor: Colors.light_gray_text_color,
    marginBottom: SH(10),
    overflow: 'hidden'
  },
  ImageViewWidth: {
    width: '30%'
  },
  TextViewWidth: {
    width: '70%'
  },
  FlexRowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserNameTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(23)
  },
  SmallTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    opacity: 0.7,
  },
  ButtonStyle: {
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    borderColor: Colors.green_color,
    height: SH(45),
    padding: SH(0),
    width: SW(100)
  },
  ButtonTextStyle: {
    color: Colors.green_color,
    fontSize: SF(17)
  },
  WaitTextStyle: {
    color: Colors.red,
    fontSize: SF(13),
    fontFamily: Fonts.Poppins_Regular,
    textAlign: 'center'
  },
  WaitTextStyleGreen: {
    color: Colors.green_color,
    fontSize: SF(13),
    fontFamily: Fonts.Poppins_Regular,
    textAlign: 'center'
  },
  PostionAbsolute: {
    position: 'absolute',
    top: SH(0),
    left: SH(0),
    backgroundColor: Colors.theme_background,
    borderBottomRightRadius: 20,
    paddingHorizontal: SH(15),
  },
  PostionAbsoluteTwo: {
    position: 'absolute',
    top: SH(0),
    right: SH(0),
    backgroundColor: Colors.theme_background,
    paddingHorizontal: SH(15),
    borderBottomLeftRadius: 10
  },
  TextCebnter: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(8),
  },
  AstroMallText: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
  },
  ButtonStyleRed: {
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    borderColor: Colors.red,
    height: SH(45),
    padding: SH(0),
    width: SW(100)
  },
  ButtonTextStyleRed: {
    color: Colors.red,
    fontSize: SF(17)
  },
  SmallTextStyleTwo: {
    color: Colors.red,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  PriceTextSet: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    opacity: 0.7,
  },
  ImageBottomText: {
    color: Colors.red,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    paddingLeft: SH(20),
    opacity: 0.7
  },
  PostionAbsoluteBottom: {
    position: 'absolute',
    bottom: SH(0),
    width: '100%',
    backgroundColor: Colors.white_text_color,
    paddingVertical: SH(10),
    paddingHorizontal: SH(10),
    borderWidth: 1,
    borderTopColor: Colors.theme_background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth:0,
  },
  FlexRowTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65%'
  },
  PostionCallView: {
    position: 'absolute',
    bottom: SH(110),
    right: 0,
  },
  IconStyle: {
    height: SW(35),
    width: SW(35),
    borderRadius: 300,
    right: SH(-10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#676b70',
    opacity: 0.8,

  },
  TextStyleMinutes: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    backgroundColor: '#676b70',
    fontSize: SF(15),
    borderRadius: 300,
    paddingHorizontal: SH(10),
    paddingVertical: SH(5),
    right: SH(10)
  },
  ContainerStyle: {
    flex: 1
  },
  ButtonViewWidth30: {
    width: '30%'
  },
  BothFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  DailyPasstextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18)
  },
  DailyPasstextStyleTwo: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Italic,
    fontSize: SF(14)
  }
});