/* eslint-disable react/prop-types */
import { Button, CircularProgress, Stack } from "@mui/material";

const CustomButton = ({
  variant = "contained",
  color = "error",
  onClick,
  startIcon,
  endIcon,
  loading = false,
  disabled = false,
  children,
  type = "submit",
  size,
  props,
  className
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled || loading}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      size={size}
      {...props}
      sx={{width: "100%"}}
    >
        <p className={`capitalize ${className}`}>{children}</p>
    </Button>
  );
};

export default CustomButton;
