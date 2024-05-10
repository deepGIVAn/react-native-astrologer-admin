import React from "react";
import { Text,View } from "react-native";
import { useTranslation } from "react-i18next";
import { Style } from "../../styles";

const HeaderTitle = (props) => {
  const { Title } = props;
  const { t } = useTranslation();
  return (
    <View>
      <Text style={Style.HeaderTitles}>{t(Title)}</Text>
    </View>
  )
}
export default HeaderTitle;