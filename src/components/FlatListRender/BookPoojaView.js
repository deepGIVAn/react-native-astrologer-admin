import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BookPoojaStyle } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../commonComponents';

const BookPoojaView = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const BookPoojaStyles = useMemo(() => BookPoojaStyle(Colors), [Colors]);

    return (
        <View style={BookPoojaStyles.BorderView}>
            <TouchableOpacity onPress={() => onPress()} style={BookPoojaStyles.MinViewImage}>
                <Image source={item.PoojaImage} resizeMode="contain" style={BookPoojaStyles.ImageStyle} />
                <Image source={item.imageseye} resizeMode="contain" style={BookPoojaStyles.AbsoluteStyle} />
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', '#3b5998']}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        borderRadius: 20,
                        height: '30%',
                        bottom: 0,
                    }} />
                <View style={BookPoojaStyles.PositionAsolute}>
                    <Text style={BookPoojaStyles.TextStyle}>{t(item.text)}</Text>
                    <Text numberOfLines={1} style={BookPoojaStyles.SmallTextStyle}>{t(item.SnallText)}</Text>
                </View>
            </TouchableOpacity>
            <View style={BookPoojaStyles.FlexDirectionRowas}>
                <View>
                    <Text style={BookPoojaStyles.DateTextStyle}>{t("Book_Pooja_Title_11")}</Text>
                </View>
                <View>
                    <Button onPress={() => onPress()} buttonTextStyle={BookPoojaStyles.ButtonTextStyle} buttonStyle={BookPoojaStyles.ButtonStyle} title={t("Book_Pooja_Title_12")} />
                </View>
            </View>
        </View>
    );
}
export default BookPoojaView;