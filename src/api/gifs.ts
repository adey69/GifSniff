import axios from 'axios';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';
import { APP_TEXT } from '~/strings';

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  params: {
    api_key: Config.API_KEY,
  },
});

export const getRandomGif = async () => {
  try {
    const { data: res } = await axiosInstance.get<IRandomGifResponse>(
      '/random',
    );
    return res.data;
  } catch (err) {
    console.log(err);
    Snackbar.show({
      text: APP_TEXT.somethingWentWrong,
      duration: Snackbar.LENGTH_LONG,
    });
  }
};

export const searchGifs = async (query: string) => {
  try {
    const { data: res } = await axiosInstance.get<ISearchGifResponse>(
      '/search',
      {
        params: {
          q: query,
        },
      },
    );
    return res.data;
  } catch (err) {
    console.log(err);
    Snackbar.show({
      text: APP_TEXT.somethingWentWrong,
      duration: Snackbar.LENGTH_LONG,
    });
  }
};
