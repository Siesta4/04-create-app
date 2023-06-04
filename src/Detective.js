import React, { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("психопат");

  return <h2>Шерлок - {sherlock}</h2>;
}

export default Detective;