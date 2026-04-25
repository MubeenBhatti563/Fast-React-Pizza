import React, { useState } from "react";
import Button from "../../ui/Button";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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

      {username.length >= 3 && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
