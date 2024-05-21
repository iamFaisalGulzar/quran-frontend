import React, { useEffect, useState } from 'react';
import { getChapters } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './ChapterList.css'; // Ensure you have this CSS file for styling

const ChapterList = ({ token }) => {
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChapters = async () => {
      const data = await getChapters(token);
      setChapters(data.chapters);
    };

    fetchChapters();
  }, [token]);

  const handleCardClick = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

  return (
    <div className="chapter-list">
      <h1>Let's begin the journey towards Enlightenment</h1>
      <div className="chapters-container">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="chapter-card" onClick={() => handleCardClick(chapter.id)}>
            <div className="chapter-number">{chapter.id}</div>
            <div className="chapter-info">
              <div className="chapter-name">{chapter.name_simple}</div>
              <div className="chapter-name-arabic">{chapter.name_arabic}</div>
              <div className="chapter-details">
                <span className="chapter-revelation">{chapter.revelation_place}</span>
                <span className="chapter-verses">{chapter.verses_count} verses</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;