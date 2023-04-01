import "./ExpertRegister.scss";
import Header from "../../component/Layout/Header/Header";
import { useState } from "react";
import RegisterItem1 from "./components/register1/RegisterItem1";
import RegisterItem2 from "./components/register2/RegisterItem2";
import RegisterItem3 from "./components/register3/RegisterItem3";
import RegisterItem4 from "./components/register4/RegisterItem4";
import RegisterItem5 from "./components/register5/RegisterItem5";
import ExpertTitle from "../Expert/components/ExpertTitle/ExpertTitle";

export default function ExpertRegister() {
  const [activeBarItem, setactiveBarItem] = useState(0);
  const url = [
    { title: "Asosiy", url: "/" },
    { title: "Ro‘yxatdan o‘tish", url: "" },
  ];

  return (
    <>
      <Header />
      <main className="expertregister">
        <div className="container">
          <ExpertTitle title={"Ro‘yxatdan o‘tish"} url={url} />
          <div className="expertregister-main">
            <ul className="expertregister-main-bar">
              {[
                "Shaxsiy ma’lumotingiz",
                "Oliy ma’lumotingiz",
                "Mehnat faoliyatingiz",
                "Ilmiy faoliyatingiz",
                "Taklifingiz",
              ].map((el, index) => {
                return (
                  <li
                    key={index}
                    className="expertregister-main-bar-item"
                    onClick={() => setactiveBarItem(index)}
                  >
                    <div
                      className={
                        activeBarItem === index
                          ? "expertregister-main-bar-item-border activeBarItem"
                          : "expertregister-main-bar-item-border"
                      }
                    ></div>
                    <span>{el}</span>
                  </li>
                );
              })}
            </ul>
            <div className="expertregister-main-list">
              <RegisterItem1 activeBarItem={activeBarItem} />
              <RegisterItem2 activeBarItem={activeBarItem} />
              <RegisterItem3 activeBarItem={activeBarItem} />
              <RegisterItem4 activeBarItem={activeBarItem} />
              <RegisterItem5 activeBarItem={activeBarItem} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}