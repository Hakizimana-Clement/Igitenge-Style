import React from "react";

export default function TestDetails({ store }) {
  return (
    <div>
      <h3>price:{store.priceInCents}</h3>
      <h3>name:{store.name}</h3>
      <h3>size:{store.name}</h3>
    </div>
  );
}
