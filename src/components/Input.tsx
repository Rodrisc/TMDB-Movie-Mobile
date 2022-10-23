import React from 'react';
import { Input as NativeInput, IInputProps } from 'native-base';



export function Input({ ...rest }: IInputProps) {
  return (
    <NativeInput
    variant='underlined'
    fontSize='lg'
    color='gray.300'
    borderRadius='md'
    mb={2}
    {...rest}
    />
  );
}