// External libraries
import React from 'react'

// Styled
import { Container } from './styles'

interface TextInputProps {
  placeholder: string
  value: string
  onChangeText: (value: string) => void
  keyboardType?: string
  autoCapitalize?: string
  autoComplete?: string
  autoFocus?: boolean
  secureTextEntry?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  autoComplete,
  autoCapitalize,
  autoFocus,
  secureTextEntry,
}) => {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType ? keyboardType : 'text'}
      autoComplete={autoComplete}
      autoCapitalize={autoCapitalize ? autoCapitalize : 'sentences'}
      autoCorrect={false}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default TextInput
