import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle } from '../../styles';
import { SF, SH, SW } from '../../utils';
import { VectorIcon, LinearGradient, RatingScreen, Spacing } from '../../components';

const LiveAstrologers = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;

    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <View style={HomeTabStyles.AstrologersWidth}>
            <View style={HomeTabStyles.CenteriMAGE}>
                <TouchableOpacity onPress={() => onPress()} style={HomeTabStyles.PostionShowAbsolute}>
                    <VectorIcon icon="Ionicons" name={item.IconName} size={SF(18)} color={Colors.white_text_color} />
                </TouchableOpacity>
                <LinearGradient
                    colors={[Colors.Liner_Color_1, Colors.Liner_Color_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={HomeTabStyles.LinerAround}>
                    <View>
                        <Image source={item.imageseye} resizeMode="contain" style={HomeTabStyles.AstrologerImage} />
                    </View>
                </LinearGradient>
            </View>
            <Spacing space={SH(5)} />
            <View style={HomeTabStyles.CenterView}>
                <View style={HomeTabStyles.FlexRowTextWithView}>
                    <RatingScreen
                        type='custom'
                        ratingColor={Colors.amber_color}
                        ratingBackgroundColor={Colors.chinese_silver}
                        ratingCount={SW(1)}
                        tintColor={Colors.white_text_color}
                        imageSize={SW(20)}
                        startingValue={SW(5)}
                        isDisabled={false}
                    />
                    <Text style={HomeTabStyles.TextCentewr}>({item.review})</Text>
                </View>
            </View>
            <Text style={HomeTabStyles.PostionTextStyle}>{t(item.text)}</Text>
        </View>
    );
}
export default LiveAstrologers;