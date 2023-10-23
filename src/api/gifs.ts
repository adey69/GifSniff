import axios from 'axios';
import Config from 'react-native-config';

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
  }
};
