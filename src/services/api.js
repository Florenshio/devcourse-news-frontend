import axios from 'axios';

// Base URL for the API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all summarized news
 * @returns {Promise} Promise with the response data
 */
export const fetchAllNews = async () => {
  try {
    const response = await api.get('/summarized-news');
    return response.data;
  } catch (error) {
    console.error('Error fetching all news:', error);
    throw error;
  }
};

/**
 * Fetch today's summarized news
 * @returns {Promise} Promise with the response data
 */
export const fetchTodayNews = async () => {
  try {
    const response = await api.get('/summarized-news/today');
    return response.data;
  } catch (error) {
    console.error('Error fetching today\'s news:', error);
    throw error;
  }
};

/**
 * Fetch summarized news by date
 * @param {string} date - Date in format 'YYYY-MM-DD'
 * @returns {Promise} Promise with the response data
 */
export const fetchNewsByDate = async (date) => {
  try {
    const response = await api.get(`/summarized-news/date/${date}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news for date ${date}:`, error);
    throw error;
  }
};

/**
 * Fetch summarized news by category
 * @param {string} category - News category
 * @returns {Promise} Promise with the response data
 */
export const fetchNewsByCategory = async (category) => {
  try {
    const response = await api.get(`/summarized-news/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news for category ${category}:`, error);
    throw error;
  }
};

/**
 * Fetch a single summarized news by ID
 * @param {number} id - Summarized news ID
 * @returns {Promise} Promise with the response data
 */
export const fetchNewsById = async (id) => {
  try {
    const response = await api.get(`/summarized-news/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch a summarized news by news ID
 * @param {number} newsId - News ID
 * @returns {Promise} Promise with the response data
 */
export const fetchNewsByNewsId = async (newsId) => {
  try {
    const response = await api.get(`/summarized-news/news/${newsId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with news ID ${newsId}:`, error);
    throw error;
  }
};

export default api;
