import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { Spacing, AppHeader, CompatibilityView } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH } from '../../utils';
import RNSpeedometer from 'react-native-speedometer';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native-virtualized-view';

function KundaliMatchingResults(props) {
    const [meterValue, setMeterValue] = useState(20);
    const { navigation } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    const CompatibilityData = [
        {
            "id": 1,
            "text": 'Filter_Title_23',
            "paregraph": "Filter_Title_24",
            "activecolor": Colors.Graf_Color_1,
            "value": 90,
            "digit": '4/5',
        },
        {
            "id": 2,
            "text": 'Filter_Title_25',
            "paregraph": "Filter_Title_26",
            "activecolor": Colors.Graf_Color_2,
            "value": 80,
            "digit": '7/9',
        },
        {
            "id": 3,
            "text": 'Filter_Title_27',
            "paregraph": "Filter_Title_28",
            "activecolor": Colors.Graf_Color_3,
            "value": 60,
            "digit": '6/7',
        },
        {
            "id": 4,
            "text": 'Filter_Title_29',
            "paregraph": "Filter_Title_30",
            "activecolor": Colors.Graf_Color_4,
            "value": 90,
            "digit": '8/9',
        },
        {
            "id": 5,
            "text": 'Filter_Title_31',
            "paregraph": "Filter_Title_32",
            "activecolor": Colors.Graf_Color_5,
            "value": 100,
            "digit": '7/7',
        },
    ]
    return (
        <View>
            <AppHeader Iconname={true} onPress={() => navigation.navigate(RouteName.KUNDALI_MATCHING_SCREEN)} rightView={FreeCundliStyles.BackgroundView} headerTitle={"Call_Title_40"} />
            <ScrollView>
                <ImageBackground borderBottomLeftRadius={SH(30)} borderBottomRightRadius={SH(30)} source={images.Background_Image}>
                    <Spacing space={SH(20)} />
                    <Text style={FreeCundliStyles.CompatibilityTextStyle}>{t("Filter_Title_33")}</Text>
                    <Spacing space={SH(10)} />
                    <View style={FreeCundliStyles.AllSidePadding}>
                        <RNSpeedometer
                            value={meterValue}
                            size={230}
                            innerCircleStyle={FreeCundliStyles.Removebackground}
                            labelNoteStyle={FreeCundliStyles.LableStyle}
                            minValue={0}
                            maxValue={25}
                            allowedDecimals={0}
                            labels={[
                                {
                                    name: '31 / 40',
                                    activeBarColor: Colors.Graf_Color_1,
                                },
                                {
                                    name: '31 / 40',
                                    activeBarColor: Colors.Graf_Color_2,
                                },
                                {
                                    name: '31 / 40',
                                    activeBarColor: Colors.Graf_Color_3,
                                },
                                {
                                    name: '31 / 40',
                                    activeBarColor: Colors.Graf_Color_4,
                                },
                                {
                                    name: '31 / 40',
                                    activeBarColor: Colors.Graf_Color_5,
                                },
                            ]}
                        />
                        <Spacing space={SH(95)} />
                    </View>
                </ImageBackground>
                <Spacing space={SH(25)} />
                <Text style={FreeCundliStyles.DetailsTextStyle}>{t("Filter_Title_34")}</Text>
                <Spacing space={SH(30)} />
                <View style={FreeCundliStyles.PaddingHorizontal}>
                    <FlatList
                        data={CompatibilityData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<CompatibilityView
                            item={item}
                        />)}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Spacing space={SH(100)} />
            </ScrollView>
        </View>
    );
}
export default KundaliMatchingResults;
