import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import fetchData from "./util";

type animal = "cat" | "dog";

function App() {
  const [curAnimal, setCurAnimal] = useState<animal>("dog");
  const [keyArr, setKeyArr] = useState<string>("");
  const [dogData, setdogData] = useState<string[]>([]);
  const [catData, setcatData] = useState<string[]>([]);

  const onChangeSetKey = useCallback((e) => {
    setKeyArr((prev) =>
      prev.length < 3 ? prev + e.key : prev.substring(1, 3) + e.key
    );
  }, []);

  const loadData = useCallback(() => {
    fetchData(curAnimal).then((data) => {
      console.log(data);
      curAnimal === "dog"
        ? setdogData((prev) => [...prev, data.data.message])
        : setcatData((prev) => [...prev, data.data[0].url]);
    });
  }, [curAnimal]);

  useEffect(() => {
    if (keyArr === "cat" && curAnimal !== "cat") {
      setCurAnimal("cat");
    } else if (keyArr === "dog" && curAnimal !== "dog") {
      setCurAnimal("dog");
    }
  }, [keyArr, curAnimal]);

  useEffect(() => {
    window.addEventListener("keyup", onChangeSetKey);
    return () => {
      window.removeEventListener("keyup", (e) => onChangeSetKey);
    };
  }, []);

  return (
    <>
      <div>{`헉${curAnimal === "dog" ? "강아지" : "고양이"}가너무귀여워`}</div>
      <div>{`${
        curAnimal === "dog" ? "강아지" : "고양이"
      }는완벽한동물이야`}</div>
      <button onClick={loadData}></button>
      {curAnimal === "dog" &&
        dogData.map((ele) => (
          <div style={{ width: "400px", height: "400px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              key={ele}
              src={ele}
              alt="강아지"
            />
          </div>
        ))}
      {curAnimal === "cat" &&
        catData.map((ele) => (
          <div style={{ width: "400px", height: "400px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              key={ele}
              src={ele}
              alt="고양이"
            />
          </div>
        ))}
    </>
  );
}

export default App;
