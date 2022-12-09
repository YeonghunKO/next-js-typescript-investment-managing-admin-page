import Icons from './index';

type IconsKey = typeof Icons;

interface Props {
  size?: number | string;
  color?: string;
  icon: keyof IconsKey;
  [key: string]: any;
}

const Icon = ({ size = '25', icon, ...props }: Props) => {
  const SelectedIcon = Icons[icon];
  if (!SelectedIcon) {
    return null;
  }
  return <SelectedIcon size={size} {...props} />;
};

export type { IconsKey };

export default Icon;
