import "./expertActivity.scss";
import { useState } from "react";
import calendarSvg from "../../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../../assets/images/portal/cabinetVolunteer/eye.svg";
import BtnComp from "../components/btn/BtnComp";
import CardComp from "../components/card/CardComp";
import { useCabinetVolunteerFetching } from "../volunteering/hooks/useCabinetVoluneerFetching";
import { Spinner } from "../../../../../component";
import { filteredArrFun } from "../volunteering/extra";
import { useCabinetExpertActivity } from "./hooks/useCabinetExpertActivity";

const btnGroup = [
  { id: 1, label: "Barchasi", type: "all" },
  { id: 2, label: "принят", type: "success" },
  { id: 3, label: "Отклонен", type: "danger" },
];

const ExpertActivity = () => {
  const [activeBtn, setActiveBtn] = useState({ id: 1, type: "all" });
  const { error, loading, data } = useCabinetExpertActivity();

  if (loading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (data.length === 0) {
    return <p>Hozirda ma'lumot mavjud emas</p>;
  }

  const handleBtn = (el) => {
    setActiveBtn({ id: el.id, type: el.type });
  };
  const filteredArr = filteredArrFun(data, activeBtn.type);

  return (
    <div className="container-expert">
      <div className="container-expert-inner">
        <div className="container-expert-inner_btnContainer">
          {btnGroup.map((el) => (
            <BtnComp
              el={el}
              activeBtn={activeBtn}
              handleBtn={handleBtn}
              key={el.id}
            />
          ))}
        </div>
        <div className="container-expert-inner_cardContainer">
          {filteredArr.map((el, index) => (
            <CardComp el={el} calendarSvg={calendarSvg} eyeSvg={eyeSvg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertActivity;
