import { Toast, ToastContainer } from 'react-bootstrap';

const ToastAlert = ({
  show,
  onClose,
  message = '¡Operación exitosa!',
  delay = 2000,
  position = 'top-center'
}) => {
  return (
    <ToastContainer position={position} className="p-3">
      <Toast onClose={onClose} show={show} delay={delay} autohide>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastAlert;
