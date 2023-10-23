import React, { useCallback } from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import {
  CustomButton,
  GifImage,
  GifInfo,
  LoadingIndicator,
  SearchField,
} from '~/components';
import { APP_TEXT } from '~/strings';
import { useHome } from './Hooks';
import styles from './styles';

const Home = () => {
  const {
    isLoading,
    randomGif,
    isSearchFocused,
    searchInputRef,
    searchValue,
    searchedGifs,
    blurSearch,
    focusSearch,
    handleTextChange,
    onListItemPressed,
    setSearchedGifs,
  } = useHome();

  const renderGifListItem = useCallback(
    ({ item: gif }: ListRenderItemInfo<IGifData>) => {
      return (
        <CustomButton
          style={styles.gifListItem}
          onPress={() => onListItemPressed(gif)}>
          <GifImage gif={gif} isLoading={false} />
        </CustomButton>
      );
    },
    [onListItemPressed],
  );

  return (
    <View style={styles.container}>
      <SearchField
        ref={searchInputRef}
        value={searchValue}
        onChangeText={handleTextChange}
        onFieldPressed={focusSearch}
        onFocus={focusSearch}
        handleBlur={blurSearch}
        setSearchedGifs={setSearchedGifs}
        isSearchFocused={isSearchFocused}
      />
      <View style={styles.randomGifContainer}>
        <Text>
          {isSearchFocused ? APP_TEXT.searchResults : APP_TEXT.randomGif}:
        </Text>
        {!isSearchFocused ? (
          <GifInfo gif={randomGif} isLoading={isLoading} />
        ) : (
          <>
            {isLoading && <LoadingIndicator animating={isLoading} />}
            <KeyboardAwareFlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
              data={searchedGifs}
              renderItem={renderGifListItem}
              numColumns={3}
              keyboardShouldPersistTaps="always"
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Home;
