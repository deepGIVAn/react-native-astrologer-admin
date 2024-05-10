import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle } from '../../styles';

const HomeCategoryView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;

    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <View style={HomeTabStyles.MinViewFirstHome}>
            <TouchableOpacity onPress={() => onPress()} style={HomeTabStyles.CenteriMAGE}>
                <Image source={item.imageseye} resizeMode="contain" style={HomeTabStyles.ImageStyle} />
            </TouchableOpacity>
            <Text style={HomeTabStyles.TextColorStyle}>{t(item.text)}</Text>
        </View>
    );
}
export default HomeCategoryView;