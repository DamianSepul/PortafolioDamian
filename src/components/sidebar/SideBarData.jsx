import { HiUserCircle, HiHome,HiDocumentText, HiPhone} from "react-icons/hi";
export const SideBarData =  [
    {
        title: "Home",
        icon: <HiHome size={42}/>,
        link: "/home"
    },
    {
        title: "About me",
        icon: <HiUserCircle size={42}/>,
        link: "/aboutme"
    },{
        title: "Resume",
        icon: <HiDocumentText size={42}/>,
        link: "/resume"
    },{
        title: "Contact",
        icon: <HiPhone size={42}/>,
        link: "/contact"
    }
]
 
