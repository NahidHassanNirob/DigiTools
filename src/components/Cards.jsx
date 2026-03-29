import React, { use } from "react";
import Card from "./Card";

const Cards = ({ dataRespons }) => {
  const datas = use(dataRespons);

  return (
    <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {datas.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;
