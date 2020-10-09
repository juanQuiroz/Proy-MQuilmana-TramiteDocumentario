import React, { Fragment } from "react";
import home from "../assets/img/home.svg";
import muniquilmanaescudo from "../assets/img/muniquilmanaescudo.png";

const Home = () => {
  return (
    <Fragment>
      <div className="flex h-16 p-4 py-2 bg-gray-300">
        <img className="h-12" src={muniquilmanaescudo} alt="" />
        <h1 classNam="h-16 bg-blue-700">
          Municipalidad Distrital de Quilmaná - Sistema de Seguimiento{" "}
        </h1>
      </div>
    </Fragment>
  );
};

export default Home;
