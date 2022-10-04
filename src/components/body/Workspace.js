import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {
  Typography,
  Container,
  CssBaseline,
  InputAdornment,
} from "@mui/material";

const Workspace = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.stepfn();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   workspacename: data.get("workspacename"),
    //   workspacename: data.get("workspacename")
    // });
  };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          Let's set up a home for all your work
        </Typography>
        <Typography paragraph align="center" size="medium" color="#64708A">
          You can always create another workspace later
        </Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
            marginTop:"3rem"
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
         
          {/* <FormLabel label="Workspace Name"></FormLabel> */}
          <TextField
            id="workspacename"
            name="workspacename"
            label="Workspace Name"
            // variant="outlined"
            variant="standard"
            placeholder="Eden"
            required
            color="primary"
            InputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            autoFocus
          />
          <TextField
            id="workspaceurl"
            name="workspaceurl"
            placeholder="Steve"
            label="Workspace URL (optional)"
            variant="standard"
            type="url"
            color="primary"
            defaultValue="https://"
            autoComplete="url"
            InputProps={{
              style: { fontSize: "1.5rem" },
              startAdornment: (
                <InputAdornment
                  sx={{
                    padding: "27.5px 14px",
                    // paddingTop: "8px",
                    // paddingLeft: "3px",
                    // margin: "0px",
                    backgroundColor: (theme) => theme.palette.divider,
                    borderTopLeftRadius: (theme) =>
                      theme.shape.borderRadius + "px",
                    borderBottomLeftRadius: (theme) =>
                      theme.shape.borderRadius + "px",
                  }}
                  position="start"
                >
                  www.Eden.com/
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          />

          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Workspace
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Workspace;
