import "./formComp.scss";
import penSvg from "../../../../../../../../assets/images/portal/privateInformation/pen.svg";
import calendarSvg from "../../../../../../../../assets/images/portal/privateInformation/calendar.svg";
import { MySelect } from "../../../../../../communityAssociation/pages/communityAssociationRegister/components";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { pink } from "@mui/material/colors";
const locationDataChange = createSelector(
  (store) => store.community.locationGet,
  (location) => {
    return location.map((el) => ({
      ...el,
      label: el.name ? el.name : "Uzbekistan",
    }));
  }
);

const FormComp = ({ handleChange, data, el, handleSubmit, deleteFunction }) => {
  const locationData = useSelector(locationDataChange);
  const findCountry = locationData.find(
    (country) => country.id === el?.location_id
  );

  return (
    <>
      <div className="jobCont-hl"></div>
      <form className="jobCont-cabinet" onSubmit={handleSubmit}>
        <button
          className="jobCont-cabinet-btn"
          onClick={() => deleteFunction(el.id)}
        >
          <DeleteForeverTwoToneIcon
            sx={{ color: pink[500] }}
            fontSize="large"
          />
        </button>
        <div className="form-cont">
          <div className="form-cont-left">
            <div className="form-cont-left-select">
              <MySelect
                value={findCountry ? findCountry?.label : ""}
                handleChange={handleChange}
                data={locationData}
                text="Ish joyi joylashgan davlat"
                valueKey={"location_id"}
                comId={el.id}
              />
            </div>

            <div className="form-cont-left-fieldCont">
              <label htmlFor="position">
                Lavozimi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  value={el.position}
                  onChange={(evt) =>
                    handleChange({
                      key: "position",
                      value: evt.target.value,
                      comId: el.id,
                    })
                  }
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="form-cont-left-checkBox">
              <input
                type="checkbox"
                checked={el.status}
                onChange={(evt) =>
                  handleChange({
                    key: "status",
                    value: evt.target.checked,
                    comId: el.id,
                  })
                }
              />
              <span>Hozirda shu sohada ishlayapti</span>
            </div>

            <div className="form-cont-left-fieldCont">
              <label htmlFor="yearOfStart">
                Ish boshlagan yili <span>*</span>
              </label>
              <div>
                <input
                  type="date"
                  id="yearOfStart"
                  value={el.start_date}
                  onChange={(evt) =>
                    handleChange({
                      key: "start_date",
                      value: evt.target.value,
                      comId: el.id,
                    })
                  }
                />
                <img src={calendarSvg} alt="cal" />
              </div>
            </div>
          </div>

          <div className="form-cont-right">
            <div className="form-cont-right-fieldCont">
              <label htmlFor="jobcity">
                Ish joyi joylashgan davlatni mintaqasi yoki shahar{" "}
                <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="jobcity"
                  value={el.city}
                  onChange={(evt) =>
                    handleChange({
                      key: "city",
                      value: evt.target.value,
                      comId: el.id,
                    })
                  }
                />
                <img src={penSvg} alt="cal" />
              </div>
            </div>

            <div className="form-cont-right-fieldCont">
              <label htmlFor="jobplace">
                Ish joyi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="jobplace"
                  value={el.company}
                  onChange={(evt) =>
                    handleChange({
                      key: "company",
                      value: evt.target.value,
                      comId: el.id,
                    })
                  }
                />
                <img src={penSvg} alt="cal" />
              </div>
            </div>

            <div className="form-cont-right-fieldCont">
              <label htmlFor="yearOfEnd">
                Tamomlagan yil <span>*</span>
              </label>
              <div>
                <input
                  type="date"
                  id="yearOfEnd"
                  value={el.finish_date}
                  onChange={(evt) =>
                    handleChange({
                      key: "finish_date",
                      value: evt.target.value,
                      comId: el.id,
                    })
                  }
                />
                <img src={calendarSvg} alt="cal" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormComp;
