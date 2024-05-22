import React, { useEffect, useState } from 'react';
import { getVersesByChapter } from '../services/api';
import { Spinner } from 'react-bootstrap';
import imageUrl from './headerImage.png'

const VersesList = ({ chapterId, token }) => {
  const [verses, setVerses] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchVerses = async () => {
      const data = await getVersesByChapter(chapterId, token);
      setVerses(data.verses);
      setIsLoading(false)
    };

    fetchVerses();
  }, [chapterId, token]);

  return (
   isLoading ? 
    <div className="w-100 d-flex justify-content-center card-spinner-container">
      <Spinner animation="border" variant="primary" />
    </div> : 
    <div style={{ textAlign: 'center' }}>
      <div className="container">
        <img src={imageUrl} alt="Snow" style={{ width: '100%' }} />
        <div className="centered">
        <h1>Chapter {chapterId} !</h1>
        </div>
      </div>
      {verses.map(verse => (
        <div style={{ marginTop: "30px"}} key={verse.id}>
          <p>{verse.text_uthmani}</p>
          <p>{verse.translations[0].text}</p>
        </div>
      ))}
    </div>
  );
};

export default VersesList;
