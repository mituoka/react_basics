import React, { useEffect, useState } from "react";
import Colofulmessage from "./compornent/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceshowFlag] = useState(false);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setFaceshowFlag(!faceShowFlag);
  };

  // useEffectを使いnumの値に紐づくように設定する
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceshowFlag(true);
    } else {
      faceShowFlag && setFaceshowFlag(false);
    }
  }, [num]);
  // []は最初の一回だけ
  // numが変化した時だけ処理が通るようにできる

  return (
    <>
      <Colofulmessage color="pink" message="ハロー" />
      <Colofulmessage color="blue" message="お元気ですか" />
      <button onClick={onClickCountup}>ボタン</button>
      <p>{num}</p>
      <button onClick={onClickShowFlag}>on/off</button>
      {faceShowFlag && <p>(*w*)</p>}
    </>
  );
};

export default App;
