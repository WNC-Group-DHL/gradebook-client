import { Container, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Container 
      maxWidth='xl'
      disableGutters
      sx={{marginTop: 2}}
    >
      <Divider />
      <Container maxWidth='xl' sx={{marginY: 4}}>
        <Typography variant='subtitle1'>
          [[CQ]PTUDWNC - 18_3] 18120355 - Lê Nguyên Hào
        </Typography>
      </Container>
    </Container>
  )
}
