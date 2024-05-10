import React, { useMemo, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Spacing, Button, CheckBox } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTranslation } from "react-i18next";

const YourBirthTime = (props) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    const { t } = useTranslation();

    const showTimePicker = () => {
        setShowPicker(true);
    };

    const handleTimeChange = (event, selected) => {
        setShowPicker(Platform.OS === 'ios');
        if (selected) {
            setSelectedTime(selected);
        }
    };
    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.PaddingHorizontalNew}>
            <Spacing space={SH(40)} />
            <Text style={FreeCundliStyles.TextStyle}>{t("Kundali_Report_20")}</Text>
            <Spacing space={SH(20)} />
            <View style={FreeCundliStyles.LeftRightPadding}>
                <Button title={t("Kundali_Report_21")} onPress={showTimePicker} />
                {showPicker && (
                    <DateTimePicker
                        value={selectedTime}
                        mode="time"
                        is24Hour={false}
                        display="default"
                        onChange={handleTimeChange}
                    />
                )}
                <Spacing space={SH(20)} />
                <TouchableOpacity onPress={showTimePicker}>
                    <Text style={FreeCundliStyles.DateTextStyle}>{t("Kundali_Report_22")}   {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                </TouchableOpacity>
                <View style={FreeCundliStyles.FlexRowCheckBoxTwo}>
                    <View>
                        <CheckBox
                            checked={checked}
                            onPress={toggleCheckbox}
                            iconType="material-community"
                            checkedIcon="checkbox-marked"
                            uncheckedIcon="checkbox-blank-outline"
                            checkedColor={Colors.theme_background}
                            uncheckedColor={Colors.theme_background}
                        />
                    </View>
                    <View>
                        <Text style={FreeCundliStyles.ExactTime}>{t("Kundali_Report_23")}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default YourBirthTime;