import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity, } from 'react-native';
import { ChatTabStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { VectorIcon } from '../commonComponents';
import { SF } from '../../utils';
import { Image } from 'react-native-elements';

const ChatTabView = (props) => {
    const { t } = useTranslation();
    const { item, chatCategory, onPress, index } = props;
    const { Colors } = useTheme();
    const ChatTabStyles = useMemo(() => ChatTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()} style={chatCategory === item.text ? ChatTabStyles.HomeSelectProparty : ChatTabStyles.HomeSelectPropartytwo}>
            {index === 0 || index === 5 || index === 8 ?
                <VectorIcon icon="FontAwesome5" name={item.iconname} size={SF(15)} color={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} />
                : null}
            {index === 3 || index === 6 ?
                <VectorIcon icon="MaterialIcons" name={item.iconname} size={SF(15)} color={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} />
                : null}
            {index === 7 || index === 10 ?
                <VectorIcon icon="MaterialCommunityIcons" name={item.iconname} size={SF(15)} color={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} />
                : null}
            {index === 9 ?
                <VectorIcon icon="FontAwesome" name={item.iconname} size={SF(15)} color={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} />
                : null}
            {index === 4 ?
                <VectorIcon icon="Feather" name={item.iconname} size={SF(15)} color={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} />
                : null}
            {index === 2 ?
                <VectorIcon icon="AntDesign" name={item.iconname} size={SF(15)} color={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} />
                : null}
            {index === 1 ?
                <Image source={item.iconname} tintColor={chatCategory === item.text ? Colors.white_text_color : Colors.theme_background} style={ChatTabStyles.ImageStyleDiscount} />
                : null}
            <Text style={chatCategory === item.text ? ChatTabStyles.HomeSelectPropartyTYext : ChatTabStyles.HomeSelectPropartyTYexttwo}>{t(item.text)}</Text>
        </TouchableOpacity>
    );
}
export default ChatTabView;