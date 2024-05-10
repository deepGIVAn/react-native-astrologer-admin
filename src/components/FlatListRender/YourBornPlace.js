import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Spacing, Search } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";

const YourBornPlace = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);
    return (
        <View style={FreeCundliStyles.PaddingHorizontalNew}>
            <Spacing space={SH(40)} />
            <Text style={FreeCundliStyles.TextStyle}>{t("Kundali_Report_24")}</Text>
            <Spacing space={SH(20)} />
            <View style={FreeCundliStyles.SearchBortderstyle}>
                <Search placeholder={t("Kundali_Report_24")} />
            </View>
        </View>
    );
}
export default YourBornPlace;