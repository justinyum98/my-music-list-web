import MenuItem, { MenuItemProps } from '@/components/atoms/MenuItem';

type DropdownMenuProps = {
  hidden: boolean;
  items: MenuItemProps[];
};

export default function DropdownMenu({ hidden, items }: DropdownMenuProps) {
  return (
    <ul
      className={`absolute right-0 min-w-max rounded shadow ${
        hidden ? 'hidden' : 'block'
      }`}
    >
      {items.map(({ href, children }, index) => (
        <MenuItem key={index} href={href}>
          {children}
        </MenuItem>
      ))}
    </ul>
  );
}
