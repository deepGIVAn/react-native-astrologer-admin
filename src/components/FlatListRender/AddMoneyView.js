import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { OrderHistoryStyle } from '../../styles';
import { useTranslation } from "react-i18next";

const AddMoneyView = (props) => {

    const { item, index, onPress } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()} style={OrderHistoryStyles.MinViewMoney}>
            {index === 0 || index === 1 || index === 2 ?
                <View />
                :
                <View style={[OrderHistoryStyles.PostionAbsolute, { backgroundColor: item.background }]}>
                    <Text style={OrderHistoryStyles.TextCebnter}>{t(item.Discounttext)}</Text>
                </View>}
            <Text style={OrderHistoryStyles.MediumTextStyle}>{t(item.text)}</Text>
        </TouchableOpacity>
    );
}
export default AddMoneyView;