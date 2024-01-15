import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
export const fetchPhotos = async (serchText, page) => {
  const PARAMS = new URLSearchParams({
    key: '41198579-38b99c2f313870261687b3ac1',
    q: serchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });
  const url = `${BASE_URL}?${PARAMS}`;
  const { data } = await axios.get(url, PARAMS);
  return data;
};
