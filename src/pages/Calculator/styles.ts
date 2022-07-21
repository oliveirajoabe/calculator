import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
