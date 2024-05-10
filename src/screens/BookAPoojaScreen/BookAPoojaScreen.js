import React from "react";
import { View, FlatList } from "react-native";
import { Style } from '../../styles';
import images from '../../index';
import { Spacing, Container, BookPoojaView } from '../../components';
import { SH } from '../../utils';
import { RouteName } from "../../routes";
import { ScrollView } from 'react-native-virtualized-view';

const BookAPoojaScreen = (props) => {
  const { navigation } = props;

  const BookPoojadata = [
    {
      "id": 1,
      "text": 'Book_Pooja_Title_1',
      "imageseye": images.BookPooja_Screen_1,
      "PoojaImage": images.BookPoojaScreen_1,
      "SnallText": "Book_Pooja_Title_2"
    },
    {
      "id": 2,
      "text": 'Book_Pooja_Title_1',
      "imageseye": images.BookPooja_Screen_2,
      "PoojaImage": images.BookPoojaScreen_2,
      "SnallText": "Book_Pooja_Title_2"
    },
    {
      "id": 3,
      "text": 'Book_Pooja_Title_3',
      "imageseye": images.BookPooja_Screen_3,
      "PoojaImage": images.BookPoojaScreen_3,
      "SnallText": "Book_Pooja_Title_4"
    },
    {
      "id": 4,
      "text": 'Book_Pooja_Title_5',
      "imageseye": images.BookPooja_Screen_4,
      "PoojaImage": images.BookPoojaScreen_4,
      "SnallText": "Book_Pooja_Title_6"
    },
    {
      "id": 5,
      "text": 'Book_Pooja_Title_7',
      "imageseye": images.BookPooja_Screen_5,
      "PoojaImage": images.BookPoojaScreen_5,
      "SnallText": "Book_Pooja_Title_8"
    },
    {
      "id": 6,
      "text": 'Book_Pooja_Title_9',
      "imageseye": images.BookPooja_Screen_6,
      "PoojaImage": images.BookPoojaScreen_6,
      "SnallText": "Book_Pooja_Title_10"
    },
  ]
  return (
    <Container>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(20)} />
            <View>
              <FlatList
                data={BookPoojadata}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (<BookPoojaView
                  item={item}
                  onPress={() => navigation.navigate(RouteName.BOOK_POOJA_DETAILES_SCREEN)}
                  index={index}
                />)}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
export default BookAPoojaScreen;