import "./RegisterPage.css";
import { useState } from "react";
import Button from "../Button/Button";

export default function RegisterPage() {
  const [formValue, setFormValue] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValue);
  };

  const handleRegistration = async () => {
    const res = await fetch("https://78e49fb1217fe058.mokky.dev/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formValue.fullName,
        email: formValue.email,
        password: formValue.password,
      }),
    });
    if (res.ok) {
        const json = await res.json();
        console.log(json);
        // jsonPre.innerText = JSON.stringify(json, null, 2);
      }
  };

  const handleFullNameChange = (e) => {
    setFormValue({ ...formValue, fullName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValue({ ...formValue, password: e.target.value });
  };

  return (
    <div className="registerPage">
      <span>Register</span>
      <form onSubmit={handleSubmit}>
        <input
          value={formValue.fullName}
          onChange={handleFullNameChange}
          type="text"
        />
        <input
          value={formValue.email}
          onChange={handleEmailChange}
          type="text"
        />
        <input
          value={formValue.password}
          onChange={handlePasswordChange}
          type="text"
        />
        {/* <button type='submit'>Submit</button> */}
        <Button onClick={handleRegistration}>Submit</Button>
      </form>
    </div>
  );
}
