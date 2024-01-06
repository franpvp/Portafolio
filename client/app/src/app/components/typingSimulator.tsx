import styles from '@/styles/typing.module.css';
import React, { useState, useEffect } from 'react';

type TypingSimulatorProps = {
  texts: string[];
};

const TypingSimulator: React.FC<TypingSimulatorProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetText = texts[currentTextIndex];
      const currentIndex = isDeleting ? currentText.length - 1 : currentText.length + 1;

      const newText = isDeleting
        ? targetText.substring(0, currentIndex)
        : targetText.substring(0, currentIndex);

      setCurrentText(newText);

      if (isDeleting && newText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else if (!isDeleting && newText === targetText) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <div className={styles.codeContainer}>
      <code>
        <span className={styles.codeText}>{currentText}</span>
        <span
          className={styles.cursor}
          style={{ visibility: currentText === texts[currentTextIndex] ? 'hidden' : 'visible' }}
        />
      </code>
    </div>
  );
};

export default TypingSimulator;
