import { Link } from "react-router-dom";
import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header({ headerData }) {
  const { t } = useTranslation();
  return (
    <div className="headeres">
      <div className="container">
        <h2>{headerData.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: headerData.subTitle,
          }}
          className="headeres--text"
        />
        <Link to="/portal-category/volunteer/register">
          {t("voluntery.Signup")}
        </Link>
      </div>
    </div>
  );
}
export default Header;
