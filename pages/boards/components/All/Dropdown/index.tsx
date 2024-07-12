import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import arrowIcon from "@/assets/icons/ic_arrow_down.svg";

interface DropdownProps {
  options: string[];
  defaultOption: string;
}

const Dropdown = ({ options, defaultOption }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <span className={styles["dropdown-option"]}>{selectedOption}</span>
        <Image
          src={arrowIcon}
          alt="arrow"
          className={styles.arrowIcon}
          width={24}
          height={24}
        />
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownListItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
