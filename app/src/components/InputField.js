import React, { useState, useEffect } from 'react';

const InputField = ({ typeName = 'name', minlength = 4, maxlength = 255, onReadyHandler }) => {
  const [value, setValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (value.length > maxlength || value.length < minlength) {
      setIsReady(false);
      value.length === 0 ? setShowError(false) : setShowError(true);
    } else {
      setShowError(false);
      setIsReady(true);
    }
    onReadyHandler(0, isReady, { name: value });
  }, [value]);

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      <div className="flex flex-col mb-4">
        <label for="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          {typeName}
        </label>

        <input
          id="name"
          name="typeName"
          type="text"
          placeholder="Nombre"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={
            'py-2 pr-2 pl-4 text-sm sm:text-base w-full border rounded placeholder-gray-400 focus:border-green-400 focus:outline-none'
          }
        ></input>

        {showError ? (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Ingrese correctamente el {typeName.toLowerCase()}.
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
