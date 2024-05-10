import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, Text } from "react-native";
import { SH } from '../../utils';
import { Spacing } from '../../components';
import { BuyMembershipStyle, Style } from '../../styles';
import images from '../../index';
import { Image } from "react-native-elements";
import { useTranslation } from "react-i18next";

const AstrotalksBlogDetailsScreen = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const BuyMembershipStyles = useMemo(() => BuyMembershipStyle(Colors), [Colors]);

    return (
        <View>
            <ScrollView>
                <View style={Style.Container}>
                    <View style={Style.MinViewContent}>
                        <Spacing space={SH(20)} />
                        <Text style={BuyMembershipStyles.TitleStyle}>{t("Daily_Horoscope_11")}</Text>
                        <Spacing space={SH(30)} />
                        <Image source={images.AstrotalkBlog_Details_1} resizeMode="contain" style={BuyMembershipStyles.ImageStyleView} />
                        <Spacing space={SH(30)} />
                        <Text style={BuyMembershipStyles.SmallTitleText}>{t("Daily_Horoscope_12")}</Text>
                        <Spacing space={SH(30)} />
                        <Text style={BuyMembershipStyles.TitleStyle}>{t("Daily_Horoscope_13")}</Text>
                        <Spacing space={SH(5)} />
                        <Text style={BuyMembershipStyles.SmallTitleText}>{t("Daily_Horoscope_14")}</Text>
                        <Spacing space={SH(30)} />
                        <Text style={BuyMembershipStyles.TitleStyle}>{t("Daily_Horoscope_15")}</Text>
                        <Spacing space={SH(5)} />
                        <Text style={BuyMembershipStyles.SmallTitleText}>{t("Daily_Horoscope_16")}</Text>
                        <Spacing space={SH(30)} />
                        <Text style={BuyMembershipStyles.TitleStyle}>{t("Daily_Horoscope_17")}</Text>
                        <Spacing space={SH(5)} />
                        <Text style={BuyMembershipStyles.SmallTitleText}>{t("Daily_Horoscope_18")}</Text>
                        <Spacing space={SH(80)} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default AstrotalksBlogDetailsScreen;
