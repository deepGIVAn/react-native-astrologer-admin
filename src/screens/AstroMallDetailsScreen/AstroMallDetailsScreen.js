import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Style, BookPoojaStyle } from '../../styles';
import images from '../../index';
import { Spacing, Button, VectorIcon, } from '../../components';
import { SH, SF } from '../../utils';
import { Image } from "react-native-elements";
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";

const AstroMallDetailsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const BookPoojaStyles = useMemo(() => BookPoojaStyle(Colors), [Colors]);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.ASTROMALL_SCREEN)} style={BookPoojaStyles.PostionAbsoluteTop}>
        <VectorIcon icon="Feather" name="chevrons-left" size={SF(36)} color={Colors.theme_background} />
      </TouchableOpacity>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(20)} />
            <View style={BookPoojaStyles.AstroMallWidth}>
              <View>
                <Image source={images.AstroMall_Details_1} resizeMode="contain" style={BookPoojaStyles.AstroMallDetailes} />
              </View>
            </View>
            <View style={BookPoojaStyles.ContentViewStyle}>
              <Spacing space={SH(20)} />
              <Text style={BookPoojaStyles.BoldTextStyle}>{t("Astromall_Title_1")}</Text>
              <Spacing space={SH(10)} />
              <Text style={BookPoojaStyles.SmallTextStyleDetailes}>{t("Astromall_Title_2")}</Text>
              <Spacing space={SH(20)} />
              <Text style={BookPoojaStyles.BoldTextStyle}>{t("Astromall_Title_3")}</Text>
              <Spacing space={SH(30)} />
              <View style={BookPoojaStyles.ButtonViewShortWidth}>
                <Button onPress={() => navigation.navigate(RouteName.ASTROMALL_PANDITLISTING_SCREEN)} title={t("Astromall_Title_4")} />
              </View>
              <Spacing space={SH(20)} />
              <View style={BookPoojaStyles.TopBorderView}>
                <Text style={BookPoojaStyles.NameTextStyle}>{t("Astromall_Title_5")}</Text>
                <Spacing space={SH(15)} />
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <Text style={BookPoojaStyles.SmallTextStyleDetailes}>{t("Astromall_Title_6")}</Text>
                </View>
              </View>
              <View style={BookPoojaStyles.TopBorderView}>
                <Text style={BookPoojaStyles.NameTextStyle}>{t("Astromall_Title_7")}</Text>
                <Spacing space={SH(15)} />
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <Text style={BookPoojaStyles.SmallTextStyleDetailes}>{t("Astromall_Title_8")} </Text>
                </View>
              </View>
              <View style={BookPoojaStyles.TopBorderView}>
                <Text style={BookPoojaStyles.NameTextStyle}>{t("Astromall_Title_9")}</Text>
                <Spacing space={SH(15)} />
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <Text style={BookPoojaStyles.SmallTextStyleDetailes}>{t("Astromall_Title_10")}</Text>
                </View>
              </View>
              <Spacing space={SH(80)} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={BookPoojaStyles.BottomViewAbsolute}>
        <Button onPress={() => navigation.navigate(RouteName.ASTROMALL_PANDITLISTING_SCREEN)} title={t("Astromall_Title_11")} />
      </View>
    </View>
  );
};
export default AstroMallDetailsScreen;