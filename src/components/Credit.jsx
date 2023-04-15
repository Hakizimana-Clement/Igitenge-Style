import { useEffect, useState } from "react";
import CreditDetails from "./CreditDetails";
const Credit = () => {
  //////////////////////// FETCH DATA //////////////////
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetch("/api/credits");
      const json = await response.json();

      if (response.ok) {
        setCredits(json);
      }
    };

    fetchCredits();
  }, []);
  //////////////////////////////////////////////////////

  return (
    <>
      <h2>Credits Card Infomation</h2>
      {credits &&
        credits.map((credit) => (
          <CreditDetails key={credit._id} credit={credit} />
        ))}
    </>
  );
};

export default Credit;
