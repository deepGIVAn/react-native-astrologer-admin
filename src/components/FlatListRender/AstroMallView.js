import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BuyMembershipStyle, HomeTabStyle } from '../../styles';
import { LinearGradient } from '../../components';

const AstroMallView = (props) => {
    const { t } = useTranslation();
    const { item, index, onPress } = props;

    const { Colors } = useTheme();
    const BuyMembershipStyles = useMemo(() => BuyMembershipStyle(Colors), [Colors]);
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()} style={BuyMembershipStyles.AstromallView}>
            {index === 0 || index === 1 || index === 4 || index === 6 ?
                <View style={BuyMembershipStyles.PostionAbsolute}>
                    <Text style={BuyMembershipStyles.SaleTextStyle}>{t("Astromall_Title_13")}</Text>
                </View> : null}
            <Image source={item.ImageSet} resizeMode="contain" style={BuyMembershipStyles.AstromallImageStyle} />
            <LinearGradient
                colors={[Colors.Liner_Color_1, Colors.Liner_Color_2]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={HomeTabStyles.AstromallView}>
            </LinearGradient>
            <Text style={BuyMembershipStyles.EpoojaTextStyle}>{t(item.text)}</Text>
        </TouchableOpacity>
    );
}
export default AstroMallView;