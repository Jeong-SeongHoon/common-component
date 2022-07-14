import { FormEvent, PropsWithChildren, ReactNode } from "react";

interface Props {
  value: string;
  isChecked: boolean;
  Label: ReactNode;
  changeChecked?(isChecked: boolean): void;
}

export const Radio = ({ value, isChecked, Label, changeChecked }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (changeChecked) {
      changeChecked(e.target.checked);
    }
  };
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={handleChange}
      ></input>
      {Label}
    </label>
  );
};

interface GroupProps {
  changeValue(newValue: string): void;
}

Radio.Group = ({ changeValue, children }: PropsWithChildren<GroupProps>) => {
  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    changeValue(value);
  };

  return <div onChange={handleChange}>{children}</div>;
};
