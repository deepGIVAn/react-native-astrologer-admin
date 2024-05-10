import React, {useMemo} from 'react';
import {Button} from 'react-native-elements';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Fonts, SF, SH, SW, Colors} from '../../utils';

function Buttons(props) {
  const {
    title,
    onPress,
    buttonStyle,
    iconContainerStyle,
    disable,
    buttonTextStyle,
    icon,
    spacedImages,
    linearGradientProps,
  } = props;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.theme_modified,
          borderRadius: SH(10),
          width: '100%',
          padding: SH(15),
        },
        buttonTextStyle: {
          color: Colors.old_theme,
          fontFamily: Fonts.Poppins_Medium,
          fontSize: SF(22),
          fontWeight: '700',
          lineHeight: SH(24),
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%',
        },
        LeftImageViewStyle: {
          marginVertical: SW(5),
        },
      }),
    [disable, spacedImages],
  );

  return (
    <TouchableOpacity>
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        iconContainerStyle={iconContainerStyle}
        linearGradientProps={linearGradientProps}
        buttonStyle={[styles.buttonStyle, {...buttonStyle}]}
        titleStyle={[styles.buttonTextStyle, {...buttonTextStyle}]}
      />
    </TouchableOpacity>
  );
}

export default Buttons;
