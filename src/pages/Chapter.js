import React from 'react';
import VersesList from '../components/VersesList';
import { useParams } from 'react-router-dom';

const Chapter = ({ token }) => {
  const { chapterId } = useParams();

  return (
    <div>
      <VersesList chapterId={chapterId} token={token} />
    </div>
  );
};

export default Chapter;
