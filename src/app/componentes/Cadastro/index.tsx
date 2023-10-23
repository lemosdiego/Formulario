import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, OutlinedInput, Typography } from "@mui/material"
import Image from "next/image"


export const Cadastro = () => {
  return (
    <Grid container display="flex" justifyContent="center" height="100vh" alignContent="center" flexDirection="column" alignItems="center" gap="4px">
      <Grid item height="50px" width="50px" borderRadius={50}>
       <img src="/usuario.svg" height="100%" width={"100%"} />
      </Grid>
      <Grid item>
      <Typography variant="h6" >Cadastro</Typography>
      </Grid>
      <Grid>
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