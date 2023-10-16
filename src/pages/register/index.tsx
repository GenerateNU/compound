import { signIn } from "next-auth/react";
import { useState } from "react";

// todo
// Page Routing
// Button Functions in Bottom
// Icons and such in account details
// Abstract LOL
export default function Register() {
    const [info, setInfo] = useState({})

    function updateInfo(key:string, value:string) {
        setInfo(prev => ({
            ...prev,  
            [key]: value 
        }));    
        console.log(info)
    }
    
    const accountDetails = [
        {title: "Username", placeholder: "Username", icon: null},
        {title: "Password", placeholder: "Password", icon: null},
        {title: "Email", placeholder: "Email", icon: null},
        {title: "Confirm Password", placeholder: "Password", icon: null},
    ]

    const additionalInfo = [
        {title: "First Name", placeholder: "First Name", icon: null},
        {title: "Last Name", placeholder: "Last Name", icon: null},
        {title: "Phone Number", placeholder: "#", icon: null},
        {title: "Date of Birth", placeholder: "DOB", icon: null},
    ]

    function createAccount() {
        // pass
        // Password Validation

        // POST request to create user

        // Route to Following page
    }

  return (
    <div className="flex w-screen h-screen bg-white font">
        {/* Replace this with an image */}
        <aside className="bg-gray-400 w-[550px] h-screen hidden lg:block">
        </aside>

        {/* Right Here */}
        <div className="mx-auto max-w-4xl pb-8 flex-grow flex flex-col h-screen justify-between">
            <div className="flex gap-4 p-8 items-center ">
                {/* Replace with Logo */}
                <div className="w-16 h-12 bg-gray-400"></div>
                <div className="text-2xl"> Compound </div>
            </div>
            <div className="w-full px-16 flex flex-col">
                <h2 className="mx-auto text-2xl"> Create Your Account</h2>
                <div className="mt-8 text-xl">
                    Account Details
                    <form className="mt-4 grid grid-cols-2 gap-4">
                        {accountDetails.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <label htmlFor={item.title} className="mb-2 text-sm">
                                {item.title}
                                </label>
                                <input
                                type="text"
                                id={item.title}
                                placeholder={item.placeholder}
                                className="px-2 py-1 border rounded-md"
                                onChange={(event) => updateInfo(item.title, event.target.value)} 
                                />
                            </div>
                        ))}
                    </form>
                </div>
                <div className="text-xl mt-8">
                    Additional Information
                    <form className="mt-4 grid grid-cols-2 gap-4">
                        {additionalInfo.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <label htmlFor={item.title} className="mb-2 text-sm">
                                {item.title}
                                </label>
                                <input
                                type="text"
                                id={item.title}
                                placeholder={item.placeholder}
                                className="px-2 py-1 border rounded-md"
                                onChange={(event) => updateInfo(item.title, event.target.value)} 
                                />
                            </div>
                        ))}
                    </form>
                </div>
            </div>

            <div className="flex px-16 sm:pb-8 lg:pb-20 justify-between">
                <button className="px-4 py-2  rounded-xl border-2 border-black">
                    Back to Homepage
                </button>
                <button onClick={createAccount} className="px-4 py-2 font-semibold rounded-lg text-white bg-[#495057]">
                    Create My Account
                </button>
            </div>
        </div>
    </div>
  );
}
