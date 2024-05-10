import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Spacing, Button, Search, BoysDetails } from '../../components';
import { FreeCundliStyle, Style, HomeTabStyle, OrderHistoryStyle } from '../../styles';
import { SH } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

function KundaliMatchingScreen(props) {
    const { navigation } = props;
    const [tabshow, settabshow] = useState(2);
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
    const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.SetHeightrWidth}>
            <Spacing space={SH(30)} />
            <ScrollView contentContainerStyle={Style.ScrollViewStyles}>
                <View style={FreeCundliStyles.AllSidePadding}>
                    <View style={OrderHistoryStyles.FlexRowBgMatching}>
                        <TouchableOpacity onPress={() => settabshow('1')} style={tabshow == 1 ? FreeCundliStyles.FirstTabView : FreeCundliStyles.SecondTabView}>
                            <Text style={tabshow == 1 ? FreeCundliStyles.WalletTexttheame : FreeCundliStyles.WalletTextStyle}>{t("Kundali_Matching_1")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => settabshow('2')} style={tabshow == 2 ? FreeCundliStyles.FirstTabView : FreeCundliStyles.SecondTabView}>
                            <Text style={tabshow == 2 ? FreeCundliStyles.WalletTexttheame : FreeCundliStyles.WalletTextStyle}>{t("Kundali_Matching_2")}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {tabshow == 1 ?
                    <View>
                        <Spacing space={SH(35)} />
                        <TouchableOpacity style={HomeTabStyles.SearchBortderstyle}>
                            <Search placeholder={t("Kundali_Matching_3")} />
                        </TouchableOpacity>
                        <View style={FreeCundliStyles.AllSidePadding}>
                            <Spacing space={SH(15)} />
                            <Text style={FreeCundliStyles.RecentlyTextStyle}>{t("Kundali_Matching_4")}</Text>
                            <Spacing space={SH(245)} />
                            <Text style={FreeCundliStyles.RecentlyTextStyleTwo}>{t("Kundali_Matching_5")}</Text>
                        </View>
                    </View> :
                    <View style={FreeCundliStyles.AllSidePadding}>
                        <Spacing space={SH(30)} />
                        <BoysDetails title={t("Kundali_Matching_6")} />
                        <Spacing space={SH(30)} />
                        <BoysDetails title={t("Kundali_Matching_7")} />
                        <Spacing space={SH(70)} />
                    </View>}
            </ScrollView>
            <View style={FreeCundliStyles.ButtonPadding}>
                <View style={FreeCundliStyles.PoastionAbsoluteButton}>
                    <Button onPress={() => navigation.navigate(RouteName.KUNDALI_MATCHING_RESULTS_SCREEN)} title={t("Kundali_Matching_8")} />
                </View>
            </View>
        </View>
    );
}
export default KundaliMatchingScreen;
