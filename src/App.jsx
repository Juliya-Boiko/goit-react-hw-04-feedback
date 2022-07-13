import 'modern-normalize';
import { useState, useEffect } from 'react';
import { Container } from './components/common/Container.styled';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPersentage] = useState(0);

  const handlerGood = () => {
    setGood(prevCounter => prevCounter + 1);
  }
  const handlerNeutral = () => {
    setNeutral(prevCounter => prevCounter + 1);
  }
  const handlerBad = () => {
    setBad(prevCounter => prevCounter + 1);
  }

  useEffect(() => { setTotal((good + neutral + bad)) }, [good, neutral, bad]);
  useEffect(() => { setPersentage(Math.round(good * 100 / total))}, [good, total]);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions handlerGood={handlerGood} handlerNeutral={handlerNeutral} handlerBad={handlerBad} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? 
          <Notification message="There is no feedback" /> :
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percentage} />
        }
      </Section>
    </Container>
  );
}