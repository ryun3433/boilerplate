import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [Input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      name: Input,
    };

    axios.post("http://localhost:5000/login", body).then((res) => {
      if (res.data.success) {
        console.log("성공");
      } else {
        console.log("실패");
      }
    });
  };

  return (
    <div>
      <div>LoginPage</div>
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              onChange={inputChangeHandler}
              value={Input}
              name="name"
            />
          </label>
          <input type="submit" onClick={onSubmitHandler} value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
