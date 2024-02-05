import { useState } from 'react';
import './Footer.styles.scss'
import { useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const currentDate = new Date();
    setYear(currentDate.getFullYear());
  }, [year])

  return (
    <div className='footer'>
      <span className='copyright-text'>&copy; {year} Raluca Pârvan</span>
    </div>
  )
}

export default Footer;