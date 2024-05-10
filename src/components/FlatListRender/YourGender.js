import React, { useMemo,useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Spacing, VectorIcon } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH, SF } from '../../utils';
import { useTranslation } from "react-i18next";

const YourGender = (props) => {
    const [tabshow, settabshow] = useState(0);
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.PaddingHorizontalNew}>
            <Spacing space={SH(40)} />
            <Text style={FreeCundliStyles.TextStyle}>{t("Kundali_Report_13")}</Text>
            <Spacing space={SH(40)} />
            <View style={FreeCundliStyles.FlexRowZender}>
                <View>
                    <TouchableOpacity onPress={() => settabshow('1')} style={tabshow == 1 ? FreeCundliStyles.BackgroundStyleViewTwo : FreeCundliStyles.BackgroundStyleView}>
                        <VectorIcon icon="MaterialCommunityIcons" color={tabshow == 1 ? Colors.white_text_color : Colors.theme_background} name="gender-male" size={SF(40)} />
                    </TouchableOpacity>
                    <Text style={FreeCundliStyles.MaleTextStyle}>{t("Kundali_Report_14")}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => settabshow('2')} style={tabshow == 2 ? FreeCundliStyles.BackgroundStyleViewTwo : FreeCundliStyles.BackgroundStyleView}>
                        <VectorIcon icon="MaterialCommunityIcons" color={tabshow == 2 ? Colors.white_text_color : Colors.theme_background} name="gender-female" size={SF(40)} />
                    </TouchableOpacity>
                    <Text style={FreeCundliStyles.MaleTextStyle}>{t("Kundali_Report_15")}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => settabshow('3')} style={tabshow == 3 ? FreeCundliStyles.BackgroundStyleViewTwo : FreeCundliStyles.BackgroundStyleView}>
                        <VectorIcon icon="MaterialCommunityIcons" color={tabshow == 3 ? Colors.white_text_color : Colors.theme_background} name="gender-transgender" size={SF(40)} />
                    </TouchableOpacity>
                    <Text style={FreeCundliStyles.MaleTextStyle}>{t("Kundali_Report_16")}</Text>
                </View>
            </View>
        </View>
    );
}
export default YourGender;