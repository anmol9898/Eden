import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Avatar } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Launch = (props) => {
  return (
    <>
      <Box>
        {/* check avatar */}
        <Avatar >
          <CheckCircleRoundedIcon sx={{fill:'success'}}/>
        </Avatar>
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          Congratulations {props.name}
        </Typography>
        <Typography paragraph align="center" size="medium" color="#64708A">
          You have completed onboarding, you can start using the Eden!
        </Typography>
        <Button
          variant="contained"
          size="medium"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Launch Eden
        </Button>
      </Box>
    </>
  );
};
export default Launch;
