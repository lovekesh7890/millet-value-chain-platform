import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });

    setTimeout(() => {
      setAlert(null);
    }, 3000); // 3 sec me auto hide
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {alert && (
        <div className="fixed bottom-5 right-5 z-50">
          <div
            className={`px-4 py-2 rounded shadow text-white ${
              alert.type === "error"
                ? "bg-red-500"
                : alert.type === "success"
                ? "bg-green-600"
                : "bg-gray-700"
            }`}
          >
            {alert.message}
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};