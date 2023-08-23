import styles from "../style";
import { useState } from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "../components";
import UserModal from "../components/UserModal";
import UserModal2 from "../components/UserModal2";

const HomePage = () => {
  const [userModal, setUserModal] = useState(false);
  const [userModal2 , setUserModal2] = useState(false)
  return (
    <>
      <div className="bg-primary  w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero setUserModal={setUserModal} />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business setUserModal2 = {setUserModal2}/>
            <Billing />
            {/* <CardDeal /> */}
            <Testimonials />
            {/* <Clients /> */}
            {/* <CTA /> */}
            <Footer />
          </div>
        </div>
      </div>
      {userModal && <UserModal setUserModal={setUserModal} />}
      {userModal2 && <UserModal2 setUserModal2={setUserModal2} />}
    </>
  );
};

export default HomePage;
