import { Snackbar, Alert } from "@mui/material"
const MessageAlert = ({children, severity = "", open = false, onClose = () => {}}) => {
	const close = () => {
            onClose();
    };
	return (
		<Snackbar
		open={open}
		autoHideDuration={2000}
		onClose={close}
		anchorOrigin={{vertical: 'top', horizontal: 'center'}}
	>
		<Alert
			sx={{ width: '100%' }}
			severity={severity}
			variant="filled"
		>
			{children}
		</Alert>
	</Snackbar>
	)
}

export default MessageAlert