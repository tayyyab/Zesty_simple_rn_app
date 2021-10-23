import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TitleTextField from './component/TitleTextField';
import Button from './component/Button';
import TitleImageComponent from './component/TitleImage';
import Loader from './component/loading';
import ApiServices from '../../Api/Service';

type CoffeeType = {
  title: String;
  image: any;
};

const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [coffeeNoteList, setCoffeeNoteList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onTitleTextChange = (text: any) => {
    console.log('On Title Text: ');
    setTitle(text);
  };

  const getNewImageUrlFromApi = () => {
    setLoading(true);

    ApiServices.getImageUrl((response: {isSuccess: boolean; result: any}) => {
      if (response.isSuccess) {
        console.log(response.result);
        let old = coffeeNoteList;
        old.unshift({
          title: title,
          image: response.result,
        });
      }
      setLoading(false);
    });
  };

  const onPublishPressed = () => {
    getNewImageUrlFromApi();
  };

  return (
    <View style={styles.page}>
      <Loader loading={loading} />
      <TitleTextField
        value={title}
        placeholder={'Quoi de neuf?'}
        onChangeText={onTitleTextChange}
      />
      <View style={styles.alignLeft}>
        <Button text={'Publish'} onButtonPress={onPublishPressed} />
      </View>

      <FlatList
        data={coffeeNoteList}
        renderItem={({item}: {item: any}) => (
          <TitleImageComponent title={item.title} image={item.image} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fefefe',
    flex: 1,
    padding: 20,
  },
  alignLeft: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
});
