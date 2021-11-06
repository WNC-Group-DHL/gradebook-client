import { 
  Paper, Typography, Grid
  , Box, Button
} from '@mui/material';
import { Link } from 'react-router-dom';
// import GoogleSignInButton from './googleSignInButton'; Disable for now
import SignInForm from './signInForm';

export default function SignInPage() {
  return (
    <Grid
      container
      spacing={0}
      // Center horizontal & vertical inner element
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '90vh' }} //Parent content area min height
    >

      <Grid item xs={3}>
      <Paper sx={{ width: 360, padding: 2 }}>
        <Typography variant='h4' align='center'>Đăng nhập</Typography>
        <SignInForm/>
        <Box mt={2}>
          <Button fullWidth size='small' component={Link} to='/signup'>
            Chưa có tài khoản? Đăng ký
          </Button>
        </Box>
        {/* <Box mt={2}>  Disable for now
          <GoogleSignInButton />
        </Box> */}
      </Paper>
      </Grid>   
      
    </Grid> 
  )
}
