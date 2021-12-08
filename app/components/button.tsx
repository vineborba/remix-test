import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
};

export default function Button(props: Props) {
  return (
    <button className="w-24 h-8 bg-purple-400 rounded">
      {props.label || 'click me'}
    </button>
  )
}