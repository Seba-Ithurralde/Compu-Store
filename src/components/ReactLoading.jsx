import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

export default function Loading({ text }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <ReactLoading
          type="cylon"
          color="red"
          height="50px"
          width="50px"
        />
        <h4>{text}</h4>
    </>
  );
}