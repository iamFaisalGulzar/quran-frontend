import React, { useEffect, useState } from 'react';
import { getVersesByChapter } from '../services/api';

const VersesList = ({ chapterId, token }) => {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    const fetchVerses = async () => {
      const data = await getVersesByChapter(chapterId, token);
      setVerses(data.verses);
    };

    fetchVerses();
  }, [chapterId, token]);

  return (
    <div>
      {verses.map(verse => (
        <div key={verse.id}>
          <p>{verse.text_uthmani}</p>
          <p>{verse.translations[0].text}</p>
        </div>
      ))}
    </div>
  );
};

export default VersesList;
