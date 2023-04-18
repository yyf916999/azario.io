import TextareaAutosize from "@mui/base/TextareaAutosize";
import Box from "@mui/material/Box";
const Input = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <TextareaAutosize
        aria-label="user_input"
        placeholder="Please Enter Fine Tone Parameter"
        style={{ height: 150, width: 1500 }}
      />
    </Box>
  );
};

export default Input;
