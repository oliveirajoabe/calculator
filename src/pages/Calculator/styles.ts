import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width.shapeXl};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 3rem 0 1.5rem 0;

  .calcTitle {
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  .calTheme {
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }

  @media screen and (max-width: 768px) {
    width: ${({ theme }) => theme.width.shapeMd};
  }
  @media screen and (max-width: 375px) {
    width: ${({ theme }) => theme.width.shapeSm};
  }
`;

export const ShapeResult = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTotal};
  color: ${({ theme }) => theme.colors.secondary};
  width: ${({ theme }) => theme.width.shapeXl};
  height: 100px;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  @media screen and (max-width: 768px) {
    width: ${({ theme }) => theme.width.shapeMd};
  }
  @media screen and (max-width: 375px) {
    width: ${({ theme }) => theme.width.shapeSm};
  }
`;

export const ShapeNumbers = styled.div`
  background-color: ${({ theme }) => theme.colors.bgNumbers};
  width: ${({ theme }) => theme.width.shapeXl};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;

  .numbers {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
  }
  .resetAndResult {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      width: 50%;
      &:first-child {
        width: calc(50% - 20px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: ${({ theme }) => theme.width.shapeMd};
  }
  @media screen and (max-width: 375px) {
    width: ${({ theme }) => theme.width.shapeSm};
  }
`;
