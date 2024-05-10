import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Spacing, GeneralDataView } from '../../components';
import { FreeCundliStyle, OrderHistoryStyle } from '../../styles';
import { Table, Row, Rows } from 'react-native-table-component';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native-virtualized-view';

function KundaliReportScreen(props) {
    const [tabshow, settabshow] = useState(1);
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);
    const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);

    const GeneralData = [
        {
            "id": 1,
            "text": 'Kundali_Matching_17',
            "Paregraph": 'Kundali_Matching_18',
        },
        {
            "id": 2,
            "text": 'Kundali_Matching_19',
            "Paregraph": 'Kundali_Matching_20',
        },
        {
            "id": 3,
            "text": 'Kundali_Matching_21',
            "Paregraph": "Kundali_Matching_22",
        },
        {
            "id": 4,
            "text": 'Kundali_Matching_23',
            "Paregraph": 'Kundali_Matching_24',
        },
        {
            "id": 5,
            "text": 'Kundali_Matching_25',
            "Paregraph": 'Kundali_Matching_26',
        },
        {
            "id": 6,
            "text": 'Kundali_Matching_27',
            "Paregraph": 'Kundali_Matching_28',
        },
    ]
    const Remediesdata = [
        {
            "id": 1,
            "text": 'Kundali_Matching_29',
            "Paregraph": 'Kundali_Matching_30',
        },
        {
            "id": 2,
            "text": 'Kundali_Matching_31',
            "Paregraph": 'Kundali_Matching_32',
        },
        {
            "id": 3,
            "text": 'Kundali_Matching_33',
            "Paregraph": "Kundali_Matching_34",
        },
        {
            "id": 4,
            "text": 'Kundali_Matching_35',
            "Paregraph": 'Kundali_Matching_36',
        },
        {
            "id": 5,
            "text": 'Kundali_Matching_37',
            "Paregraph": 'Kundali_Matching_38',
        },
        {
            "id": 6,
            "text": 'Kundali_Matching_39',
            "Paregraph": 'Kundali_Matching_40',
        },
    ]
    const tableHead = [t("Kundali_Report_1"), t("Kundali_Report_2"), t("Kundali_Report_3"), t("Kundali_Report_4")];
    const tableData = [
        ['16-Feb-1996', '17-Apr-1996', t("Kundali_Report_5"), t("Kundali_Report_6")],
        ['16-Apr-1998', '06-Jun-2000', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['06-Jun-2000', '23-Jul-2002', t("Kundali_Report_8"), t("Setting_Text")],
        ['08-Jul-2003', '28-Aug-2005', t("Kundali_Report_5"), t("Kundali_Report_6")],
        ['16-Feb-2010', '20-Jan-2011', t("Kundali_Report_8"), t("Setting_Text")],
        ['34-Mar-2025', '16-Feb-2026', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['19-Nov-2026', '13-Aug-2027', t("Kundali_Report_8"), t("Setting_Text")],
        ['22-Dec-2029', '29-Mar-2032', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['14-Feb-2030', '22-Dec-2034', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['19-Mar-2032', '20-Nov-2036', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['16-Feb-2033', '10-Aug-2037', t("Kundali_Report_8"), t("Kundali_Report_6")],
        ['29-Dec-2034', '07-Sup-2039', t("Kundali_Report_5"), t("Kundali_Report_9")],
        ['24-Feb-2040', '14-Jan-2040', t("Kundali_Report_8"), t("Setting_Text")],
        ['19-Jun-2042', '19-Mar-2041', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['30-Mar-2044', '23-Jul-2045', t("Kundali_Report_7"), t("Kundali_Report_6")],
        ['21-Apr-2045', '27-Jun-2048', t("Kundali_Report_8"), t("Setting_Text")],
        ['16-Dec-2047', '30-Aug-2050', t("Kundali_Report_7"), t("Kundali_Report_9")],
        ['04-Nov-2048', '12-Oct-2051', t("Kundali_Report_5"), t("Kundali_Report_6")],
        // Add more rows as needed
    ];
    return (
        <View>
            {/* <AppHeader Iconname={true} headerTitle={"Kundali"} onPress={() => navigation.navigate(RouteName.FREE_CUNDALI_SCREEN)} /> */}
            <Spacing space={SH(30)} />
            <ScrollView>
                <View style={FreeCundliStyles.KundaliReportView}>
                    <Text style={FreeCundliStyles.KundaliReportText}>{t("Kundali_Matching_13")}</Text>
                    <Spacing space={SH(30)} />
                    <View style={OrderHistoryStyles.FlexRow}>
                        <TouchableOpacity onPress={() => settabshow('1')} style={OrderHistoryStyles.TabView}>
                            <Text style={tabshow == 1 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Kundali_Matching_14")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => settabshow('2')} style={OrderHistoryStyles.TabView}>
                            <Text style={tabshow == 2 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Kundali_Matching_15")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => settabshow('3')} style={OrderHistoryStyles.TabView}>
                            <Text style={tabshow == 3 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Kundali_Matching_16")}</Text>
                        </TouchableOpacity>
                    </View>
                    {tabshow == 1 ?
                        <View>
                            <FlatList
                                data={GeneralData}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (<GeneralDataView
                                    item={item}
                                />)}
                                keyExtractor={item => item.id}
                            />
                        </View> : null}
                    {tabshow == 2 ?
                        <View>
                            <Spacing space={SH(30)} />
                            <Table borderStyle={FreeCundliStyles.Borderstyle}>
                                <Row
                                    data={tableHead}
                                    style={FreeCundliStyles.TableHeaderStyle}
                                    textStyle={FreeCundliStyles.HeaderTextStyle}
                                />
                                <Rows data={tableData} textStyle={FreeCundliStyles.RowTextStyle} />
                            </Table>
                        </View>
                        :
                        <View>
                            <FlatList
                                data={Remediesdata}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (<GeneralDataView
                                    item={item}
                                />)}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    }
                </View>
                <Spacing space={SH(130)} />
            </ScrollView>
        </View >
    );
}

export default KundaliReportScreen;
