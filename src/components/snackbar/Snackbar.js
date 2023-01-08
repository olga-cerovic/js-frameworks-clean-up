import PropTypes from "prop-types";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Snackbar(props) {
  const { title, description, show, setShow } = props;
  if (!show) {
    return;
  }
  return (
    <Toast
      onClose={() => setShow(false)}
      autohide
      bg="success"
      className="mx-auto my-3"
    >
      {/* <Toast.Header>
        <strong className="me-auto">{title}</strong>
      </Toast.Header> */}
      <Toast.Body>{description}</Toast.Body>
    </Toast>
  );
}

Snackbar.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Snackbar;
