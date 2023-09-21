import styled from "styled-components";
// Components
import Image from "next/image";
import SignUpForm from "@components/form/SignUp";
// Style
import barberChair from "@public/png/barber_chair.png";
import { CustomBackgroundTriangleFrame } from "@styles/common/sectionStyle";
import breakPoints from "@styles/breakpoints";

export default function SignUpScreen() {
  return (
    <SignUpContainer>
      <CustomBackgroundTriangleFrame height="624px" className="triangle-frame">
        <div className="chair-icon">
          <Image alt="barber chair" src={barberChair} fill />
        </div>
        <div className="triangle-frame-container">
          <SignUpForm />
        </div>
      </CustomBackgroundTriangleFrame>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  .triangle-frame {
    position: relative
  }
  .triangle-frame-container {
    padding: 16px;
  }
  form {
    margin: 0 auto;
  }
  .chair-icon {
    display: block;
    position: absolute;
    height: 600px;
    width: 470px;
    left: 0;
    bottom: 0;
    z-index: -2;
  }
  @media screen and (min-width: ${breakPoints.tabletMax}px){
    .triangle-frame {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;