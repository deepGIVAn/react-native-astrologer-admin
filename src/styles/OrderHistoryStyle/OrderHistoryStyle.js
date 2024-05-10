import { Fonts, SH, SW, SF } from '../../utils';
import { StyleSheet } from 'react-native';

export default OrderHistoryStyle = (Colors) => StyleSheet.create({
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: SH(20)
    },
    FlexRowBg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        borderColor: Colors.theme_background,
    },
    FlexRowBgMatching: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        borderColor: Colors.theme_background,
        borderWidth: 1,
        height: SH(50),
        borderRadius:200
    },
    WalletTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        paddingBottom: SH(5)
    },
    DailyText: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        textAlign: 'center'
    },
    WalletTexttheame: {
        color: Colors.theme_background,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        borderBottomWidth: 2,
        borderColor: Colors.theme_background,
        paddingBottom: SH(5)
    },

    WalletViewStyle: {
        paddingHorizontal: SH(20)
    },
    AvilableBlance: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17),
        textAlign:'left'
    },
    MoneyTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(28)
    },
    FlexRowMoney: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ButtonViewWidth: {
        width: SW(130)
    },
    TransactionView: {
        width: '48%',
        backgroundColor: Colors.white_text_color,
        padding: SH(7),
        borderRadius: 310,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.theme_background
    },
    TransactionViewSecond: {
        width: '48%',
        backgroundColor: Colors.theme_background,
        padding: SH(7),
        borderRadius: 310,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TransctionText: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16)
    },
    TransctionTextColor: {
        color: Colors.theme_background,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16)
    },
    MinView: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.white_text_color
    },
    MinViewTwo: {
        height: '100%',
        width: '100%',
        paddingLeft: SH(20)
    },
    NodataAvilable: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        textAlign: 'center',
        fontSize: SF(24)
    },
    SecondSmallText: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.Poppins_Medium,
        textAlign: 'center',
        fontSize: SF(18)
    },
    MinViewMoney: {
        width: '45%',
        borderWidth: 1,
        marginRight: SH(15),
        marginBottom: SH(15),
        padding: SH(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: Colors.light_gray_text_color
    },
    MediumTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18)
    },
    PostionAbsolute: {
        position: 'absolute',
        top: SH(20),
        left: SH(-40),
        backgroundColor: Colors.theme_background,
        paddingHorizontal: SH(45),
        transform: [{ rotate: '-55deg' }],
    },
    TextCebnter: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(8)
    },
    DailyPassView: {
        borderWidth: 1,
        borderColor: Colors.theme_background,
        borderRadius: 10,
        paddingHorizontal: SH(20),
        paddingVertical: SH(10),
    },
    PaddingHorizontal: {
        paddingHorizontal: SH(10)
    },
    DailyPassTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        paddingLeft: SH(20),
        top: SH(3)
    },
    FlexViewSet: {
        flexDirection: 'row',
    },
    DailyHoroscopeText: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(22),
    },
    SearchBortderstyle: {
        borderWidth: SH(1),
        marginHorizontal: SH(20),
        borderRadius: SH(10),
        borderColor: Colors.theme_background
    },

});