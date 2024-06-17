
import CardsTripList from '../components/CardsList/CardsTripList.jsx'
import CardsPostList from "../components/CardsList/CardsPostList.jsx";
// import CardTrip from '../components/Card/CardTrip'
// import CardPost from '../components/Card/CardPost'
// import ModalLogin from '../components/UI/Modal/ModalLogin.jsx'
import ContentSiteNotAuth from '../components/Content/ContentSiteNotAuth.jsx';
import CardPostDetail from '../components/Card/CardPostDetail.jsx';
import CardTripDetail from '../components/Card/CardTripDetail.jsx';


export const spareRoutes = [
  { path: '/', element: <ContentSiteNotAuth />},
  //   { path: '/register', element: <Register /> },
  // { path: '/',  element: <ContentSiteNotAuth />},
  //   { path: '/about', element: <About /> },
  //   { path: '/contacts', element: <Contacts /> },
]

//  element: <ContentSiteNotAuth />  , element: <CardsTripList />  element: <ModalLogin /> 

export const authRoutes = [
  { path: '/trips', element: <CardsTripList /> },
  { path: '/trips/:id', element: <CardTripDetail/> },
  { path: '/posts', element: <CardsPostList /> },
  { path: '/posts/:id', element: <CardPostDetail /> },
]