import React, { useMemo, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Spacing, Button } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTranslation } from "react-i18next";

const YourBirthDate = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { t } = useTranslation();
    const handleDateChange = (event, date) => {
        if (date !== undefined) {
            // Do something with the selected date
            setSelectedDate(date);
        }
        setShowDatePicker(false);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.PaddingHorizontalNew}>
            <Spacing space={SH(40)} />
            <Text style={FreeCundliStyles.TextStyle}>{t("Kundali_Report_19")}</Text>
            <Spacing space={SH(20)} />
            <View style={FreeCundliStyles.LeftRightPadding}>
                <Button onPress={showDatepicker} title={t("Kundali_Report_17")} />
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={selectedDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
                <Spacing space={SH(20)} />
            </View>
            <TouchableOpacity onPress={showDatepicker}>
                <Text style={FreeCundliStyles.DateTextStyle}>{t("Kundali_Report_18")}   {selectedDate.toISOString().split('T')[0]}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default YourBirthDate;