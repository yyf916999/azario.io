import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
const Buttons = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        sx={{ width: 0.65, mt: 3 }}
      >
        Generate Your Quiz
      </Button>
    </Box>
  );
};

export default Buttons;
