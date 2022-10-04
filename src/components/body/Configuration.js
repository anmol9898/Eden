import "./Configuration.css";
// import { PersonIcon} from '@mui/icons-material';
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Container, CssBaseline } from "@mui/material";

const Configuration = (props) => {
    const tiers = [
        {
          icon: {PersonIcon},
          title: 'For myself',
          description: [
            'Write Better. Think',
            'more clearly.Stay',
            'organized.',
          ],
        },
        {
            icon: {PersonIcon},
            title: 'With my team',
            description: [
              'Wikis, docs, tasks &',
              'projects, all in one',
              'place.',
            ],
        }
        
      ];
      const handleSubmit = (event) => {
        event.preventDefault(props);
        props.stepfn();
        const data = new FormData(event.currentTarget);
      };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          How are you planning to use Eden?
        </Typography>
        <Typography paragraph align="center" size="medium" color="#64708A">
          We'll streamline your setup experience accordingly.
        </Typography>
        <b>{"myself | my team box".toUpperCase()}</b>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          autoComplete="off"
            onSubmit={handleSubmit}
        >
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
export default Configuration;
