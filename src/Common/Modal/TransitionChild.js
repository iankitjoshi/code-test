import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import "tailwindcss/tailwind.css";

function TransitionChild() {


    return (
        <>
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

            <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
            >
                &#8203;
            </span>

        </>
    );
}

export default TransitionChild

