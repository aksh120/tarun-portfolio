"use client";
import { useEffect, useState } from 'react';

const DEFAULT_GREETINGS = [
  'Hoi',
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Namaste',
  'Hallo',
  'Olá',
  'Salut',
  'Konnichiwa',
  'Marhaba',
  'Hej',
  'Privet',
  'Sawasdee',
  'Nǐ hǎo',
  'Annyeong',
  'Yassas',
];

export default function GreetingRotator({
  greetings = DEFAULT_GREETINGS,
  typingSpeed = 80,
  deleteSpeed = 45,
  pauseTime = 1500,
  className = '',
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = greetings[index];
    let timer;

    if (!isDeleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), pauseTime);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % greetings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, greetings, typingSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className} aria-live="polite" aria-label={text}>
      {text}
      <span className="type-caret" aria-hidden />
    </span>
  );
}
