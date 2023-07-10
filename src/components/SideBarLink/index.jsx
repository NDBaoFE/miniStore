/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const SidebarLink = ({ child }) => {
    const navigate = useNavigate();
    return (
        <Link
            onClick={(e) => {
                navigate(e.target.href);
            }}
        >
            {child}
        </Link>
    );
};

export default SidebarLink;
