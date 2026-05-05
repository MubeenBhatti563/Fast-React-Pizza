import React, { useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = username.trim();
    if (!trimmedName) return;

    dispatch(updateName(trimmedName));
    navigate("/menu");
  };
  return (
    <form
      className="mb-4 text-sm text-stone-600 md:text-base"
      onSubmit={handleSubmit}
    >
      <p className="mb-4">Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 mb-8 input"
      />

      {username.trim().length >= 3 && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
