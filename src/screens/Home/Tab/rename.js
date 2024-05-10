import React from 'react';
import {View, FlatList, ScrollView, Text} from 'react-native';
import {Colors, SH, SF} from '../../../utils';
import {Container, Spacing} from '../../../components';

const HomeTab = props => {
  return (
    <Container>
      <Spacing space={SH(20)} />
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Text>Hello</Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
export default HomeTab;
