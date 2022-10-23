import React from 'react';
import { Button as NativeButton, Heading, IButtonProps } from 'native-base';

type Props = IButtonProps &{
    title: string
}

export function Button({title, ...rest}: Props) {
  return (
    <NativeButton 
    
    h={12}
    fontSize='sm'
    rounded='sm'
    {...rest}
    >
        <Heading color='gray.300' fontSize='sm' >
            {title}
        </Heading>
    </NativeButton>
  );
}