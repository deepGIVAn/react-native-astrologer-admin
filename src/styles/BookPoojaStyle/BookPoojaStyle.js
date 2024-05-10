import { Fonts, SH, SW, SF } from '../../utils';
import { StyleSheet } from 'react-native';

export default BookPoojaStyle = (Colors) => StyleSheet.create({

    MinViewImage: {
        width: '100%',
        height: SW(330),
        marginRight: SH(20),
    },
    BorderView: {
        borderWidth: 0.5,
        borderColor: Colors.light_gray_text_color,
        borderRadius: 15,
        paddingBottom: SH(20),
        marginBottom: SH(20),
    },
    ImageStyle: {
        height: SW(330),
        width: '100%',
        borderRadius: 15
    },
    PositionAsolute: {
        position: 'absolute',
        bottom: SH(10),
        width: '100%',
        paddingHorizontal: SH(15),
        borderTopWidth: 0.5,
        borderColor: Colors.light_gray_text_color,
        paddingTop: SH(10)
    },
    TextStyle: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(19),
    },
    SmallTextStyle: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(15),
        opacity: 0.7,
    },
    ButtonStyle: {
        backgroundColor: Colors.white_text_color,
        borderWidth: 1,
        borderColor: Colors.theme_background,
        height: SH(35),
        padding: SH(0),
        width: SW(120)
    },
    ButtonTextStyle: {
        color: Colors.theme_background,
        fontSize: SF(17)
    },
    FlexDirectionRowas: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: SH(10),
        paddingTop: SH(20)
    },
    DateTextStyle: {
        color: Colors.theme_background,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
    },
    AbsoluteStyle: {
        position: 'absolute',
        top: SH(20),
        right: SH(20),
        width: SW(50),
        height: SW(50),
        borderRadius: 300,
        borderWidth: 2,
        borderColor: Colors.theme_background
    },
    DetailesImageStyle: {
        width: '100%',
        height: SW(400),
        borderRadius: 15
    },
    AstroMallDetailes: {
        width: '100%',
        height: SW(300),
        borderRadius: 15
    },
    HoursTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18)
    },
    FlexRowSet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: SH(20)
    },
    DigitStyle: {
        backgroundColor: Colors.theme_background,
        borderColor: Colors.theme_background,
        borderWidth: 1
    },
    DigitStyleTwo: {
        color: Colors.white_text_color,
    },
    ColorTransparent: {
        color: 'transparent'
    },
    BorderWidth: {
        borderWidth: 1,
        borderRadius: 15,
        paddingBottom: SH(13),
        borderColor: Colors.light_gray_text_color,
    },
    AstroMallWidth: {
        borderRadius: 15,
        paddingBottom: SH(13),
        borderColor: Colors.light_gray_text_color,
    },
    ContentViewStyle: {
        paddingHorizontal: SH(10)
    },
    MinTitleTextStyle: {
        color: Colors.theme_background,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(22)
    },
    SmallTextStyleDetailes: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Italic,
        fontSize: SF(17)
    },
    UserImagestyle: {
        width: SW(60),
        height: SW(60),
        borderRadius: 300,
        borderColor: Colors.theme_background,
        BorderWidth: 1,
        marginRight: SH(10)
    },
    TopBorderView: {
        borderTopWidth: 1,
        borderColor: Colors.light_gray_text_color,
        marginTop: SH(17),
        paddingTop: SH(17)
    },
    FlexRowTextStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    NameTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(19),
        lineHeight: 23
    },
    BoldTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(21),
        lineHeight: 23
    },
    VIPtextStyle: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Italic,
        fontSize: SF(16)
    },
    DotView: {
        width: SW(7),
        height: SW(7),
        backgroundColor: Colors.theme_background,
        borderRadius: 300,
        marginRight: SH(10)
    },
    FlexRowPassword: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    BottomViewAbsolute: {
        position: 'absolute',
        width: '100%',
        paddingVertical: SH(10),
        paddingHorizontal: SH(10),
        backgroundColor: Colors.white_text_color,
        bottom: 0,
    },
    PostionAbsoluteTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white_text_color,
        left: SH(25),
        top: SH(35),
        position: 'absolute',
        width: SW(40),
        height: SW(40),
        zIndex: 24,
        borderRadius: 300
    },
    BackgriundWhite: {
        backgroundColor: Colors.white_text_color,
        padding: SH(20),
        borderRadius: 10
    },
    CloseButtonStyle: {
        position: 'absolute',
        right: SH(15),
        top: SH(15)
    },
    ModalImageStyle: {
        width: SW(80),
        height: SW(80),
        borderRadius: 300
    },
    CenterImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalUserName: {
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(18)
    },
    ModalTitleText: {
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(22)
    },
    SecondTitle: {
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(16)
    },
    FlexRowBuyNow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderTopWidth:1,
        borderColor:Colors.light_gray_text_color,
        paddingTop:SH(10),
    },
    BuyNowButton: {
        width: SW(100)
    },
    PriceTextStyle: {
        textDecorationLine: 'line-through',
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18)
    },
    Colorred: {
        color:'red',
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(22)
    },
    TendaysTextColor: {
        color:Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18)
    },
    ButtonViewShortWidth: {
        width:SW(120)
    }
});