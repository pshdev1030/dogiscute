import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import ImageContainer from "./Component/ImageContainer/ImageContainer";
import { Modal } from "./Component/Modal/Modal";
import fetchData from "./util";

type animal = "cat" | "dog";

function App() {
  const [curAnimal, setCurAnimal] = useState<animal>("dog");
  const [keyArr, setKeyArr] = useState<string>("");
  const [dogData, setdogData] = useState<string[]>([]);
  const [catData, setcatData] = useState<string[]>([]);
  const [dogIdx, setDogIdx] = useState<number>(0);
  const [catIdx, setCatIdx] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onChangeSetKey = useCallback((e) => {
    setKeyArr((prev) =>
      prev.length < 3 ? prev + e.key : prev.substring(1, 3) + e.key
    );
  }, []);

  const loadData = useCallback(() => {
    fetchData(curAnimal).then((data) => {
      curAnimal === "dog"
        ? setdogData((prev) => [...prev, data])
        : setcatData((prev) => [...prev, data]);
    });
  }, [curAnimal]);

  const setOpenAnimalModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  useEffect(() => {
    if (keyArr.toLowerCase() === "cat" && curAnimal !== "cat") {
      setCurAnimal("cat");
    } else if (keyArr.toLowerCase() === "dog" && curAnimal !== "dog") {
      setCurAnimal("dog");
    }
  }, [keyArr, curAnimal]);

  useEffect(() => {
    window.addEventListener("keyup", onChangeSetKey);
    return () => {
      window.removeEventListener("keyup", (e) => onChangeSetKey);
    };
  }, []);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      fetchData("cat").then((data) => {
        setcatData((prev) => [...prev, data]);
      });
    }

    for (let i = 0; i < 10; i++) {
      fetchData("dog").then((data) => {
        setdogData((prev) => [...prev, data]);
      });
    }
  }, []);

  return (
    <>
      <div>{`헉${curAnimal === "dog" ? "강아지" : "고양이"}가너무귀여워`}</div>
      <div>{`${curAnimal === "dog" ? "강아지" : "고양이"}`}</div>
      {!dogData.length && !catData.length && (
        <button onClick={loadData}>시작하기</button>
      )}
      {curAnimal === "dog" && (
        <ImageContainer
          loadData={loadData}
          animalData={dogData}
          animalIndex={dogIdx}
          setAnimalIndex={setDogIdx}
          openModal={setOpenAnimalModal}
        />
      )}
      {curAnimal === "cat" && (
        <ImageContainer
          loadData={loadData}
          animalData={catData}
          animalIndex={catIdx}
          setAnimalIndex={setCatIdx}
          openModal={setOpenAnimalModal}
        />
      )}
      {openModal && <Modal />}
    </>
  );
}

export default App;
