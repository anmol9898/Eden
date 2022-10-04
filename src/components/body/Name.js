import "./Name.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Container, CssBaseline } from "@mui/material";

const Name = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.stepfn();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   fullName: data.get("fullname"),
    //   DisplayName: data.get("displayname"),
    // });
    props.nameSet(data.get("fullname"))
  };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          Welcome! First things first...
        </Typography>
        <Typography paragraph align="center" size="medium" color="#64708A">
          You can always change them later
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="fullname"
            name="fullname"
            label="Full Name"
            variant="outlined"
            placeholder="Steve Jobs"
            required
            color="primary"
            autoComplete="name"
            InputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            autoFocus
          />
          <TextField
            id="displayname"
            name="displayname"
            placeholder="Steve"
            label="Display Name"
            variant="outlined"
            autoComplete="name"
            required
            color="primary"
            InputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          />
          <Button variant="contained" size="medium" type="submit" sx={{ mt: 3, mb: 2 }}>
            Create Workspace
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Name;
