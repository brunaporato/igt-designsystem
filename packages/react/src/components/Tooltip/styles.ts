import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',

  '.box': {
    background: '$gray900',
    borderRadius: '$sm',
    padding: '$3 $4',
    color: '$gray100',
    width: 'fit-content',
  },

  '.tip': {
    margin: '-0.75rem',
    color: '$gray900',
  },
})
