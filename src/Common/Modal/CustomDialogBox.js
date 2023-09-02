import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import "tailwindcss/tailwind.css";
import TransitionChild from "./TransitionChild";
import { modalButtonClass, modalProps } from "../../utils";

function CustomDialogBox(props) {
  const {
    open,
    handleClose = () => { },
    title = "Warning",
    dialogText = "Are you sure you want to delete?",
    confirmAction = () => { },
  } = props;

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={handleClose}
        >
          <div className="min-h-screen px-4 text-center">
            <TransitionChild />
            <Transition.Child as={Fragment} {...modalProps} >

              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900" >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="pt-2 text-sm text-gray-500"> {dialogText} </p>
                </div>

                <div className="mt-4">
                  <button onClick={handleClose} variant="outlined" className={modalButtonClass}>
                    No
                  </button>
                  <button onClick={confirmAction} variant="outlined" className={modalButtonClass} >
                    Yes
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>

  );
}

export default CustomDialogBox;