import axios from 'axios';

//string request
export const baseUrl = () => {
  return 'https://your-energy.b.goit.study/api';
};

export const exerciseUrl = () => {
  return `${baseUrl()}/exercises`;
};

export const filtersUrl = () => {
  return baseUrl() + '/filters';
};

export const quoteURL = () => {
  return baseUrl() + '/quote';
};

export const subscriptionURL = () => {
  return baseUrl() + '/subscription';
};

export const exerciseRequest = (
  bodypart,
  muscles,
  equipment,
  keyword,
  page,
  limit
) => {
  return `${exerciseUrl()}?bodypart=${bodypart}&muscles=${muscles}&equipment=${equipment}&keyword=${keyword}&page=${page}&limit=${limit}`;
};

export const filtersRequest = (filter, page, limit) => {
  return `${filtersUrl()}?filter=${filter}&page=${page}&limit=${limit}`;
};

export const quoteRequest = () => {
  return quoteURL();
};

export const subscriptionRequest = () => {
  return subscriptionURL();
};

export const exerciseInfoRequest = id => {
  return `${exerciseUrl()}/${id}`;
};

export const addRatingRequest = async (id, ratingData) => {
  console.log('Making request to:', `${baseUrl()}/exercises/${id}/rating`);
  console.log('With data:', ratingData);

  try {
    const formattedData = {
      rate: ratingData.rate,
      email: ratingData.email,
      review: ratingData.review || '',
    };

    const response = await axios({
      method: 'PATCH',
      url: `${baseUrl()}/exercises/${id}/rating`,
      data: formattedData,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Rating request error:', error);
    throw error;
  }
};
