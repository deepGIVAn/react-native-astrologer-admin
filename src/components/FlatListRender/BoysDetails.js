import React, { useMemo, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Spacing, Input, VectorIcon, DatePicker, TimePicker } from '../../components';
import { FreeCundliStyle } from '../../styles';
import { SH, SF } from '../../utils';
import { useTranslation } from "react-i18next";

const BoysDetails = (props) => {
    const { title } = props;
    const { t } = useTranslation();
    const [boyDetails, setBoyDetails] = useState({
        Name: "",
        selectedDate: new Date(),
        showDatePicker: false,
        selectedTime: new Date(),
        showTimePicker: false,
    });

    const handleDateTimeChange = (event, dateOrTime, action) => {
        if (dateOrTime !== undefined) {
            const updatedState = {
                ...boyDetails,
                [action]: dateOrTime,
                showDatePicker: false,
                showTimePicker: false,
            };
            setBoyDetails(updatedState);
        }
    };

    const showPicker = (action) => {
        setBoyDetails({
            ...boyDetails,
            showDatePicker: action === 'selectedDate',
            showTimePicker: action === 'selectedTime',
        });
    };

    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    return (
        <View style={FreeCundliStyles.KundaliMatchingView}>
            <Spacing space={SH(10)} />
            <Text style={FreeCundliStyles.CenterText}>{title}</Text>
            <Spacing space={SH(10)} />
            <Text style={FreeCundliStyles.InputTextStyle}>{t("Kundali_Matching_9")}</Text>
            <Spacing space={SH(5)} />
            <Input
                placeholder={t("Kundali_Matching_9")}
                onChangeText={(text) => setBoyDetails({ ...boyDetails, Name: text })}
                value={boyDetails.Name}
                placeholderTextColor={Colors.gray_text_color}
            />
            <Text style={FreeCundliStyles.InputTextStyle}>{t("Kundali_Matching_10")}</Text>
            <Spacing space={SH(5)} />
            {boyDetails.showDatePicker && (
                <DatePicker
                    testID="datePicker"
                    value={boyDetails.selectedDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(event, date) => handleDateTimeChange(event, date, 'selectedDate')}
                />
            )}
            <View style={FreeCundliStyles.PaddingLeftRight}>
                <TouchableOpacity style={FreeCundliStyles.FlexDateIcon} onPress={() => showPicker('selectedDate')}>
                    <VectorIcon icon="Fontisto" name="date" size={SF(22)} />
                    <Text style={FreeCundliStyles.DateTextStyle}>{boyDetails.selectedDate.toISOString().split('T')[0]}</Text>
                </TouchableOpacity>
            </View>
            <Spacing space={SH(20)} />
            <Text style={FreeCundliStyles.InputTextStyle}>{t("Kundali_Matching_11")}</Text>
            <Spacing space={SH(5)} />
            {boyDetails.showTimePicker && (
                <TimePicker
                    testID="timePicker"
                    value={boyDetails.selectedTime}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={(event, time) => handleDateTimeChange(event, time, 'selectedTime')}
                />
            )}
            <View style={FreeCundliStyles.PaddingLeftRight}>
                <TouchableOpacity style={FreeCundliStyles.FlexDateIcon} onPress={() => showPicker('selectedTime')}>
                    <VectorIcon icon="Fontisto" name="date" size={SF(22)} />
                    <Text style={FreeCundliStyles.DateTextStyle}>{boyDetails.selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                </TouchableOpacity>
            </View>
            <Spacing space={SH(20)} />
            <Text style={FreeCundliStyles.InputTextStyle}>{t("Kundali_Matching_12")}</Text>
            <View style={FreeCundliStyles.PaddingLeftRight}>
                <View style={FreeCundliStyles.ViewBorderWidth}>
                    <Input
                        leftIcon={<VectorIcon icon="Entypo" name="location-pin" size={SF(29)} />}
                        placeholder={t("Kundali_Matching_12")}
                        onChangeText={(text) => setBoyDetails({ ...boyDetails, Name: text })}
                        value={boyDetails.Name}
                        placeholderTextColor={Colors.gray_text_color}
                        inputStyle={FreeCundliStyles.InputBorderNone}
                    />
                </View>
            </View>
            <Spacing space={SH(30)} />
        </View>
    );
}
export default BoysDetails;