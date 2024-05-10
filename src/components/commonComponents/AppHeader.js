import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import propTypes from 'prop-types';
import {RowComponent, VectorIcon} from '../../components';
import {SF, SH, SW, Fonts, Colors} from '../../utils';
import {useTranslation} from 'react-i18next';

function AppHeader({
  headerStyle,
  LeftIconStyle,
  rightView,
  LeftIconLeftStyle,
  headerTitle,
  onPress,
  titleStyle,
  Iconname,
}) {
  const {t} = useTranslation();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          ...headerStyle,
        },
        leftView: {
          width: '15%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        LeftImageViewStyle: {
          height: SH(18),
          width: SW(18),
          resizeMode: 'contain',
        },
        headerTitle: {
          fontSize: SF(23),
          fontWeight: '700',
          fontFamily: Fonts.Poppins_Medium,
          color: Colors.white_text_color,
          ...titleStyle,
        },
        rightView: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          //   backgroundColor: Colors.theme_background,
          width: '100%',
          height: SH(60),
        },
        rightImageStyle: {
          resizeMode: 'contain',
        },
        LeftIconStyle: {
          fontSize: SF(30),
          color: Colors.white_text_color,
          paddingLeft: SH(15),
          paddingRight: SH(30),
          ...LeftIconStyle,
        },
        LeftIconLeftStyle: {
          width: '100%',
          flexDirection: 'row',
          ...LeftIconLeftStyle,
        },
      }),
    [headerStyle, Colors],
  );
  return (
    <RowComponent rowStyle={styles.container}>
      <View style={[styles.rightView, {...rightView}]}>
        <TouchableOpacity onPress={onPress} style={styles.LeftIconLeftStyle}>
          {Iconname && (
            <VectorIcon
              icon="AntDesign"
              name={'arrowleft'}
              style={styles.LeftIconStyle}
            />
          )}
          {headerTitle ? (
            <Text style={styles.headerTitle}>{t(headerTitle)}</Text>
          ) : null}
        </TouchableOpacity>
      </View>
    </RowComponent>
  );
}
AppHeader.defaultProps = {
  headerStyle: {},
  LeftImageView: null,
  LeftComponent: null,
  title: '',
  rightImage: null,
  onLeftPress: () => {},
};
AppHeader.propTypes = {
  headerStyle: propTypes.shape({}),
  LeftImageView: propTypes.any,
  LeftComponent: propTypes.any,
  title: propTypes.string,
  rightImage: propTypes.any,
  onLeftPress: propTypes.func,
};
export default AppHeader;
