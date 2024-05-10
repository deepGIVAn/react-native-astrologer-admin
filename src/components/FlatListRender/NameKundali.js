import React, { useMemo, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Spacing, Input } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";

const NameKundali = (props) => {
    const [name, setname] = useState('');
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.PaddingHorizontalNew}>
            <Spacing space={SH(40)} />
            <Text style={FreeCundliStyles.TextStyle}>{t("Kundali_Report_10")}</Text>
            <Text style={FreeCundliStyles.TextStyle}>{t("Kundali_Report_12")}</Text>
            <Spacing space={SH(40)} />
            <Input
                title={""}
                placeholder={t("Kundali_Report_11")}
                onChangeText={(value) => setname(value)}
                value={name}
                placeholderTextColor={Colors.gray_text_color}
            />
        </View>
    );
}
export default NameKundali;