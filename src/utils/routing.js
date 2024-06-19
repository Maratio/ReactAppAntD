
import CardsTripList from '../components/CardsList/CardsTripList.jsx'
import CardsPostList from "../components/CardsList/CardsPostList.jsx";
import CardPostDetail from '../components/Card/CardPostDetail.jsx';
import CardTripDetail from '../components/Card/CardTripDetail.jsx';
import ModalPostAdd from '../components/UI/Modal/ModalPostAdd.jsx';
import ModalPostUpdate from '../components/UI/Modal/ModalPostUpdate.jsx';
import ModalLogin from '../components/UI/Modal/ModalLogin.jsx';
import ContentSite from '../components/Content/ContentSite.jsx';
import CardsFototList from '../components/CardsList/CardsFotoList.jsx';
import CardFotoDetail from '../components/Card/CardFotoDetail.jsx';
import ModalFotoAdd from '../components/UI/Modal/ModalFotoAdd.jsx';
import About from '../routes/About.jsx';
import Contacts from '../routes/Contacts.jsx';
import Profile from '../routes/Profile.jsx';
import NotFound from '../routes/NotFound.jsx';


export const spareRoutes = [
  { path: '*', element: <NotFound/> },
  { path: '/', element: <ContentSite /> },
  { path: '/login', element: <ModalLogin /> },
  { path: '/about', element: <About /> },
  { path: '/contacts', element: <Contacts /> },
  { path: '/profile', element: <Profile /> },


]


export const authRoutes = [
  { path: '/trips', element: <CardsTripList /> },
  { path: '/trips/:id', element: <CardTripDetail /> },
  { path: '/posts', element: <CardsPostList /> },
  { path: '/posts/:id', element: <CardPostDetail /> },
  { path: '/posts/new', element: <ModalPostAdd /> },
  { path: '/posts/:id/update', element: <ModalPostUpdate /> },
  { path: '/photos', element: <CardsFototList /> },
  { path: '/photos/:id', element: <CardFotoDetail /> },
  { path: '/photos/new', element: <ModalFotoAdd /> },
]
