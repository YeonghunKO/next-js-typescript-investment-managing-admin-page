import Icons from './index';

type IconsKey = typeof Icons;

interface Props {
  size?: number | string;
  color?: string;
  icon: keyof IconsKey | typeof undefined;
  [key: string]: any;
}

const Icon = ({ size = '25', icon, ...props }: Props) => {
  const SelectedIcon = icon && Icons[icon];
  if (!SelectedIcon) {
    return null;
  }
  return (
    <SelectedIcon
      style={{ margin: '0 0.3rem 0 0.3rem' }}
      size={size}
      {...props}
    />
  );
};

export type { IconsKey };

export default Icon;
