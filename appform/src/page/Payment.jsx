import React from 'react'
import logo from '../assets/schoollo.png'

const Payment = () => {
  return (
      <div className='grid lg:grid-cols-3 items-center mx-auto px-8'>
          <div> </div>
          <div className='flex flex-col justify-center items-center shadow-2xl mt-16'>
              <div className='flex flex-col justify-center items-center '>
                  <div>
                      <img src={logo} className='w-45' alt="logo" />
                  </div>
                  <p className='p-4 text-center '>
                      To confirm your participation in [insert program/event name], kindly click on the payment button below to make a payment of $20. Once your payment is successfully processed, your registration will be confirmed.

                      Don’t forget to download your receipt as proof of payment.

                      Thank you for your prompt action!
                  </p>
              </div>
              <button className='my-4 mb-18 bg-blue-900 text-white p-3 rounded-2xl hover:bg-blue-700 cursor-pointer'>Make Payment</button>
          </div>
          <div></div>
      </div>
  )
}

export default Payment
