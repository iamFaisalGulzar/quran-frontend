import axios from 'axios';

const API_URL = 'http://localhost:4000/api/quran';

const getChapters = async (token) => {
    console.log("token here : ", token)
  const response = await axios.get(`${API_URL}/chapters`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log({response})
  return response.data;
};

const getVersesByChapter = async (chapterId, token) => {
  const response = await axios.get(`${API_URL}/chapters/${chapterId}/verses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export { getChapters, getVersesByChapter };
