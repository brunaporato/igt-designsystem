import { TooltipContainer } from './styles'
import { CaretDown } from 'phosphor-react'
import { Text } from '../Text'

export interface TooltipProps {
  date: string
  isAvailable: boolean
}

export function Tooltip({ date, isAvailable }: TooltipProps) {
  return (
    <TooltipContainer>
      <div className="box">
        <Text as="strong" size="xs">
          {date} - {isAvailable ? 'Disponível' : 'Indisponível'}
        </Text>
      </div>
      <CaretDown size={32} weight="fill" className="tip" />
    </TooltipContainer>
  )
}
