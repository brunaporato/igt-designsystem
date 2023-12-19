import { Heading } from '../Heading'
import { CloseButton, ToastContainer } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  text: string
}

export function Toast({ title, text }: ToastProps) {
  return (
    <ToastContainer>
      <div className="top">
        <Heading size="sm">{title}</Heading>
        <CloseButton>
          <X weight="bold" size={20} />
        </CloseButton>
      </div>
      <span>{text}</span>
    </ToastContainer>
  )
}
