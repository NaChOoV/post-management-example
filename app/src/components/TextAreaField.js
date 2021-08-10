import React, { useState, useEffect } from 'react';

const TextAreaField = ({
  typeName = 'textArea',
  minlength = 4,
  maxlength = 255,
  onReadyHandler,
}) => {
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
    onReadyHandler(1, isReady, { description: value });
  }, [value]);

  return (
    <div className="flex flex-col max-w-sm mx-auto">
      <label htmlFor="about" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
        {typeName}
      </label>
      <div className="mt-1">
        <textarea
          id={typeName}
          name={typeName}
          className="text-sm sm:text-base  w-full border rounded placeholder-gray-400 focus:border-green-400 focus:outline-none py-2 pr-2 pl-4 "
          placeholder="..."
          onChange={(e) => setValue(e.target.value)}
          defaultValue={''}
        />
      </div>
      {showError ? (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
          Ingrese correctamente la {typeName.toLowerCase()}.
        </span>
      ) : (
        <p className="mt-1 ml-1 text-sm text-gray-500">
          Ingrese una breve {typeName.toLowerCase()}.
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
