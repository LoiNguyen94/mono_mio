import { Button } from 'antd';
export interface ButtonsProps {
  title: string;
  bgColor?: string;
  titleColor?: string;
  width?: string;
  handleClick(): any;
}

export function Buttons({
  title,
  bgColor,
  width = '100%',
  titleColor = '#ffffff',
  handleClick,
}: ButtonsProps) {
  return (
    <Button
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: 8,
        width: width,
        boxShadow: 'none',
        fontSize: 16,
        fontWeight: 500,
        color: titleColor,
        height: '48px',
        padding: 0,
      }}
    >
      {title}
    </Button>
  );
}

export default Buttons;
