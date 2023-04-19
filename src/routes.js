import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout, Spinner } from "./component";
import ScrollTop from "./hoc/ScrollTop";
import ExpertLayout from "./pages/Portal/expert/ExpertLayout";
import ExpertEmploye from "./pages/Portal/expert/pages/ExpertEmploye/ExpertEmploye";
import ExpertCouncil from "./pages/Portal/expert/pages/ExpertHome/ExpertCouncil";
import VolunterCouncilAbout from "./pages/Portal/volunter/pages/VolunterCouncilAbout/VolunterCouncilAbout";
import VolunterAbout from "./pages/Portal/volunter/pages/VolunterAbout/VolunterAbout";
import VictorinaHome from "./pages/Portal/victorina/pages/VictorinaHome/VictorinaHome";
import VictorinaLayout from "./pages/Portal/victorina/pages/VictorinaLayout";
import { useSelector } from "react-redux";
import WebinarLayout from "./pages/Portal/webinar/WebinarLayout";
import WebinarHome from "./pages/Portal/webinar/pages/WebinarHome/WebinarHome";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() =>
  import(
    /*webpackChunkName: Home*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/About"
  )
);
const SinglePage = lazy(() =>
  import(
    /*webpackChunkName: SinglePage*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/singlePage/SinglePage"
  )
);
const BoardTrustees = lazy(() => import("./pages/boardTrustees/BoardTrustees"));
const PublicAssociations = lazy(() => import("./pages/compatriots"));
const StatesFriendshipSociety = lazy(() =>
  import("./pages/compatriots/statesFriendshipSociety/StatesFriendshipSociety")
);
const Portal = lazy(() =>
  import(
    /*webpackChunkName: Portal*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/Portal"
  )
);
const Projects = lazy(() => import("./pages/Projects"));
const InformationServices = lazy(() =>
  import("./pages/InformationServices/InformationServices")
);
const Mediateka = lazy(() =>
  import(
    /*webpackChunkName: Media*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Mediateka/Mediateka"
  )
);
const NotFound = lazy(() => import("./pages/404"));
const Flags = lazy(() => import("./pages/Symbols/Flag"));
const Anthem = lazy(() => import("./pages/Symbols/Anthem"));
const Coat = lazy(() => import("./pages/Symbols/Coat"));
const Direction = lazy(() =>
  import("./pages/About/component/Direction/BasicDirection")
);
const Management = lazy(() =>
  import("./pages/About/component/Management/Management")
);
const Hashtag = lazy(() => import("./pages/Hashtag/Hashtag"));
const ExpertProfile = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertProfil/ExpertProfil")
);
const ExpertRegister = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertRegister/ExpertRegister")
);
const NewsDetail = lazy(() => import("./pages/NewsDetail/NewsDetail"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const SetPassword = lazy(() =>
  import("./pages/Registration/pages/SetPassword/SetPassword")
);
const ChangePassword = lazy(() =>
  import("./pages/Registration/pages/ChangePassword/ChangePassword")
);
const RecoveryPassword = lazy(() =>
  import("./pages/Registration/pages/RecoveryPassword/RecoveryPassword")
);
const Register = lazy(() =>
  import("./pages/Registration/pages/Register/Register")
);
const ExpertOffers = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertOffers/ExpertOffers")
);
const ExpertOffersDetail = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertOffersDetail/ExpertOffersDetail")
);
const SignIn = lazy(() => import("./pages/Registration/pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/Registration/pages/SignUp/SignUp"));
const AboutCouncil = lazy(() =>
  import("./pages/Portal/expert/pages/AboutCouncil/AboutCouncil")
);

const VolunterHome = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterHome/VolunterHome")
);

const CommunityAssociationLayout = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationLayout*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/communityAssociation/CommunityAssociationLayout"
  )
);

const CommunityAssociationHome = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationHome*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/communityAssociation/pages/associationHome/AssociationHome"
  )
);

const CommunityAssociationEvents = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationEvents*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/communityAssociation/pages/associationsEvents/AssociationsEvents"
  )
);

const CommunityAssociationAbout = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/associationAbout/CommunityAssociationAbout"
  )
);

const CommunityAssociationCountry = lazy(() =>
  import("./pages/Portal/communityAssociation/pages/country/Country")
);

const CommunityAssociationRegister = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/communityAssociationRegister/CommunityAssociationRegister"
  )
);
const CommunityAssociationDetail = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationDetail*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/communityAssociation/pages/communityAssociationDetail/CommunityAssociationDetail"
  )
);
const Associations = lazy(() =>
  import("./pages/Portal/communityAssociation/pages/associations/Associations")
);

const VolunterLayout = lazy(() =>
  import("./pages/Portal/volunter/VolunterLayout")
);

const VolunterProfile = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterProfile/VolunterProfile")
);
const VolunterRegister = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterRegister/VolunterRegister")
);
const VolunterArticleDetail = lazy(() =>
  import(
    "./pages/Portal/volunter/pages/VolunterArticleDetail/VolunterArticleDetail"
  )
);
const VolunterActivityDetail = lazy(() =>
  import(
    "./pages/Portal/volunter/pages/VolunterActivityDetail/VolunterActivityDetail"
  )
);
const VolunterActivity = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterActivity/VolunterActivity")
);

const OnlineTeachingLayout = lazy(() =>
  import("./pages/Portal/OnlineTeaching/OnlineTeachingLayout")
);

const OnlineTeachingHome = lazy(() =>
  import(
    "./pages/Portal/OnlineTeaching/pages/OnlineTeachingHome/OnlineTeachingHome"
  )
);
const ListOfWinners = lazy(() =>
  import("./pages/Portal/victorina/pages/ListOfWinners/ListOfWinners")
);

const VictorinaWinner = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaWinner/VictorinaWinner")
);

const SearchResult = lazy(() => import("./pages/searchResult/SearchResult"));

const VictorinaProject = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaProject/VictorinaProject")
);

const VictorinaAbout = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaAbout/VictorinaAbout")
);

const VictorinaFinish = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaFinish/VictorinaFinish")
);

const MoreVictorina = lazy(() =>
  import("./pages/Portal/victorina/pages/MoreVictorina/MoreVictorina")
);
const AboutTeaching = lazy(() =>
  import("./pages/Portal/OnlineTeaching/pages/AboutTeaching/AboutTeaching")
);

const EmailVerify = lazy(() =>
  import("./pages/Registration/emailVerify/EmailVerify")
);

const ResetPassword = lazy(() =>
  import("./pages/Registration/resetPassword/ResetPassword")
);
const Cabinet = lazy(() => import("./pages/Portal/cabinet/Cabinet"));
const WebinarRegister = lazy(() =>
  import("./pages/Portal/webinar/pages/WebinarRegister/WebinarRegister")
);
const routes = [
  { path: "", element: Home },
  { path: "/about", element: About },
  { path: "/about/direction", element: Direction },
  { path: "/about/management", element: Management },
  { path: "/about/council-trustees", element: BoardTrustees },
  { path: "/compatriots/:pageUrl", element: SinglePage },
  { path: "/projects/:pageUrl", element: SinglePage },
  { path: "/compatriots/public-associations", element: PublicAssociations },
  {
    path: "/compatriots/public-associations/:categoryId",
    element: StatesFriendshipSociety,
  },
  {
    path: "/compatriots/public-associations/:country",
    element: StatesFriendshipSociety,
  },
  { path: "/portal", element: Portal },
  { path: "/information-service/:pageName", element: InformationServices },
  { path: "/:page/:id", element: NewsDetail },
  { path: "/projects", element: Projects },
  { path: "/contact", element: Contact },
  { path: "/flag", element: Flags },
  { path: "/anthem", element: Anthem },
  { path: "/coat", element: Coat },
  { path: "/information-service/mediateka", element: Mediateka },
  { path: "/hashtag/:tag", element: Hashtag },
  { path: "/search/:search", element: SearchResult },
];

const RoutesContainer = () => {
  const token = useSelector((state) => state.authSlice.token);

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, key) => {
            const RouteComponent = ScrollTop(route.element);
            return (
              <Route key={key} path={route.path} element={<RouteComponent />} />
            );
          })}

          {token ? (
            <>
              <Route path="/portal/cabinet" element={<Cabinet />} />
              <Route
                path="/registration/*"
                element={<Navigate to="/portal/cabinet" />}
              />
            </>
          ) : (
            <>
              <Route path="/registration/signup" element={<SignUp />} />
              <Route path="/registration/signin" element={<SignIn />} />
              <Route
                path="/registration/set-password"
                element={<SetPassword />}
              />
              <Route
                path="/registration/change-password"
                element={<ChangePassword />}
              />
              <Route
                path="/registration/recovery-password"
                element={<RecoveryPassword />}
              />
              <Route
                path="/registration/signup/api/reset/"
                element={<ResetPassword />}
              />
              <Route
                path="/registration/signup/api/verify/"
                element={<EmailVerify />}
              />
              <Route
                path="/portal/cabinet"
                element={<Navigate to="/portal" />}
              />
            </>
          )}
          <Route path="/portal-category/expert" element={<ExpertLayout />}>
            <Route index element={<ExpertCouncil />} />
            <Route path="council-about" element={<AboutCouncil />} />
            <Route path="expert-council" element={<ExpertEmploye />} />
            <Route path="profile/:id" element={<ExpertProfile />} />
            <Route path="offers" element={<ExpertOffers />} />
            <Route path="offers/:id" element={<ExpertOffersDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<ExpertRegister />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route
            path="/portal-category/community-association"
            element={<CommunityAssociationLayout />}
          >
            <Route index element={<CommunityAssociationHome />} />
            <Route path="about" element={<CommunityAssociationAbout />} />
            <Route
              path="country/:communityCountry"
              element={<CommunityAssociationCountry />}
            />
            <Route path="associations" element={<Associations />} />
           <Route path=":pageName" element={<CommunityAssociationEvents />} />
            <Route
              path="country/:communityCountry/:communityCountryId"
              element={<CommunityAssociationDetail />}
            />
            <Route
              path="application"
              element={<CommunityAssociationRegister />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/portal-category/volunteer" element={<VolunterLayout />}>
            <Route index element={<VolunterHome />} />
            <Route path="profile" element={<VolunterProfile />} />
            <Route path="register" element={<VolunterRegister />} />
            <Route path="volunter-employe" element={<VolunterAbout />} />
            <Route path="council-about" element={<VolunterCouncilAbout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="article/:id" element={<VolunterArticleDetail />} />
            <Route path="activity" element={<VolunterActivity />} />
            <Route path="activity/:id" element={<VolunterActivityDetail />} />
          </Route>
          <Route
            path="/portal-category/online-teaching"
            element={<OnlineTeachingLayout />}
          >
            <Route index element={<OnlineTeachingHome />} />
            <Route path="about" element={<AboutTeaching />} />
          </Route>
          <Route
            path="/portal-category/victorina"
            element={<VictorinaLayout />}
          >
            <Route index element={<VictorinaHome />}></Route>
            <Route path="contact" element={<Contact />} />
            <Route path="listwinners" element={<ListOfWinners />} />
            <Route path="winner/:id" element={<VictorinaWinner />} />
            <Route path="image-project" element={<VictorinaProject />} />
            <Route path="youtube-project" element={<VictorinaProject />} />
            <Route path="poem-project" element={<VictorinaProject />} />
            <Route path="edu-branding" element={<VictorinaProject />} />
            <Route path="victorina-finish" element={<VictorinaFinish />} />
            <Route path="victorina-more" element={<MoreVictorina />} />
            <Route path="about" element={<VictorinaAbout />} />
            <Route path="projects" element={<MoreVictorina />} />
            <Route path="finished-projects" element={<VictorinaFinish />} />
            <Route
              path="finished-projects/image-project"
              element={<VictorinaProject />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesContainer;
