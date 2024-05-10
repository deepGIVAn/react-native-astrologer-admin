import React, { useMemo, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, Text } from "react-native";
import { Style, FilterStyle } from '../../styles';
import { Spacing, RadioButton, CheckBox, Button } from '../../components';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { RouteName } from "../../routes";

const FilterScreen = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { Colors } = useTheme();
  const FilterStyles = useMemo(() => FilterStyle(Colors), [Colors]);

  const [checkboxes, setCheckboxes] = useState([
    { label: t("Filter_Title_1"), checked: true },
    { label: t("Filter_Title_2"), checked: true },
    { label: t("Filter_Title_3"), checked: true },
    { label: t("Filter_Title_4"), checked: true },
    { label: t("Filter_Title_5"), checked: true },
    { label: t("Filter_Title_6"), checked: true },
    { label: t("Filter_Title_7"), checked: true },
    { label: t("Filter_Title_8"), checked: true },
    { label: t("Filter_Title_9"), checked: true },
    { label: t("Filter_Title_10"), checked: true },
    { label: t("Filter_Title_11"), checked: true },
    // Add more options as needed
  ]);

  const stateValue = {
    IndividualPooja: "",
  }
  const [state, setState] = useState(stateValue);

  const arrayData = [
    { label: t("Filter_Title_12"), value: 'option1' },
    { label: t("Filter_Title_13"), value: 'option2' },
    { label: t("Filter_Title_14"), value: 'option3' },
    { label: t("Filter_Title_15"), value: 'option4' },
    { label: t("Filter_Title_16"), value: 'option5' },
    { label: t("Filter_Title_17"), value: 'option6' },
    { label: t("Filter_Title_18"), value: 'option7' },
    { label: t("Filter_Title_19"), value: 'option9' },
  ];

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };

  const renderCheckboxes = () => {
    return checkboxes.map((checkbox, index) => (
      <CheckBox
        key={index}
        title={checkbox.label}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checked={checkbox.checked}
        onPress={() => handleCheckboxChange(index)}
      />
    ));
  };

  return (
    <>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(20)} />
            <Text style={FilterStyles.SortTextStyle}>{t("Filter_Title_20")}</Text>
            <Spacing space={SH(20)} />
            <RadioButton
              arrayData={arrayData}
              onChangeText={(text) => setState({ ...state, IndividualPooja: text })}
              value={state.IndividualPooja}
            />
            <Spacing space={SH(10)} />
            <Text style={FilterStyles.SortTextStyle}>{t("Filter_Title_21")}</Text>
            <Spacing space={SH(20)} />
            {renderCheckboxes()}
            <Spacing space={SH(60)} />
          </View>
        </View>
      </ScrollView>
      <View style={FilterStyles.ApplyButtonView}>
        <Button onPress={() => navigation.navigate(RouteName.HOME_TAB)} title={t("Filter_TitleA_1")} />
      </View>
    </>
  );
};
export default FilterScreen;