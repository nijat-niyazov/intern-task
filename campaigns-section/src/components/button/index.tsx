import React from 'react'
import { Button as AntButton } from 'antd'

const Button = ({title}) => {
  return (
    <AntButton>{title}</AntButton>
  )
}

export default Button