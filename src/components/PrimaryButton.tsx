import React, { ReactNode } from 'react';

type PrimaryButtonProps = {
  children: ReactNode;  
};

export default function PrimaryButton({children}: PrimaryButtonProps) {
  return (
    <button className="px-4 py-2 font-semibold rounded-lg text-white bg-[#495057] hover:bg-[#585966]">
      {children}
    </button>
  )
}
