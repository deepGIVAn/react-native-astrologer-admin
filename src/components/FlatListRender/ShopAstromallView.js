import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle } from '../../styles';

const ShopAstromallView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;

    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <View style={HomeTabStyles.ShopAstromallView}>
            <View style={HomeTabStyles.CenteriMAGE}>
                <TouchableOpacity onPress={() => onPress()}>
                    <Image source={item.imageseye} resizeMode="contain" style={HomeTabStyles.ShpMallImage} />
                </TouchableOpacity> 
            </View>
            <View style={HomeTabStyles.PostionAbsoluteWhite}>
                    <Text style={HomeTabStyles.TextCebnterTheme}>{t(item.text)}</Text>
                </View>
        </View>
    );
}
export default ShopAstromallView;