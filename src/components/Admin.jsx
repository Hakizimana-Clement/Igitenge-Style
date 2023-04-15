import Review from "./Review";
import Contacts from "./Contacts";
import Bills from "./Bills";
import Credit from "./Credit";
import Email from "./Emails";
const Admin = () => {
  return (
    <div className="admin">
      <Review />
      <Contacts />
      <Bills />
      <Credit />
      <Email />
    </div>
  );
};

export default Admin;
