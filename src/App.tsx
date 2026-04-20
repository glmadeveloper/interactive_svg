import IcadSVG from "./components/icons/IcadSVG";
import { icad_image } from "./exports/images";

export default function App() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${icad_image})` }}
    >
      
      <IcadSVG />
    </div>
  );
}