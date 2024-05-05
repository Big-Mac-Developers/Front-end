import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ReactNode} from "react";
interface Option {
  id: string;
  val: string;
}
interface MyDropDownMenuProps {
  options: Option[];
  selectOptionFunc: (id: string) => void;
  menuLabel: string;
  child: ReactNode;
}

export function MyDropDownMenu({
  options,
  selectOptionFunc,
  menuLabel,
  child,
}: MyDropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{child}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option.id}
              value={option.val}
              onClick={() => selectOptionFunc(option.id)}
            >
              {option.val}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
