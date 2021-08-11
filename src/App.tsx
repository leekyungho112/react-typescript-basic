import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input } from './Input';
import Number from './Number';

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const add = () => setCounter(counter + 1);
  const minus = () => setCounter(counter - 1);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    console.log(name);
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div>
      <Form onFormSubmit={onFormSubmit}>
        <Input value={name} onChange={onChange} />
      </Form>
      <Number count={counter} />
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default App;
