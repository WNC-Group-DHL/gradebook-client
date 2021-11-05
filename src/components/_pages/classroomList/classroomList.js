import { Button, Container, Grid, useTheme } from '@mui/material';
import ErrorPage from '../../_common/error';
import Loader from '../../_common/loader';
import ClassroomListItem from './classroomListItem';

function ClassroomList({error, isLoaded, classrooms, handleRefresh}) {
  const theme = useTheme();

  if (error) {
    return <ErrorPage 
      code = {error.status}
      title = {error.title}
      details = {error.details}
      message = {error.message}
      backToHome = {false}>
        <Button onClick={handleRefresh}>Reload</Button>
      </ErrorPage>;
  } else if (!isLoaded) {
    return <Loader/>;
  } else {
    return (
      <Container maxWidth='xl' sx={{marginTop: theme.spacing(2)}}>
        <Grid container spacing={3}>
          {classrooms.map(classroom => (
            <Grid
              key={classroom.id}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <ClassroomListItem classroom={classroom}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default ClassroomList;
