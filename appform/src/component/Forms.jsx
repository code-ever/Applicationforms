import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../assets/schoollo.png'
import { useNavigate } from 'react-router-dom';

const Forms = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        programm: '',
        username: '',
        email: '',
        firstname: '',
        middlename: '',
        faculty: '',
        department: '',
        regNo: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation: Check if required fields are filled
        if (!form.programm || !form.username || !form.firstname || !form.email) {
            toast.error('Please fill in all required fields');
            return;
        }

        // If validation passes, send the data to the backend
        try {
            const response = await axios.post('http://localhost:8081/api/register', form, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // const pay = await axios.post('http://localhost:8081/api/register', form, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            // Handle successful registration
            console.log(response);

            toast.success('Registration successful, Redirecting to payment.....', {
                onClose: () => {
                    // Navigate after the toast finishes
                    navigate('/payment'); // Navigate to the success page
                }
            });
        } catch (error) {
            // Improved error message handling
            console.error('Error:', error.response ? error.response.data : error.message);
            toast.error(`Error: ${error.response ? error.response.data.message : error.message}`);
        }



    };

    const handleNext = () => {
        if (step === 1) {
            setStep(2); // Move to step 2
        }
    };
    const handlePrev = () => {
        if (step === 1) {
            setStep(1); // Move to step 2
        }
    }
    
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-3xl p-4">
                {step === 1 && (
                    <div>
                        <p className="bg-blue-900 text-white uppercase p-4 text-center text-xl md:text-3xl">
                            Fill the form below to pay for your research or Umitt training
                        </p>
                    </div>
               )}
                <div className="flex justify-center flex-col mx-auto mt-8 text-sm shadow-2xl">

                    <ToastContainer />
                    <form onSubmit={handleSubmit} className="w-full">
                        {step === 1 && (
                            <div className="flex flex-col gap-y-8 px-4 py-6 bg-white rounded-md shadow-lg">
                                <div className="flex flex-col">
                                    <label htmlFor="programm" className="mb-2">...Select Program...</label>
                                    <select
                                        value={form.programm}
                                        onChange={handleInput}
                                        className="p-2 border rounded-md w-full"
                                        name="programm"
                                    >
                                        <option value="">Choose a program</option>
                                        <option value="Post-Graduate">Post-graduate/HND Conversion</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="username" className="mb-2">Username</label>
                                    <input
                                        onChange={handleInput}
                                        value={form.username}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="username"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="mb-2">Email</label>
                                    <input
                                        onChange={handleInput}
                                        value={form.email}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="firstname" className="mb-2">First Name</label>
                                    <input
                                        value={form.firstname}
                                        onChange={handleInput}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="firstname"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="middlename" className="mb-2">Middle Name (Optional)</label>
                                    <input
                                        value={form.middlename}
                                        onChange={handleInput}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="middlename"
                                        placeholder="Middle Name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="faculty" className="mb-2">Faculty</label>
                                    <input
                                        value={form.faculty}
                                        onChange={handleInput}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="faculty"
                                        placeholder="Faculty"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="department" className="mb-2">Department</label>
                                    <input
                                        value={form.department}
                                        onChange={handleInput}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="department"
                                        placeholder="Department"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="regNo" className="mb-2">Reg No (Optional)</label>
                                    <input
                                        value={form.regNo}
                                        onChange={handleInput}
                                        type="text"
                                        className="p-2 border rounded-md w-full"
                                        name="regNo"
                                        placeholder="Reg Number"
                                    />
                                </div>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={handleNext}
                                        type="submit"
                                        className="bg-blue-900 text-white p-3 rounded-md w-full md:w-auto mt-4 hover:bg-blue-800"
                                    >
                                        Next
                                    </button>

                                </div>
                            </div>
                        )}
                        {step === 2 && (

                            <div className='flex flex-col justify-center items-center shadow-2xl mt-16'>
                                <div className='flex flex-col justify-center items-center '>
                                    <div>
                                        <img src={logo} className='w-45' alt="logo" />
                                    </div>
                                    <p className='p-4 text-center '>
                                        To confirm your payment in <b> {form.programm} </b> Programm, kindly
                                        click on the payment button below to make a payment of
                                        <b>{form.programm === 'Post-Graduate' ? ' 20,000₦' : '10,000₦' }</b>. Once your payment is successfully processed, your registration will be confirmed.

                                        Don’t forget to download your receipt as proof of payment.

                                        Thank you for your prompt action!
                                    </p>
                                </div>
                                <div>
                                    
                                    <button className='my-4 mb-18 bg-blue-900 text-white p-3 rounded-2xl hover:bg-blue-700 cursor-pointer'>Make Payment</button>
                                </div>
                            </div>

                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forms;
