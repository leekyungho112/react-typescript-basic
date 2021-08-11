import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? 'red' : 'blue')};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => {
  return (
    <div>
      <Container isBlue={count > 10}>{count}</Container>
    </div>
  );
};

export default Number;
