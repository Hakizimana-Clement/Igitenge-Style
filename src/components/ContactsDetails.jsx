import React from "react";

export default function ContactsDetails({ contact }) {
  return (
    <>
      <h2>Contacts List:</h2>
      <div class="card" style={{ width: "23rem" }}>
        <div class="card-body">
          <h5 class="card-title mb-2">Name: {contact.name}</h5>
          <h6 class="card-subtitle mb-1 ">
            <strong>Email: </strong> {contact.email}
          </h6>
          <p class="card-text mb-0">
            <strong>message: </strong>
            {contact.message}
          </p>
          <p class="card-text">
            <strong>Created: </strong>
            {contact.createdAt}
          </p>
          <button className="btn btn-outline-dark">Delete</button>
        </div>
      </div>
    </>
  );
}
