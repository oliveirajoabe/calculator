import * as S from "./styles";

interface Props {
  text: string;
}

export default function Label({ text }: Props) {
  return <S.Label>{text}</S.Label>;
}
