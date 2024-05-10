import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Spacing, NameKundali, Lottie, YourGender, YourBirthDate, YourBirthTime, YourBornPlace } from '../../components';
import { FreeCundliStyle, Style } from '../../styles';
import { SH } from '../../utils';
import images from '../../index';
import { RouteName } from '../../routes';

function CustomHorizontalLineWithStepNumbers(props) {
    const [activeStep, setActiveStep] = useState(1);
    const { navigation } = props;
    const totalSteps = 5;

    const { Colors } = useTheme();
    const FreeCundliStyles = useMemo(() => FreeCundliStyle(Colors), [Colors]);

    const steps = [
        { label: '1', content: <NameKundali /> },
        { label: '2', content: <YourGender /> },
        { label: '3', content: <YourBirthDate /> },
        { label: '4', content: <YourBirthTime /> },
        { label: '5', content: <YourBornPlace /> },
    ];

    const handleNext = () => {
        if (activeStep < totalSteps) {
            setActiveStep(activeStep + 1);
        } else {
            // Navigate to the next screen when all steps are completed
            navigation.navigate(RouteName.KUNDALI_REPORT_SCREEN); // Replace 'NextScreen' with the name of your next screen
        }
    };

    return (
        <View style={Style.height100width100}>
            <Spacing space={SH(30)} />
            <View style={FreeCundliStyles.StepsContainer}>
                {steps.map((step, index, i) => (
                    <View style={FreeCundliStyles.FlexRowStyle}>
                        <TouchableOpacity
                            key={i}
                            onPress={() => setActiveStep(index + 1)}
                            style={
                                index + 1 === activeStep
                                    ? FreeCundliStyles.ActiveStep
                                    : index + 1 < activeStep
                                        ? FreeCundliStyles.completedStep
                                        : FreeCundliStyles.inactiveStep
                            }>
                            <Text style={FreeCundliStyles.TextColorWhite}>{step.label}</Text>
                        </TouchableOpacity>
                        <View>
                            {index === 4 ?
                                <View />
                                :
                                <View style={
                                    index + 1 === activeStep
                                        ? FreeCundliStyles.SingleLineOne
                                        : index + 1 < activeStep
                                            ? FreeCundliStyles.SingleLineTwo
                                            : FreeCundliStyles.SingleLineTHeree
                                } />}
                        </View>

                    </View>
                ))}
            </View>
            <View style={FreeCundliStyles.ContentContainer}>
                <View>{steps[activeStep - 1].content}</View>
            </View>
            <TouchableOpacity onPress={handleNext} style={FreeCundliStyles.ButtonContainer}>
                <Lottie centerlottw={FreeCundliStyles.ButtonContainer} Lottiewidthstyle={FreeCundliStyles.Lottiewidthstyle} source={images.Next_Aerrow_Animation} />
            </TouchableOpacity>
        </View>
    );
}

export default CustomHorizontalLineWithStepNumbers;
