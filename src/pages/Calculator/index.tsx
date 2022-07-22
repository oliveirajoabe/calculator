import React from "react";
import Button from "../../components/Button";
import Label from "../../components/Label";
import * as S from "./styles";

export default function Calculator() {
  const [calc, setCalc] = React.useState("");

  return (
    <S.Container>
      <S.Header>
        <div className="calcTitle">
          <Label text="calc" />
        </div>
        <div className="calTheme">
          <Label text="theme" />
        </div>
      </S.Header>
      <S.ShapeResult>
        <Label text={calc} />
      </S.ShapeResult>
      <S.ShapeNumbers>
        <div className="numbers">
          <Button label="7" onClick={() => setCalc(calc + 7)} />
          <Button label="8" onClick={() => setCalc(calc + 8)} />
          <Button label="9" onClick={() => setCalc(calc + 9)} />
          <Button
            label="DEL"
            onClick={() => setCalc(calc.substring(0, calc.length - 1))}
            styleType="secondary"
          />
          <Button label="4" onClick={() => setCalc(calc + 4)} />
          <Button label="5" onClick={() => setCalc(calc + 5)} />
          <Button label="6" onClick={() => setCalc(calc + 6)} />
          <Button label="+" onClick={() => setCalc(`${calc}+`)} />
          <Button label="1" onClick={() => setCalc(calc + 1)} />
          <Button label="2" onClick={() => setCalc(calc + 2)} />
          <Button label="3" onClick={() => setCalc(calc + 3)} />
          <Button label="-" onClick={() => setCalc(`${calc}-`)} />
          <Button label="." onClick={() => setCalc(`${calc}.`)} />
          <Button label="0" onClick={() => setCalc(calc + 0)} />
          <Button label="/" onClick={() => setCalc(`${calc}/`)} />
          <Button label="X" onClick={() => setCalc(`${calc}*`)} />
        </div>
        <div className="resetAndResult">
          <Button label="RESET" onClick={() => setCalc("")} />
          <Button
            label="="
            onClick={() => setCalc(eval(calc).toString())}
            styleType="thirdButton"
          />
        </div>
      </S.ShapeNumbers>
    </S.Container>
  );
}
