/* eslint-disable react/prop-types */
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TextInput = ({
  label,
  name,
  type = "text",
  placeholder,
  size,
  showPassword,
  setShowPassword,
  onChange,
  error,
  helperText,
  value,
  icon
}) => {
  return (
    <Box>
      {type == "password" ? (
        <TextField
          sx={{width: '100%'}}
          label={label}
          name={name}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          error={error}
          helperText={helperText}
          value={value}
          placeholder={placeholder}
          size={size}
          slotProps={{
            input: {
                startAdornment:
                <InputAdornment position="start">
                    {icon}
                </InputAdornment>,
                endAdornment: 
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility fontSize="small"/> : <VisibilityOff fontSize="small"/>}
                  </IconButton>
                </InputAdornment>
              }
          }}
        />
      ) : (
        <TextField
          sx={{width: '100%'}}
          label={label}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          size={size}
          slotProps={{
            input: {
              startAdornment: 
              <InputAdornment position="start">
                {icon}
              </InputAdornment>,
            },
          }}
        />
      )}
    </Box>
  );
};

export default TextInput;
