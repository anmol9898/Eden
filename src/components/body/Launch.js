import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Avatar } from "@mui/material";
// import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DoneIcon from '@mui/icons-material/Done';

const Launch = (props) => {
  return (
    <>
      <Box
       sx={{ display: "flex", flexDirection: "column", alignItems: "center" , gap:"1rem" }}
      >
        {/* check avatar */}
        <Avatar sx={{marginTop:"8rem"}}>
          <DoneIcon sx={{fill:'success'}}/>
        </Avatar>
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700} sx={{marginTop:"2rem"}}>
          Congratulations {props.name}
        </Typography>
        <Typography paragraph align="center" size="medium" color="#64708A" sx={{marginTop:"0rem" , mb:"0rem"}}>
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
