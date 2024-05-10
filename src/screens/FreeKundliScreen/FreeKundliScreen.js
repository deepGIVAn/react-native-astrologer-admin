import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView } from "react-native";
import { Style, OrderHistoryStyle, FreeCundliStyle } from '../../styles';
import { Spacing, Search, Button } from "../../components";
import { SH, heightPercent, } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const FreeKundliScreen = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);


    return (
        <View style={OrderHistoryStyles.MinView}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewStyles}>
                <Spacing space={SH(20)} />
                <View style={FreeCundliStyles.SearchBortderstyle}>
                    <Search placeholder={t("Filter_Title_22")} />
                </View>
                <Spacing space={heightPercent(35)} />
                <Text style={FreeCundliStyles.ResultsNotText}>{t("Kundali_Report_25")}</Text>
            </ScrollView>
            <View style={FreeCundliStyles.PaddingHorizontal}>
                <Button onPress={() => navigation.navigate(RouteName.KUNDALI_PROGRESS_SCREEN)} title={t("Kundali_Report_26")} />
            </View>
        </View>
    );
};
export default FreeKundliScreen;