import React, { useCallback } from "react";
import { VFC } from "react";

interface Props {
  loadData: () => void;
  animalData: string[];
  animalIndex: number;
  setAnimalIndex: React.Dispatch<React.SetStateAction<number>>;
  openModal: () => void;
}

const ImageContainer: VFC<Props> = ({
  loadData,
  animalData,
  animalIndex,
  setAnimalIndex,
  openModal,
}) => {
  console.log(animalData);

  const onClickNext = useCallback(() => {
    if (animalIndex === Math.floor(animalData.length / 2)) {
      for (let i = 0; i < 5; i++) {
        loadData();
      }
    }
    setAnimalIndex((prev) => prev + 1);
  }, [animalData.length, animalIndex, loadData, setAnimalIndex]);
  return (
    <>
      <div style={{ width: "400px", height: "400px" }}>
        <button>prev</button>
        {animalData.length !== 0 && (
          <img
            onClick={openModal}
            style={{ width: "100%", height: "100%" }}
            src={animalData[animalIndex]}
            alt=""
          ></img>
        )}
        <button onClick={onClickNext}>next</button>
      </div>
    </>
  );
};

export default ImageContainer;
