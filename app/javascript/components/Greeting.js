import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMessages } from '../redux/messages/messages';
import './common.css';

const Greeting = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state);

  console.log(messages);

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div className="greeting">
      <p>{messages[Math.floor(Math.random() * messages.length)]}</p>
    </div>
  );
};

export default Greeting;
