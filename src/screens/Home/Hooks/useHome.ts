import { useCallback, useEffect, useRef, useState } from 'react';
import { Linking, TextInput } from 'react-native';
import { getRandomGif, searchGifs } from '~/api';

export default () => {
  const searchInputRef = useRef<TextInput>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [randomGif, setRandomGif] = useState<IGifData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchedGifs, setSearchedGifs] = useState<IGifData[]>([]);

  const fetchRandomGif = useCallback(async () => {
    if (!isSearchFocused) {
      setIsLoading(true);
      const res = await getRandomGif();
      setRandomGif(res);
      setIsLoading(false);
    }
  }, [isSearchFocused]);

  const initiateRandomGifs = useCallback(() => {
    fetchRandomGif();
    intervalRef.current = setInterval(() => {
      fetchRandomGif();
    }, 10000);
  }, [fetchRandomGif]);

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
      const res = await searchGifs(text);
      setSearchedGifs(res ?? []);
    }
  }, []);

  const handleLinkPressed = async () => {
    const url = randomGif?.url ?? '';
    const canOpenUrl = await Linking.canOpenURL(url);
    if (canOpenUrl) {
      Linking.openURL(url);
    }
  };

  useEffect(() => {
    initiateRandomGifs();

    return () => stopRandomGifsInterval();
  }, [initiateRandomGifs, stopRandomGifsInterval]);

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
    handleLinkPressed,
  };
};
