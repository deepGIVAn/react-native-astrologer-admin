import React, { useState,useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SH } from '../../utils';
import { Spacing,DailyHoroscopeView } from '../../components';
import { OrderHistoryStyle, Style } from '../../styles';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native-virtualized-view';

const DailyHoroscope = (props) => {
    const { navigation } = props;
    const [tabshow, settabshow] = useState(2);
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);

    const DailyHoroscopedata = [
        {
            "id": 1,
            "text": 'Filter_Title_23',
            "IconName": 'heart',
            "Parsenteg": '100%',
            "paregraph": "Kundali_Report_28",
        },
        {
            "id": 2,
            "text": 'Kundali_Report_29',
            "IconName": 'markunread-mailbox',
            "paregraph": "Kundali_Report_27",
            "Parsenteg": '70%',
        },
        {
            "id": 3,
            "text": 'Kundali_Report_30',
            "IconName": 'money',
            "paregraph": "Kundali_Report_31",
            "Parsenteg": '50%',
        },
        {
            "id": 4,
            "text": 'Kundali_Report_30',
            "IconName": 'money',
            "paregraph": "Kundali_Report_31",
            "Parsenteg": '50%',
        },
        {
            "id": 5,
            "text": 'Kundali_Report_32',
            "IconName": 'add-to-photos',
            "paregraph": "Kundali_Report_33",
            "Parsenteg": '60%',
        },
        {
            "id": 6,
            "text": 'Kundali_Report_34',
            "IconName": 'card-travel',
            "paregraph": "Kundali_Report_35",
            "Parsenteg": '90%',
        },
    ]
    return (
        <View style={Style.height100width100}>
            <ScrollView>
                <View style={Style.Container}>
                    <View style={Style.MinViewContent}>
                        <Spacing space={SH(20)} />
                        <View style={OrderHistoryStyles.FlexRowBg}>
                            <TouchableOpacity onPress={() => settabshow('1')} style={OrderHistoryStyles.TabView}>
                                <Text style={tabshow == 1 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Kundali_Report_36")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => settabshow('2')} style={OrderHistoryStyles.TabView}>
                                <Text style={tabshow == 2 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Kundali_Report_37")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => settabshow('3')} style={OrderHistoryStyles.TabView}>
                                <Text style={tabshow == 3 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Kundali_Report_38")}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Spacing space={SH(20)} />
                            <Text style={OrderHistoryStyles.DailyHoroscopeText}>{t("Kundali_Report_39")}</Text>
                            <Spacing space={SH(20)} />
                            <FlatList
                                data={DailyHoroscopedata}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => (<DailyHoroscopeView
                                    item={item}
                                    index={index}
                                    onPress={() => navigation.navigate(RouteName.AUDIO_CALL_SCREEN)}
                                />)}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <Spacing space={SH(80)} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default DailyHoroscope;
