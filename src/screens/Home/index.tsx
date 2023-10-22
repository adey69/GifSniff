import React, { useCallback } from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { useHome } from './Hooks';
import { CustomButton, GifImage, SearchField } from '~/components';
import { APP_TEXT } from '~/strings';

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
    handleLinkPressed,
  } = useHome();

  const renderGifListItem = useCallback(
    ({ item }: ListRenderItemInfo<IGifData>) => {
      return (
        <View style={styles.gifListItem}>
          <GifImage gif={item} isLoading={false} />
        </View>
      );
    },
    [],
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
      />
      <View style={styles.randomGifContainer}>
        <Text>
          {isSearchFocused ? APP_TEXT.searchResults : APP_TEXT.randomGif}:
        </Text>
        {!isSearchFocused ? (
          <View style={styles.randomGif}>
            <GifImage gif={randomGif} isLoading={isLoading} />
            <Text style={styles.gifTitle}>{randomGif?.title}</Text>
            <CustomButton onPress={handleLinkPressed}>
              <Text style={styles.gifLink}>{randomGif?.url}</Text>
            </CustomButton>
          </View>
        ) : (
          <KeyboardAwareFlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            data={searchedGifs}
            renderItem={renderGifListItem}
            numColumns={3}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
