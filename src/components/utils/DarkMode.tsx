import { FaSun} from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { useDarkMode } from "~/stores/DarkMode";

interface DarkModeProps {
  size: string,
}

const DarkMode = ({ size = 'small' }: DarkModeProps) => {
  const darkMode = useDarkMode((state: { darkMode: boolean; }) => state.darkMode);
  const update = useDarkMode(state => state.update);

  return (
    <button onClick={() => update(!darkMode)}>
      {
        darkMode
          ? <FaRegMoon className="text-dark-primary w-7 h-7 hover:text-dark-primary-light transition-all" />
          : <FaSun className="text-light-secondary w-7 h-7 hover:text-light-secondary-dark transition-all" />
      }
    </button>
  )
} 

export default DarkMode;