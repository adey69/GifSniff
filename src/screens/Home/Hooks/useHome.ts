/* eslint-disable react-hooks/exhaustive-deps */
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import { getRandomGif, searchGifs } from '~/api';

export default () => {
  const searchInputRef = useRef<TextInput>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [randomGif, setRandomGif] = useState<IGifData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchedGifs, setSearchedGifs] = useState<IGifData[]>([]);
  const navigation = useNavigation<RootStackNavigationProp>();
  const isFocused = useIsFocused();

  const searchGifsDebounced = useDebouncedCallback(async (text: string) => {
    const res = await searchGifs(text);
    setSearchedGifs(res ?? []);
  }, 200);

  const fetchRandomGif = useCallback(async () => {
    if (!isSearchFocused) {
      setIsLoading(true);
      const res = await getRandomGif();
      setRandomGif(res);
      setIsLoading(false);
    }
  }, [isSearchFocused]);

  const initiateRandomGifs = useCallback(() => {
    if (isFocused) {
      fetchRandomGif();
      intervalRef.current = setInterval(() => {
        fetchRandomGif();
      }, 10000);
    }
  }, []);

  const stopRandomGifsInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const focusSearch = useCallback(() => {
    stopRandomGifsInterval();
    searchInputRef?.current?.focus();
    setIsSearchFocused(true);
  }, [stopRandomGifsInterval]);

  const blurSearch = useCallback(() => {
    searchInputRef?.current?.blur();
    setIsSearchFocused(false);
    initiateRandomGifs();
  }, [initiateRandomGifs]);

  const handleTextChange = useCallback(async (text: string) => {
    setSearchValue(text);
    if (text?.length >= 2) {
      setIsLoading(true);
      searchGifsDebounced(text);
      setIsLoading(false);
    }
  }, []);

  const onListItemPressed = useCallback(
    (gif: IGifData) => {
      navigation.navigate('GifDetails', {
        gif,
      });
    },
    [navigation],
  );

  useEffect(() => {
    initiateRandomGifs();

    return () => stopRandomGifsInterval();
  }, [initiateRandomGifs, stopRandomGifsInterval]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      stopRandomGifsInterval();
    });

    return unsubscribe;
  }, []);

  return {
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
  };
};
