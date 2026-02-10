import { useSelector } from "react-redux"
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  const message = useSelector(state => state.notification)
  return (
    (message && (<Alert icon={false} 
  sx={{ justifyContent: 'center', textAlign: 'center' }} severity="success">
{message}
    </Alert>)
  ));
}

