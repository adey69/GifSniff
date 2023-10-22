import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: 'BluxFAOfAHEf9xg0PdiHD1fqlEAEdlSu',
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
