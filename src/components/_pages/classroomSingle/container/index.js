import { Container } from '@mui/material';
import ErrorPage from '../../../_common/error';
import Loader from '../../../_common/loader';
import ClassroomRoutes from '../_routes'
import CurrentClassProvider from '../context/currentClassContext';
import CurrentUserInClassProvider from '../context/currentUserInClassContext';
import ClassroomSingleToolbar from './toolbar';

function ClassroomContainer({error, isLoading, classroom}) {
  if (error) {
    return <ErrorPage 
      code = {error.status}
      title = {error.title}
      details = {error.details}
      message = {error.message}/>
  } else if (isLoading) {
    return <Loader/>;
  } else {
    return (
      <CurrentClassProvider classroom_info={classroom}>
        {/* CurrentUserInClassProvider offer legacy supports */}
        <CurrentUserInClassProvider classroom_info={classroom}>
          <Container maxWidth='xl'>
            <ClassroomSingleToolbar title={classroom.class_name}/>
            <ClassroomRoutes classroom={classroom}/>
          </Container>
        </CurrentUserInClassProvider>
      </CurrentClassProvider>
    );
  }
}

export default ClassroomContainer;
