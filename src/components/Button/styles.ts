import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0 1rem;
  height: 3rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primaryButton};
  box-shadow: -2px 3px 0 ${({ theme }) => theme.colors.primaryButton};
  color: ${({ theme }) => theme.colors.primaryButton};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;

  &:active {
    box-shadow: inset -2px 4px 0 ${({ theme }) => theme.colors.primaryButton};
    font-size: 0.9rem;
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.bgSecondaryButton};
  color: ${({ theme }) => theme.colors.light};
  border-color: ${({ theme }) => theme.colors.secondaryButton};
  box-shadow: -2px 3px 0 ${({ theme }) => theme.colors.secondaryButton};
  &:active {
    box-shadow: inset -2px 4px 0 ${({ theme }) => theme.colors.secondaryButton};
  }
`;

export const ThirdButton = styled(Button)`
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.orange700};
  box-shadow: -2px 3px 0 ${({ theme }) => theme.colors.orange700};
  &:active {
    box-shadow: inset -2px 4px 0 ${({ theme }) => theme.colors.orange700};
  }
`;
