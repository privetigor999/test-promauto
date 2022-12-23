import React from "react";
import axios, { AxiosError } from "axios";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Fullfield } from "./Fullfield";
import { IData } from "../interfaces/data";

export const Request: React.FC = () => {
  const [status, setStatus] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [data, setData] = React.useState<IData | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("loading");
        const resp = await axios.get<IData>(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        setData(resp.data);
        setStatus("fullfield");
      } catch (e) {
        setData(null);
        setStatus("error");
        setErrorMessage((e as AxiosError).message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Задание 1: асинхронный запрос</h3>
      {status === "loading" && <Loading />}
      {status === "error" && <Error message={errorMessage} />}
      {status === "fullfield" && <Fullfield data={data} />}
    </div>
  );
};
