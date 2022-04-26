import Input from "@components/Input";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="ID"
        value={value}
      />
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Password"
        value={value}
      />
    </div>
  );
};

export default Home;
