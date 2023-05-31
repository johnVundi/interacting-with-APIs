import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID POm-xp8QFX3yOp1WVJJL8F_RxEFaGqjJ_R-swyggWJQ',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SearchImages;
