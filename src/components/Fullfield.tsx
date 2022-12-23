import React from "react";
import { IData } from "../interfaces/data";

interface IFullfieldProps {
  data: IData | null;
}

export const Fullfield: React.FC<IFullfieldProps> = ({ data }) => {
  console.log(data);

  return (
    <div>
      Запрос выполнен успешно
      <p>
        Ответ: <span>{JSON.stringify(data)}</span>
      </p>
    </div>
  );
};
