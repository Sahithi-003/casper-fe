import React from 'react'
import { Typography, TypographyProps } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'

interface ButtonComponentProps extends ButtonProps {
    label: string
    textColor: string
    width?: string
    textVariant?: TypographyProps['variant'],
    buttonColor?: string
  }

const ButtonComponent = (props: ButtonComponentProps) => {
  const { label, textColor, textVariant, width, buttonColor, ...buttonProps } = props
  return (
    <Button data-testid="button" type="button" {...buttonProps} sx={{width: `${width}`, backgroundColor:`${buttonColor}`}}>
      <Typography color={textColor} variant={textVariant} sx={{fontWeight:'600'}}>
        {label}
      </Typography>
    </Button>
  )
}

export default ButtonComponent