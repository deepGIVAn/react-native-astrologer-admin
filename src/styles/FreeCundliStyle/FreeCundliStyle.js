import { Fonts, SH, SW, SF, widthPercent } from '../../utils';
import { StyleSheet } from 'react-native';

export default FreeCundliStyle = (Colors) => StyleSheet.create({
  BorderView: {
    borderWidth: 1,
    borderRadius: SH(10),
    borderColor: Colors.theme_background,
    backgroundColor: 'red'
  },
  SearchBortderstyle: {
    borderWidth: SH(1),
    marginHorizontal: SH(20),
    borderRadius: SH(10),
    borderColor: Colors.theme_background
  },
  ResultsNotText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(25),
    textAlign: 'center',
    opacity: 0.7,
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(20)
  },
  StepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  ActiveStep: {
    height: SW(30),
    width: SW(30),
    backgroundColor: 'gray',
    borderRadius: 305,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  InactiveStep: {
    backgroundColor: 'gray',
    height: SW(30),
    width: SW(30),
    borderRadius: 305,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  HorizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ActiveLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
  },
  InActiveLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
  },
  StepWithLine: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ContentContainer: {
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  TextColorWhite: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18)
  },
  activeLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
  },
  completedLine: {
    height: SW(30),
    width: SW(30),
    backgroundColor: 'red',
  },
  inactiveLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  completedStep: {
    height: SW(30),
    width: SW(30),
    backgroundColor: 'green',
    borderRadius: 305,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inactiveStep: {
    height: SW(30),
    width: SW(30),
    backgroundColor: 'gray',
    borderRadius: 305,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BorderWidthLine: {
    width: widthPercent(20),
    height: SH(2),
    backgroundColor: Colors.red
  },
  FlexRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercent(20),
    paddingLeft: SH(20)
  },
  SingleLineOne: {
    width: widthPercent(20),
    height: SH(2),
    backgroundColor: 'gray',

  },
  SingleLineTwo: {
    width: widthPercent(20),
    height: SH(2),
    backgroundColor: 'green',
  },
  SingleLineTHeree: {
    width: widthPercent(20),
    height: SH(2),
    backgroundColor: 'gray',
  },
  TextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
    paddingLeft: SH(15),
  },
  PaddingHorizontalNew: {
    paddingHorizontal: SH(15)
  },
  Lottiewidthstyle: {
    height: SW(150),
    width: SW(150),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: SH(10)
  },
  FlexRowZender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  BackgroundStyleView: {
    width: SW(70),
    height: SW(70),
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    borderRadius: 300,
    borderColor: Colors.theme_background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BackgroundStyleViewTwo: {
    width: SW(70),
    height: SW(70),
    backgroundColor: Colors.theme_background,
    borderWidth: 1,
    borderRadius: 300,
    borderColor: Colors.theme_background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  MaleTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    textAlign: 'center',
    paddingTop: SH(10)
  },
  DateTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    paddingLeft: SH(15),
    opacity: 0.7
  },
  LeftRightPadding: {
    paddingHorizontal: SH(10)
  },
  FlexRowCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  FlexRowCheckBoxTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  ExactTime: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    opacity: 0.7
  },
  KundaliReportView: {
    width: '100%',
    paddingHorizontal: SH(15)
  },
  KundaliReportText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22)
  },
  DiscriptionTextStyle: {
    color: Colors.theme_background,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(19),
  },
  ParegraphTextSAtyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Italic,
    fontSize: SF(16),
  },
  TableHeaderStyle: {
    height: SH(40),
    backgroundColor: '#f1f8ff'
  },
  HeaderTextStyle: {
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color
  },
  RowTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(13),
    textAlign: 'center',
    paddingVertical: SH(10)
  },
  CenterText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.light_gray_text_color,
    paddingBottom: SH(10)
  },
  KundaliMatchingView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.light_gray_text_color,
    borderRadius: 10
  },
  AllSidePadding: {
    paddingHorizontal: SH(20),
  },
  InputTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
    textAlign: 'left',
    paddingLeft: SH(15)
  },
  FlexDateIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray_text_color,
    borderRadius: 5,
    paddingHorizontal: SH(20),
    padding: SH(10)
  },
  PaddingLeftRight: {
    paddingHorizontal: SH(15),
  },
  InputBorderNone: {
    borderWidth: 0,
  },
  ViewBorderWidth: {
    borderWidth: 1,
    height: SH(55),
    borderColor: Colors.gray_text_color,
    borderRadius: 5
  },
  Removebackground: {
    backgroundColor: Colors.black_text_color
  },
  LableStyle: {
    fontSize: SF(22),
    borderWidth: 1,
    borderColor: Colors.white_text_color,
    borderRadius: 10,
    width: SW(85),
    top: SH(-15),
    textAlign: 'center',
    color: Colors.white_text_color,
    paddingVertical: 4,
    height: SH(40)
  },
  CompatibilityTextStyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(23),
    textAlign: 'center'
  },
  BackgroundView: {
    backgroundColor: Colors.Settings_Colors_8,
  },
  DetailsTextStyle: {
    color: Colors.theme_background,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(25),
    textAlign: 'center'
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(20)
  },
  MinViewDeatails: {
    borderWidth: 0.5,
    borderColor: Colors.theme_background,
    paddingHorizontal: SH(20),
    marginBottom: SH(20),
    paddingVertical: SH(10),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  TitleStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(18),
    opacity: 0.7
  },
  ParegraphText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Italic,
    fontSize: SF(15),
    opacity: 0.7
  },
  CircularProgress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    left: SH(10)
  },
  TextViewWidth: {
    width: '65%'
  },
  CircularProgressText: {
    position: 'absolute',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18)
  },
  Colorwhite: {
    color: Colors.white_text_color,
  },
  Borderstyle: {
    borderWidth: 2,
    borderColor: '#c8e1ff',
  },
  PoastionAbsoluteButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white_text_color,
    zIndex: 435
  },
  SetHeightrWidth: {
    width: '100%',
    height: '100%'
  },
  ButtonPadding: {
    paddingHorizontal: SH(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
    paddingVertical: SH(10),
    width: '100%'
  },
  RecentlyTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18)
  },
  RecentlyTextStyleTwo: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Italic,
    fontSize: SF(18),
    textAlign: 'center'
  },
  FirstTabView: {
    backgroundColor: Colors.theme_background,
    borderRadius: 300,
    width: '50%',
    height: SH(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SecondTabView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: 300,
    width: '50%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  WalletTexttheame: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  WalletTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
});