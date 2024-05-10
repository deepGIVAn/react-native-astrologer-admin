import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SearchStyle} from '../../styles';
import {VectorIcon, ColorPicker} from '../../components';
import {Colors, SF} from '../../utils';

const HeaderTopIcon = props => {
  const {
    onPressPrice,
    onPresSearch,
    onPresFilter,
    Price,
    Searchtrue,
    Filter,
    Wallet,
    ColorPickers,
  } = props;

  return (
    <View style={SearchStyle.FlexRowMinSearch}>
      {Price && (
        <TouchableOpacity
          style={SearchStyle.PriceTextStyleView}
          onPress={() => onPressPrice()}>
          <Text style={SearchStyle.PriceStyle}>₹ 0</Text>
        </TouchableOpacity>
      )}
      {Searchtrue && (
        <TouchableOpacity
          style={SearchStyle.PaddingIconRight}
          onPress={() => onPresSearch()}>
          <VectorIcon
            icon="AntDesign"
            name="search1"
            size={SF(25)}
            color={Colors.white_text_color}
          />
        </TouchableOpacity>
      )}
      {Filter && (
        <TouchableOpacity
          style={SearchStyle.PaddingIconRight}
          onPress={() => onPresFilter()}>
          <VectorIcon
            icon="AntDesign"
            name="filter"
            size={SF(25)}
            color={Colors.white_text_color}
          />
        </TouchableOpacity>
      )}
      {Wallet && (
        <TouchableOpacity
          style={SearchStyle.PaddingIconRight}
          onPress={() => onPressPrice()}>
          <VectorIcon
            icon="AntDesign"
            name="wallet"
            size={SF(25)}
            color={Colors.white_text_color}
          />
        </TouchableOpacity>
      )}
      {/* {ColorPickers && <ColorPicker />} */}
    </View>
  );
};
export default HeaderTopIcon;
