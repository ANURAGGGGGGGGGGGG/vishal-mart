import React from 'react';

export default function Form({
    fullName,
    setFullName,
    dob,
    setDob,
    captcha,
    userCaptcha,
    setUserCaptcha,
    message,
    handleSubmit,
    handleReset,
    refreshCaptcha
}) {
    return (
        <div className="flex-1 p-4">
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <h2 className="text-xl font-bold text-center text-blue-900 mb-6">
                    Vishal Mega Mart Guard Entrance Examination 2025
                </h2>

                {message && (
                    <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-1 font-bold">
                            Enter your Full Name
                            <div className="text-red-600 text-sm font-normal">(as given on your admit card)</div>
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 font-bold">Enter Date of Birth</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="(DD/MM/YYYY)"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 font-bold text-sm sm:text-base">Enter CAPTCHA</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            {/* CAPTCHA Display and Refresh */}
                            <div className="flex items-center gap-2">
                                <div className="bg-gray-200 p-1 sm:p-2 rounded text-sm sm:text-base min-w-[100px] sm:min-w-[120px] text-center flex-shrink-0">
                                    {captcha}
                                </div>
                                <button
                                    type="button"
                                    onClick={refreshCaptcha}
                                    className="bg-gray-300 px-2 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base whitespace-nowrap"
                                >
                                    Refresh
                                </button>
                            </div>

                            {/* Input Field */}
                            <input
                                type="text"
                                value={userCaptcha}
                                onChange={(e) => setUserCaptcha(e.target.value)}
                                className="w-full border border-gray-300 p-1 sm:p-2 rounded text-sm sm:text-base"
                                placeholder="Type CAPTCHA"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-8 py-2 rounded hover:bg-blue-800"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-gray-500 text-white px-8 py-2 rounded hover:bg-gray-600"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}