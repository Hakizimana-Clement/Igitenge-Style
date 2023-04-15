import { useEffect, useState } from "react";
import BillsDetails from "./BillsDetails";

export default function Bills() {
  ///////////////////////// FETCH DATA //////////////////////////////////
  const [bills, setBills] = useState(null);
  useEffect(() => {
    const fetchBills = async () => {
      const response = await fetch("/api/bills");
      const json = await response.json();

      if (response.ok) {
        setBills(json);
      }
    };

    fetchBills();
  }, []);
  //////////////////////////////////////////////////////////////////////
  return (
    <div>
      {bills &&
        bills.map((bill) => <BillsDetails key={bill._id} bill={bill} />)}
    </div>
  );
}
