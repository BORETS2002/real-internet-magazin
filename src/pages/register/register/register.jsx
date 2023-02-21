import React from "react";
import "./register.css";
// import { Navigate, navigation } from "react-router-dom";
// import Home from "../../home/home";
{
  /* <Register /> */
}
// hali chaqirilmagan chaqirib ishlatiladi
export function Register() {
  // <Navigate to='/Home' replace={} />;
  let ucurchik = 0;

  function inputClick() {
    let eliNput = document.getElementById("organization_phone");
    eliNput.addEventListener("input", function (e) {
      let x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
      ucurchik = ucurchik + 1;
      e.target.value =
        "+(" + x[1] + ") " + x[2] + "-" + x[3] + "-" + x[4] + "-" + x[5];
      // console.log(Number(x.length));
      let zaybal = e.target.value;
      const BtnRegister = document.querySelector(".qwer-box");
      if (zaybal.length >= 19) {
        BtnRegister.classList.remove("disabled");
      } else {
        BtnRegister.classList.add("disabled");
      }
      console.log(zaybal.length);
      // console.log(ucurchik.value);
    });
  }

  return (
    <div>
      <div className='register'>
        <div className='container'>
          <div className='register-text-wrapper'>
            <button className='register-back-buton'>
              <svg
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.06847 12.7131L1.35547 7.00011L7.06847 1.28711M14.6695 7.00011H1.37247'
                  stroke='black'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
            <h2 className='register-big-text'>Ro'yxatdan o'tish</h2>
            <p className='register-mini-text'>
              Hisob yaratish yoki mavjud hisobingizga kirish uchun telefon
              raqamingizni kiriting
            </p>
          </div>

          <form className='register-form'>
            <span className='form-text'>Telefon raqam</span>
            <div className='register-input-box'>
              <label className='input-label'>
                <input
                  // onKeyPress={this.handleKeyPress}

                  // onKeyPress={(evt) => keynDaunInputFunksion(evt)}
                  onClick={() => inputClick()}
                  className='input-heroTwoo '
                  type='text'
                  id='organization_phone'
                  name='organization_phone'
                  placeholder='(+998) 99-000-00-00'
                  defaultValue='+998'
                  minLength={7}
                ></input>
              </label>
              <div className='qwer-box disabled'>
                <button
                  className='submit-form  '
                  // disabled={ucurchik <= 9}
                  type='submit'
                >
                  Keyingi
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
