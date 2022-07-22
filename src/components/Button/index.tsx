import Label from "../Label";
import * as S from "./styles";
interface Props {
  label: string;
  onClick: () => void;
  styleType?: "primary" | "secondary" | "thirdButton";
}

export default function Button({
  label,
  onClick,
  styleType = "primary",
}: Props) {
  if (styleType === "secondary") {
    return (
      <S.SecondaryButton type="button" onClick={onClick}>
        <Label text={label} />
      </S.SecondaryButton>
    );
  }

  if (styleType === "thirdButton") {
    return (
      <S.ThirdButton type="button" onClick={onClick}>
        <Label text={label} />
      </S.ThirdButton>
    );
  }

  return (
    <S.Button type="button" onClick={onClick}>
      <Label text={label} />
    </S.Button>
  );
}
