import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Contact.css";
import { Form } from "react-bootstrap";
import Snackbar from "../snackbar/Snackbar";
import { useState } from "react";
// import { BASE_URL, LOGIN_PATH } from "../../api";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "First name must have at least 3 caracters")
    .required("Please enter first name"),
  lastName: yup
    .string()
    .min(4, "Last name must have at least 4 caracters")
    .required("Please enter last name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup
    .string()
    .oneOf(["option1", "option2"], "Subject must be option 1 or option 2")
    .required("Please select the subject"),
  message: yup
    .string()
    .min(10, "Your message must have at least 10 caracters")
    .required("Please enter your message"),
});

function ContactForm() {
  //   const [unsuccessfulLoginMessage, setUnsuccessfulLoginMessage] =
  //     useState(null);
  //   const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log(data);
    setShowSnackbar(true);
  }

  return (
    <>
      <Form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact</h2>
        <Form.Group>
          <label>First Name</label>
          <Form.Control {...register("firstName")} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </Form.Group>
        <Form.Group>
          <label>Last Name</label>
          <Form.Control {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </Form.Group>
        <Form.Group>
          <label>Email</label>
          <Form.Control {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group>
          <label>Subject</label>
          <Form.Select {...register("subject")}>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          {errors.subject && <span>{errors.subject.message}</span>}
          <label>Message</label>
          <Form.Control as="textarea" rows={3} {...register("message")} />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>
        <button type="submit">Send</button>
      </Form>
      <Snackbar
        description="Message is sent!"
        show={showSnackbar}
        setShow={setShowSnackbar}
      />
    </>
  );
}

export default ContactForm;
