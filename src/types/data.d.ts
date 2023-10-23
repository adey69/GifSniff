interface IGifData {
  title: string;
  rating: 'g' | 'pg' | 'pg-13' | 'r';
  url: string;
  images: {
    original: {
      url: string;
    };
  };
}
