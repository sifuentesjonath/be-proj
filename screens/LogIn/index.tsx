import { useState } from "react";
import LoginForm from "@components/form/Login";
// Icons
import barberChair from "@public/png/barber_chair.png";
// Component
import Alert, { IAlertProps } from "@components/block/notice/Alert";
import Image from "next/image";
// Style
import { CustomBackgroundTriangleFrame } from "@styles/common/sectionStyle";
import mainTheme from "@styles/theme";
import styled from "styled-components";
import breakPoints from "@styles/breakpoints";

export default function LogInScreen() {
  const [alert, setAlert] = useState<{ show: boolean, props: IAlertProps }>({ show: false, props: undefined });
  // Actions
  const onCloseAlert = () => setAlert({ show: false, props: undefined })
  const onLoginError = (message: { title: string, description?: string }) => {
    const description = message.description ?? '';
    setAlert({
      show: true,
      props: {
        type: 'error',
        title: message.title,
        children: <>{description}</>
      }
    })
  }
  return (
    <>
      <LogInScreenContainer>
        <CustomBackgroundTriangleFrame className="triangle-frame">
          <div className="triangle-frame-content">
            <div className="chair-icon">
              <Image alt="barber chair" src={barberChair} fill />
            </div>
            <div className="triangle-frame-content-wrapper">
              <div className="description-box">
                <p className="title-name">MySpotBusiness</p>
                <h1>A la altura de tus negocios</h1>
                <p>
                  Nuestra misión es ayudar a su empresa a mejorar a través de una herramienta que permita
                  controlar y verificar el inventario, las estaciones de trabajo, los suministros,
                  el control financiero, el calendario y más.
                </p>
              </div>
              <LoginForm onError={onLoginError} />
            </div>
          </div>
        </CustomBackgroundTriangleFrame>
        {alert.show && <Alert className="login-alert" onClose={onCloseAlert} {...alert.props} />}
      </LogInScreenContainer>
    </>
  );
}

const LogInScreenContainer = styled.div`
  .triangle-frame {
    margin-bottom: 12px;
    position: relative;
  }

  .triangle-frame-content {
    padding: 40px 8px;
  }

  .chair-icon,
  .description-box {
    display: none;
  }

  .description-box .title-name {
    font-weight: 600;
  }

  .triangle-frame-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 auto;
  }

  .form-wrapper {
    height: fit-content;
    background-color: ${mainTheme.cardBackground};
    max-width: 400px;
    margin: 0 auto;
  }

  .login-alert {
    position: sticky;
    bottom: 0;
  }

  @media screen and (min-width: ${breakPoints.tabletMax}px){
    form {
      margin: 0
    }

    .triangle-frame-content-wrapper {
      width: 760px;
      padding-left: 200px;
      flex-direction: row;
      justify-content: center;
    }

    .chair-icon {
      display: block;
    }

    .description-box {
      display: flex;
      flex-direction: column;
      gap: 8px;
      height: fit-content;
      background-color: ${mainTheme.primaryBackgroundTransparent};
      padding: 24px 40px;
      max-width: 400px;
      p {
        color: ${mainTheme.textPrimary};
      }
      h1 {
        color: ${mainTheme.headingPrimaryDark};
      }
    }
    .chair-icon {
      height: 600px;
      width: 470px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  @media screen and (min-width: ${breakPoints.laptopSmallMax}px){
    .triangle-frame-content-wrapper {
      padding: 0;
      gap: 16px;
    }
  }
`;