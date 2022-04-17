import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import css from './style.module.scss'

const Vultr = () => {
  return (
    <MDBContainer fluid className='text-center'>
      <MDBRow>
        <MDBCol lg="12" md="12" className="mb-lg-0 mb-4 pb-4">
          <a href="https://www.vultr.com/?ref=8991180-8H" target='_blank' rel="noreferrer">
            <div className={css.vultr}>
              Sign Up to Get Free $35 Worth Credits on Vultr
            </div>
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Vultr;
