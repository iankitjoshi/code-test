import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import "tailwindcss/tailwind.css";
import { initialJobDetails, modalProps } from "../../utils";
import TransitionChild from "./TransitionChild";

function CustomModal({ open, children, setOpen = () => { }, setJobDetails, setIsEdit }) {

  const handleClose = () => {
    setOpen(false)
    setIsEdit(false)
    setJobDetails({ ...initialJobDetails })
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleClose} >
          <div className="min-h-screen px-4 text-center">
            <TransitionChild />

            <Transition.Child as={Fragment}{...modalProps} >
              <div className="inline-block w-full my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl max-w-med rounded-2xl">
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CustomModal

