import React, { useState, useEffect } from "react";

const Card = () => {
  const initalvalue = [{ email: "Aniket King", password: "24243535" }];
  const [datas, setdatas] = useState(initalvalue);
  const Fetchdata = async () => {
    try {
      //    const url = '/api/data'
      const data = await fetch("http://localhost:3001/api/data");
      const parsedata = await data.json();
      setdatas(parsedata);
    } catch (e) {
      console.log("failed to fetch data");
      console.log(e);
    }
  };
  useEffect(() => {
    Fetchdata();
  });
  return (
    <div className="box">
      {datas.map((mydata) => {
        return (
          <div className="card" style={{width: '18rem'}}>
            <img src={mydata.img} className="card-img-top" alt="img not found" />
            <div className="card-body">
              <h5 className="card-title">{mydata.title}</h5>
              <p className="card-text">
              {mydata.desc}
              </p>
              <a href={mydata.downloadurl} className="btn btn-primary" target="_blank">
                download
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;