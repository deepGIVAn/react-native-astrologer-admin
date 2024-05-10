import React from 'react';
import {View, FlatList} from 'react-native';
import {SH} from '../../utils';
import {AstrotalkBlogView, Spacing} from '../../components';
import {Style} from '../../styles';
import {RouteName} from '../../routes';
import images from '../../index';
import {ScrollView} from 'react-native-virtualized-view';

const AstrotalksBlogScreen = props => {
  const {navigation} = props;

  const LiveAstrologersdata = [
    {
      id: 1,
      text: 'Daily_Horoscope_1',
      imageseye: images.AstrotalkBlog_Image_1,
      IconName: 'call',
      view: '400',
    },
    {
      id: 2,
      text: 'Daily_Horoscope_2',
      imageseye: images.AstrotalkBlog_Image_6,
      IconName: 'videocam',
      view: '1230',
    },
    {
      id: 3,
      text: 'Daily_Horoscope_3',
      imageseye: images.AstrotalkBlog_Image_3,
      IconName: 'videocam',
      view: '830',
    },
    {
      id: 4,
      text: 'Daily_Horoscope_4',
      imageseye: images.AstrotalkBlog_Image_7,
      IconName: 'call',
      view: '842',
    },
    {
      id: 5,
      text: 'Daily_Horoscope_5',
      imageseye: images.AstrotalkBlog_Image_2,
      IconName: 'videocam',
      view: '2023',
    },
    {
      id: 6,
      text: 'Daily_Horoscope_6',
      imageseye: images.AstrotalkBlog_Image_4,
      IconName: 'call',
      view: '4045',
    },
    {
      id: 7,
      text: 'Daily_Horoscope_7',
      imageseye: images.AstrotalkBlog_Image_5,
      IconName: 'call',
      view: '2244',
    },
    {
      id: 8,
      text: 'Daily_Horoscope_8',
      imageseye: images.AstrotalkBlog_Image_4,
      IconName: 'videocam',
      view: '2832',
    },
  ];
  return (
    <View>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(20)} />
            <FlatList
              data={LiveAstrologersdata}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <AstrotalkBlogView
                  item={item}
                  onPress={() =>
                    navigation.navigate(
                      RouteName.Astrotalks_BLOG_DETAILS_SCREEN,
                    )
                  }
                />
              )}
              keyExtractor={item => item.id}
            />
            <Spacing space={SH(80)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default AstrotalksBlogScreen;
