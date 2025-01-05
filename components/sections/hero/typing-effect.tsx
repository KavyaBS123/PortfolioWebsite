"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TYPING_SPEED = 250;
const DELETING_SPEED = 100;
const PAUSE_TIME = 2000;

const WORDS = [
  "Full Stack Developer",
  "Programmer",
  "Problem Solver"
];

export function TypingEffect() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(TYPING_SPEED);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = WORDS[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setDelta(DELETING_SPEED);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setDelta(TYPING_SPEED);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, delta]);

  return (
    <motion.div 
      className="h-12 text-2xl md:text-3xl text-muted-foreground font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{text}</span>
      <span className="inline-block w-[3px] h-6 ml-1 bg-primary animate-pulse" />
    </motion.div>
  );
}