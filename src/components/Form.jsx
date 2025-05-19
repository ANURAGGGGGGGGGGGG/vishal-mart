import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center text-primary mb-4">
                                Vishal Mega Mart Guard Entrance Examination 2025
                            </h2>

                            {message && (
                                <div className="alert alert-danger mb-4">
                                    {message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        Enter your Full Name
                                        <small className="text-danger d-block">(as given on your admit card)</small>
                                    </label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="form-control"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold">Enter Date of Birth</label>
                                    <input
                                        type="date"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className="form-control"
                                        placeholder="DD/MM/YYYY"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold">Enter CAPTCHA</label>
                                    <div className="row g-2 align-items-center">
                                        <div className="col-12 col-sm-5 mb-2 mb-sm-0">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-2 rounded text-center flex-grow-1 me-2">
                                                    <strong>{captcha}</strong>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={refreshCaptcha}
                                                    className="btn btn-secondary"
                                                >
                                                    Refresh
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-7">
                                            <input
                                                type="text"
                                                value={userCaptcha}
                                                onChange={(e) => setUserCaptcha(e.target.value)}
                                                className="form-control"
                                                placeholder="Type CAPTCHA"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-3 px-sm-5 py-1 py-sm-2"
                                        style={{ fontSize: '0.875rem' }}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="btn btn-outline-secondary px-3 px-sm-5 py-1 py-sm-2"
                                        style={{ fontSize: '0.875rem' }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}