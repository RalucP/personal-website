import { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Typewriter.styles.scss';

/**
 * 
 * @param {array} sentences an array containing the strings desired to be typed
 * @param {number} delay a number representing the time between writing the letters in ms
 * @returns 
 */
const Typewriter = ({ sentences, delay=100 }) => {
  const elRef = useRef(null);

  const typeSentence = useCallback(async (sentence) => {
    const letters = sentence.split('');
    let i = 0;
    while(i < letters.length){
      await waitForMs(delay);
      elRef.current.append(letters[i]);
      i++;
    }
  }, [delay]);

  const deleteSentence = useCallback( async() => {
    const sentence = elRef.current.innerHTML;
    const letters = sentence.split('');
    while(letters.length > 0) {
      await waitForMs(delay);
      letters.pop();
      elRef.current.innerHTML = letters.join('');
    }
  }, [delay]);

  const waitForMs = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  useEffect(() => {
    let isActive = true;

    const carousel = async () => {
      let i = 0;
      while(isActive) {
        await typeSentence(sentences[i]);
        await waitForMs(1500);
        await deleteSentence();
        await waitForMs(500);
        i++;
        if(i >= sentences.length) {
          i = 0;
        }
      }
    };

    carousel();
    return () => {
      isActive = false;
    };

  }, [deleteSentence, sentences, typeSentence]);

  return (
    <span className='typewriter'>
      <h1 ref={elRef}></h1>
    </span>
  )
}

Typewriter.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number
}

export default Typewriter;