import React from 'react'
import { Icon28CloseAmbient } from '@telegram-apps/telegram-ui/dist/icons/28/close_ambient'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <div
      className={`h-screen w-screen fixed z-50 top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-secondary p-4 rounded-2xl shadow-lg transform transition-transform ease-in-out duration-300 absolute bottom-1/2 translate-y-1/2 w-[90%] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-2xl font-semibold text-center mb-2">{title}</div>
        {children}
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          <Icon28CloseAmbient />
        </button>
      </div>
    </div>
  )
}

export default Modal