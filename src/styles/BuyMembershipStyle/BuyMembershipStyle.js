import { Fonts, SH, SW, SF, widthPercent } from '../../utils';
import { StyleSheet } from 'react-native';

export default BuyMembershipStyle = (Colors) => StyleSheet.create({
    AstromallView: {
        width: '50%',
        marginBottom: SH(10)
    },
    AstromallImageStyle: {
        width: widthPercent(46),
        height: SW(200),
        borderRadius: 10,
        backgroundColor: Colors.black_text_color
    },
    ContentStyle: {
        paddingLeft: SH(10)
    },
    EpoojaTextStyle: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        bottom: SH(10),
    },
    PostionAbsolute: {
        position: 'absolute',
        backgroundColor: Colors.theme_background,
        paddingHorizontal: SH(20),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        zIndex: 34,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    SaleTextStyle: {
        color: Colors.white_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17)
    },
    TitleStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(22)
    },
    ImageStyleView: {
        width: '100%',
        height: SW(200),
        borderRadius: 10
    },
    SmallTitleText: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Italic,
        fontSize: SF(18),
        opacity: 0.7
    },
    MinViewText: {
        width: '100%',
        borderWidth: 1,
        marginBottom: SH(20),
        borderRadius: SH(10),
        paddingVertical: SH(10),
        paddingHorizontal: SH(20),
        borderColor: Colors.theme_background,
    },
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    LoveTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        paddingLeft: SH(10)
    },
    ParesantegText: {
        color: Colors.theme_background,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
    },
    FlexRowIconText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ParegraphTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Italic,
        fontSize: SF(17),
        opacity:0.7
    },
    ResultsTextStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        textAlign:'center'
      }
});