
import CardsTripList from '../pages/CardsTripList.jsx'
import CardsPostList from "../pages/CardsPostList.jsx";
import CardPostDetail from '../components/Card/CardPostDetail.jsx';
import CardTripDetail from '../components/Card/CardTripDetail.jsx';
import ModalPostAdd from '../components/UI/Modal/ModalPostAdd.jsx';
import ModalPostUpdate from '../components/UI/Modal/ModalPostUpdate.jsx';
import ModalLogin from '../components/UI/Modal/ModalLogin.jsx';
import ContentSite from '../pages/ContentSite.jsx';
import CardsFotoList from '../pages/CardsFotoList.jsx';
import CardFotoDetail from '../components/Card/CardFotoDetail.jsx';
import ModalFotoAdd from '../components/UI/Modal/ModalFotoAdd.jsx';
import About from '../routes/About.jsx';
import Contacts from '../routes/Contacts.jsx';
import Profile from '../routes/Profile.jsx';
import NotFound from '../routes/NotFound.jsx';
import CardsCommentList from '../pages/CardsCommentList .jsx';
import CardCommentDetail from '../components/Card/CardCommentDetail.jsx';
import ModalCommentAdd from '../components/UI/Modal/ModalCommentAdd.jsx';


export const spareRoutes = [
  { path: '*', element: <NotFound /> },
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
  { path: '/photos', element: <CardsFotoList /> },
  { path: '/photos/:id', element: <CardFotoDetail /> },
  { path: '/photos/new', element: <ModalFotoAdd /> },
  { path: '/comments/:id', element: <CardCommentDetail /> },
  { path: '/posts/:postId/comments', element: <CardsCommentList /> },
  { path: '/comments/:postId/new', element: <ModalCommentAdd /> },
  { path: '/comments', element: <CardsCommentList /> },
]
