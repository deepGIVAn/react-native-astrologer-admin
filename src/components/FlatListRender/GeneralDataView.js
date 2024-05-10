import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Spacing } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";

const GeneralDataView = (props) => {
    const { item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.PaddingHorizontalNew}>
            <Spacing space={SH(20)} />
            <Text style={FreeCundliStyles.DiscriptionTextStyle}>{t(item.text)}</Text>
            <Text style={FreeCundliStyles.ParegraphTextSAtyle}>{t(item.Paregraph)}</Text>
        </View>
    );
}
export default GeneralDataView;