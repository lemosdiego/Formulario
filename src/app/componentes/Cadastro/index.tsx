import { Button, Checkbox, FormControlLabel, Grid, Link, OutlinedInput, Typography } from "@mui/material"


export const Cadastro = () => {
  return (
    <Grid container display="flex" justifyContent="center" height="100vh" alignContent="center">
      <Grid >
        <Typography variant="h5" sx={{paddingLeft:"45px", paddingTop:"20px", color:"blue"}}>Preencher Cadastro</Typography>
        <Grid display="flex" justifyContent="center" gap="10px" paddingTop="30px">
          <OutlinedInput placeholder="Nome" sx={{ width: "195px" }}></OutlinedInput>
          <OutlinedInput placeholder="Sobrenome" sx={{ width: "195px" }}></OutlinedInput>
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center" gap="10px" paddingTop="10px">
          <OutlinedInput placeholder="Email" sx={{ width: "400px" }}></OutlinedInput>
          <OutlinedInput placeholder="Confirm Email" sx={{ width: "400px" }}></OutlinedInput>
          <OutlinedInput placeholder="Senha" sx={{ width: "400px" }}></OutlinedInput>
          <OutlinedInput placeholder="Confirm Senha" sx={{ width: "400px" }}></OutlinedInput>
        </Grid>
        <Grid display="flex" width="400px" gap="10px" paddingTop="10px"paddingLeft="22px">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Quero receber atualizações via E-mail" />
        </Grid>
        <Grid display="flex" width="100%" gap="10px" paddingTop="10px" alignItems="center">
        <Button variant="contained" sx={{width:"400px", height:"50px"}}>Inscrever-se</Button>
        </Grid>
        <Grid display="flex" width="100%" gap="10px" paddingTop="20px">
          <Link>Já tem uma conta? Entrar.</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}