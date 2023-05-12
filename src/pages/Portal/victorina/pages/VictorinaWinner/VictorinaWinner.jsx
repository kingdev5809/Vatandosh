import { useTranslation } from "react-i18next";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import img from "../../../../../assets/images/portal/4.png";
import "./VictorinaWinner.scss";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../../../services/api/utils";

export default function VictorinaWinner() {
  const { t } = useTranslation();
  const { id } = useParams();

  const quizData = useSelector((state) =>
    state.quizSlice.quizData.participants.find((evt) => evt?.id === Number(id))
  );

  console.log(quizData);

  const url = [
    { title: t("expert.main"), url: "/portal-category/victorina" },
    {
      title: t("victorina.end"),
      url: "/portal-category/victorina/finished-projects",
    },
    {
      title: t("victorina.bestimgproject"),
      url: "/portal-category/victorina/finished-projects/image-project",
    },
    { title: t("victorina.winner"), url: "" },
  ];

  return (
    <main className="victorinawinner">
      <div className="container">
        <ExpertTitle title={t("victorina.winner")} url={url} />
        <div className="victorinawinner-wrapper">
          <div className="victorinawinner-main">
            <img src={img} alt="error" />
            <div className="victorinawinner-main-profile">
              <img src={`${imageUrl}/${quizData?.user?.avatar}`} alt="error" />
              <div className="victorinawinner-main-profile-desc">
                <p>{quizData.user.name}</p>
                <span>{quizData.position}-o‘rin g‘olibi</span>
              </div>
            </div>
            <h3>{t("victorina.winnerprice")}</h3>
            <p>{quizData.description}</p>
            <ShareFriends />
          </div>
          <CouncilStatics />
        </div>
      </div>
    </main>
  );
}
