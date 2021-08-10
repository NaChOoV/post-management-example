import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import React, { Fragment, useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';

import { createPost } from '../redux/actions/post';

export default function CreatePostModal({ onClose, isOpen }) {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState([false, false]);
  const [formValues, setFormValues] = useState({ name: '', description: '' });

  const checkIsReady = (pos, check, value) => {
    setFormValues({ ...formValues, ...value });

    let newIsReady = isReady;
    newIsReady[pos] = check;

    setIsReady(newIsReady);
  };
  const onSendHandler = () => {
    const ready = isReady.every((r) => r);
    if (ready) {
      dispatch(createPost(formValues));
      resetValues();
      onClose();
    }
  };

  const resetValues = () => {
    setIsReady([false, false]);
    setFormValues({ name: '', description: '' });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-2 border-grey-500">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Ingresar un nuevo post
              </Dialog.Title>

              <InputField
                formValues={formValues}
                typeName="Nombre"
                minlength={4}
                maxlength={50}
                onReadyHandler={checkIsReady}
              />
              <TextAreaField
                formValues={formValues}
                typeName="Descripción"
                minlength={10}
                maxlength={255}
                onReadyHandler={checkIsReady}
              />

              <div className="mt-4 text-right">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={onSendHandler}
                >
                  Agregar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
