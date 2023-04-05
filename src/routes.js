import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Spinner } from "./component";
import ScrollTop from "./hoc/ScrollTop";
import ExpertLayout from "./pages/Portal/expert/ExpertLayout";
import ExpertEmploye from "./pages/Portal/expert/pages/ExpertEmploye/ExpertEmploye";
import ExpertCouncil from "./pages/Portal/expert/pages/ExpertHome/ExpertCouncil";
import VolunterLayout from "./pages/Portal/volunter/VolunterLayout";
import VolunterProfile from "./pages/Portal/volunter/pages/VolunterProfile/VolunterProfile";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SinglePage = lazy(() => import("./pages/singlePage/SinglePage"));
const BoardTrustees = lazy(() => import("./pages/boardTrustees/BoardTrustees"));
const PublicAssociations = lazy(() => import("./pages/compatriots"));
const StatesFriendshipSociety = lazy(() =>
  import("./pages/compatriots/statesFriendshipSociety/StatesFriendshipSociety")
);
const Portal = lazy(() => import("./pages/Portal/Portal"));
const Projects = lazy(() => import("./pages/Projects"));
const InformationServices = lazy(() =>
  import("./pages/InformationServices/InformationServices")
);
const Mediateka = lazy(() => import("./pages/Mediateka/Mediateka"));
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
  import("./pages/Portal/communityAssociation/communityAssociationLayout")
);

const CommunityAssociationHome = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/associationHome/AssociationHome"
  )
);

const CommunityAssociationAbout = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/associationAbout/CommunityAssociationAbout"
  )
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
  { path: "/registration/register", element: Register },
  { path: "/registration/signup", element: SignUp },
  { path: "/registration/signin", element: SignIn },
  { path: "/registration/recovery-password", element: RecoveryPassword },
  { path: "/registration/change-password", element: ChangePassword },
  {
    path: "/compatriots/public-association-events",
  },
  { path: "/information-service/:pageName", element: InformationServices },
  { path: "/:page/:id", element: NewsDetail },
  { path: "/projects", element: Projects },
  { path: "/contact", element: Contact },
  { path: "/flag", element: Flags },
  { path: "/anthem", element: Anthem },
  { path: "/coat", element: Coat },
  { path: "/information-service/mediateka", element: Mediateka },
  { path: "/expert/register", element: ExpertRegister },
  { path: "/hashtag/:tag", element: Hashtag },
  {
    path: "/expert",
    element: ExpertCouncil,
  },
  {
    path: "/expert/council/about",
    element: AboutCouncil,
  },
  {
    path: "/expert/employe",
    element: ExpertEmploye,
  },
  { path: "/expert/contact", element: Contact },
  { path: "/expert/profile", element: ExpertProfile },
  { path: "/expert/offers", element: ExpertOffers },
  { path: "/expert/offers/:id", element: ExpertOffersDetail },
];

const RoutesContainer = () => (
  <Router>
    <Layout>
      <Suspense fallback={<Spinner position="full" />}>
        <Routes>
          {routes.map((route, key) => {
            const RouteComponent = ScrollTop(route.element);
            return (
              <Route key={key} path={route.path} element={<RouteComponent />} />
            );
          })}
          <Route path="/portal-category/expert" element={<ExpertLayout />}>
            <Route index element={<ExpertCouncil />} />
            <Route path="council-about" element={<AboutCouncil />} />
            <Route path="employe" element={<ExpertEmploye />} />
            <Route path="profile" element={<ExpertProfile />} />
            <Route path="offers" element={<ExpertOffers />} />
            <Route path="offers/:id" element={<ExpertOffersDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route
            path="/portal-category/community-association"
            element={<CommunityAssociationLayout />}
          >
            <Route index element={<CommunityAssociationHome />} />
            <Route path="about" element={<CommunityAssociationAbout />} />
          </Route>

          <Route path="/portal-category/volunteer" element={<VolunterLayout />}>
            <Route index element={<VolunterHome />} />
            <Route path="profile" element={<VolunterProfile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
);

export default RoutesContainer;
