import React from "react";
import { useNavigate } from "react-router-dom";
import LogoPath from "../../assets/logoxtp.jpg"
import { style } from "framer-motion/client";

const MobileNavbar = ({ navLink, isOpen, onClose, currentPath }) => {
    const navigate = useNavigate()
    
    const styles = {
        menu: `
            fixed
            top-0
            left-0
            h-full
            w-64
            bg-[rgb(0,79,28)]
            shadow-xl
            z-50
            transform
            transition-transform
            duration-300
            md:hidden
        `,
        menuHeader: `
            p-5 
            border-b 
            flex 
            justify-center
            items-center 
            h-[90px]
        `,
        logo: `
            h-[55px]
            w-auto
            cursor-pointer
        `,
        // Style cho tiêu đề menu
        menuTitle: `
            text-xl 
            font-bold
        `,
        // Style cho icon đóng
        closeIcon: `
            text-xl 
            cursor-pointer
        `,
        // Container chứa danh sách link
        linkList: `
            flex 
            flex-col 
            mt-2
        `,
        // Style cơ bản cho mỗi link item
        linkBase: `
            block 
            w-full 
            py-4 
            px-6 
            text-left 
            text-sm
            border
            border-1
            text-white
            font-oswald
            font-bold
            transition 
            duration-300
        `,
        // Style khi link đang active (trang hiện tại)
        linkActive: `
            bg-blue-100 
            text-yellow-700
        `,
        // Style khi link không active và hover
        linkInactive: `
            text-gray-800 
            hover:bg-yellow-100
        `,
    };

    const getMobileLinkClass = (path) => {
        const isActive = currentPath === path
        return `${styles.linkBase} ${isActive ? styles.linkActive : styles.linkInactive}`;
    };

    if (!isOpen) return null;

    return (
       <>
            {/* backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={onClose}
            />

            {/* Menu */}
            <div
                className={`${styles.menu} translate-x-0`}
                onClick={(e) => e.stopPropagation}
            >
                <div className={styles.menuHeader}>
                    <img 
                        src={LogoPath} 
                        alt="Logo"
                        className={styles.logo}
                        onClick={() => {
                            navigate("/")
                            onClose()
                        }} 
                    />
                </div>

                <ul className={styles.linkList}>
                    {navLink.map((link) => (
                        <li key={link.path} onClick={onClose}>
                            <button
                                onClick={() => navigate(link.path)}
                                className={`${styles.linkBase} ${
                                    currentPath === link.path
                                        ? styles.linkActive
                                        : styles.linkInactive
                                }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
       </>
    );
};
export default MobileNavbar