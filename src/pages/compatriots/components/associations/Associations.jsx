import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./associations.scss";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Associations = ({ data }) => {
  const [expanded, setExpanded] = React.useState("");
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const [associations, setassociations] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setassociations(() =>
      data?.sort((a, b) =>
        a[`country_${lng}`].localeCompare(b[`country_${lng}`])
      )
    );
  }, [data, lng]);

  return (
    <section className="associations">
      <div className="associations__container container">
        <p style={{ color: "#065ea9" }}>{t("aboutPage.section1.ptext1")}</p>
        <div className="associations__inner">
          <h2 className="associations__title">{t("Associations")}</h2>
          <ul className="associations__accordions">
            {associations?.map((el) => (
              <Accordion
                variant="li"
                component="li"
                className={`associations__accordion`}
                expanded={expanded === el.panel}
                style={{
                  margin: expanded === el.panel && 0,
                  boxShadow: "transparent",
                  padding: "0",
                }}
                onChange={handleChange(el.panel)}
                key={el.id}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: el.panel === expanded ? "#065EA9" : "" }}
                    />
                  }
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                  className="associations__accordion_header">
                  <Typography
                    variant="span"
                    component="span"
                    className="associations__accordion_header--span"
                    sx={{ flexShrink: 0 }}
                    style={{ color: el.panel === expanded ? "#065EA9" : "" }}>
                    {el[`country_${lng}`]}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <ul className="associations__accordion_body">
                    {el?.categories?.map((category, index) => (
                      <li
                        className="associations__accordion_item"
                        key={category.id}>
                        {index + 1}.{" "}
                        {category[`title_${lng}`]
                          ?.split(" ")
                          ?.slice(
                            0,
                            category[`title_${lng}`]?.split(" ").length - 1
                          )
                          .join(" ")}
                        <Link
                          className="associations__accordion_item--link"
                          to={`/compatriots/public-associations/${category?.id}`}>
                          {" "}
                          {
                            category[`title_${lng}`]?.split(" ")[
                              category[`title_${lng}`]?.split(" ").length - 1
                            ]
                          }
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Associations;
