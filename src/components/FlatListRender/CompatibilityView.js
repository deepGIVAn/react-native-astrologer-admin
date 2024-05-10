import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, } from 'react-native';
import { FreeCundliStyle } from '../../styles';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useTranslation } from "react-i18next";

const CompatibilityView = (props) => {
    const { item } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.MinViewDeatails}>
            <View style={FreeCundliStyles.TextViewWidth}>
                <Text style={FreeCundliStyles.TitleStyle}>{t(item.text)}</Text>
                <Text style={FreeCundliStyles.ParegraphText}>{t(item.paregraph)}</Text>
            </View>
            <View style={FreeCundliStyles.CircularProgress}>
                <CircularProgress
                    value={item.value}
                    radius={45}
                    inActiveStrokeOpacity={0.5}
                    activeStrokeColor={item.activecolor}
                    inActiveStrokeColor={item.activecolor}
                    activeStrokeWidth={20}
                    inActiveStrokeWidth={20}
                    progressValueStyle={FreeCundliStyles.Colorwhite}
                />
                <Text style={[FreeCundliStyles.CircularProgressText, { color: item.activecolor }]}>{t(item.digit)}</Text>
            </View>
        </View>
    );
}
export default CompatibilityView;