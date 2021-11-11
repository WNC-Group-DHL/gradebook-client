import { Route, Switch } from 'react-router-dom';
import AuthOnlyRoute from './customRoute/authOnlyRoute';
import NonAuthOnlyRoute from './customRoute/nonAuthOnlyRoute';

// Pages
import NotFoundPage from '../../_pages/notfound';
import ClassroomList from '../../_pages/classroomList';
import ClassroomSinglePage from '../../_pages/classroomSingle';
import SignInPage from '../../_pages/signin';
import SignUpPage from '../../_pages/signup';

// Pages

function Router() {
  return (
    <Switch>
      <AuthOnlyRoute exact path='/'>
        <ClassroomList/>
      </AuthOnlyRoute>
      <AuthOnlyRoute path='/class/:class_id'>
        <ClassroomSinglePage/>
      </AuthOnlyRoute>
      <NonAuthOnlyRoute exact path='/signin'>
        <SignInPage/>
      </NonAuthOnlyRoute>
      <NonAuthOnlyRoute exact path='/signup'>
        <SignUpPage/>
      </NonAuthOnlyRoute>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  )
}

export default Router;
