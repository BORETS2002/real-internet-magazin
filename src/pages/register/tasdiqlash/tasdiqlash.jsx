import "./tasdiqlash.css";

import React from "react";

export function Tasdiqlash() {
  function inputClick() {
    let eliNput = document.getElementById("organization_phone");
    eliNput.addEventListener("input", function (e) {
      let x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

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
    });
  }

  // const inputs = document.querySelectorAll(".otp-box  .form-control");
  // console.log(inputs);
  // inputs.forEach((input, index) => {
  //   input.dataset.id = index;
  //   input.addEventListener("paste", handleOtppaste());
  //   input.addEventListener("keyup", handleOtp());
  // });

  // function handleOtppaste(e) {
  //   const data = e.clipboardData.getData("text");
  //   const value = data.split("");
  //   console.log(data, value);
  //   if (value.length == inputs.length) {
  //     inputs.forEach((input, index) => {
  //       input.value = value[index];
  //       submit();
  //     });
  //   }
  // }

  // function handleOtp(e) {
  //   const input = e.target;
  //   const value = input.value;
  //   input.value = "";
  //   input.value = value ? value[0] : "";

  //   let fieldIndex = input.dataset.index;
  //   if (value.length > 0 && fieldIndex < input.length - 1) {
  //     input.nextElementSibling.focus();
  //   }
  //   if (e.key == "Backspace" && fieldIndex > 0) {
  //     input.priviousElementSibling.focus();
  //   }
  //   if (fieldIndex == inputs.length - 1) {
  //     submit();
  //   }
  // }
  // function submit() {
  //   let otp = "";
  //   inputs.forEach((input) => {
  //     otp += input.value;
  //     input.disabled = true;
  //     input.classList.add("disabled");
  //   });
  //   console.log(otp);
  // }
  let count = 0;
  function Onclics(twoo) {
    let inputes = document.querySelectorAll(".form-control");
    count += 1;
    inputes.forEach((index, i) => {
      // console.log(index.value);
      if (index.value !== "") {
        document.getElementById(twoo).focus();
      }
      if (count >= 5) {
        const btn = document.querySelector(".qwer-box");
        btn.classList.toggle("disabled");
      }
      // if (index) {
      // }
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
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <h2 className='register-big-text'>Tasdiqlash kodi</h2>
            <p className='register-mini-text'>
              Tasdiqlash kodi ko'rsatilgan telefon raqamiga yuborildi
            </p>
          </div>

          <form className='register-form'>
            <div className='register-input-box'>
              <label className='input-label'>
                {/* <div class="d-flex mb-3"> */}
                <div className='d-flex otp-box'>
                  <input
                    type='tel'
                    maxLength={1}
                    pattern='[0-9]'
                    className='form-control'
                    id='one'
                    onChange={() => Onclics("twoo")}
                  />

                  <input
                    id='twoo'
                    type='tel'
                    maxLength={1}
                    pattern='[0-9]'
                    className='form-control'
                    onChange={() => Onclics("three")}
                  />
                  <input
                    id='three'
                    type='tel'
                    maxLength={1}
                    pattern='[0-9]'
                    className='form-control'
                    onChange={() => Onclics("for")}
                  />
                  <input
                    id='for'
                    type='tel'
                    maxLength={1}
                    pattern='[0-9]'
                    className='form-control'
                    onChange={() => Onclics("five")}
                  />
                  <input
                    id='five'
                    type='tel'
                    maxLength={1}
                    pattern='[0-9]'
                    className='form-control'
                    onChange={() => Onclics("five")}
                  />
                </div>

                {/* </div> */}
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

// import React from "react";
// import "./register.css";
// // import { Navigate, navigation } from "react-router-dom";
// // import Home from "../../home/home";
