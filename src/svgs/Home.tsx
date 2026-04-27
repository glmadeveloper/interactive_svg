import { home_image } from "../exports/images";
import { useCommunityActions } from "../hooks/useCommunityActions";
import type { Community } from "../types/communities"

export default function Home({
  setSelectedCommunity
}: {
  setSelectedCommunity: React.Dispatch<React.SetStateAction<Community>>
}) {
  const { setRef } = useCommunityActions({
    onSelectedCommunity: (key: Community) => {
      setSelectedCommunity(key);
    },
  })
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4096 2457"
    >
      <defs>
        <style>{".st0{fill:#fff;opacity:0}"}</style>
      </defs>
      <image width={8192} height={4914} transform="scale(.5)" xlinkHref={home_image} />
      <path
        ref={setRef("sadeem", "square")}
        className="st0"
        d="M1631.47 1675.22H2408.62V1830.0900000000001H1631.47z"
      />
      <path
        ref={setRef("maamourah_a", "square")}
       className="st0" d="M1699.5 649.24H2509.8V847.05H1699.5z" />
      <path 
        ref={setRef("icad", "square")}
      className="st0" d="M1065.67 1153.41H1743.33V1291.98H1065.67z" />
      <path 
        ref={setRef("mogharraq", "square")}
      className="st0" d="M166.1 709.08H786.32V853.4200000000001H166.1z" />
      <path
        className="st0"
        ref={setRef("maamourah_b", "square")}
        d="M2962.43 832.99H3772.7299999999996V1030.8H2962.43z"
      />
      <path 
        ref={setRef("razeen", "square")}
      className="st0" d="M3093.63 1888.85H3884.48V2086.66H3093.63z" />
    </svg>
  )
}
