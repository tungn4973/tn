import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserOutlined, LoginOutlined, EditOutlined, HistoryOutlined } from "@ant-design/icons";

export default function UserDropdown() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const styles ={
        avatar: `w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer font-bold select-none`,
        dropdown: `absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border z-50 select-none`,
        item: `px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm select-none flex items-center gap-2`,
    }

    if (!user) return null

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Avatar */}
            <div
                className={styles.avatar}
                onClick={() => setOpen(!open)}
            >
                {user?.name?.charAt(0) || "U"}
            </div>

            {/* Dropdown */}
            {open && (
                <div className={styles.dropdown}>
                    <div
                        className={styles.item}
                        onClick={() => navigate("User/Profile")}
                    >
                        <UserOutlined />
                        Thông tin cá nhân
                    </div>

                    <div
                        className={styles.item}
                        onClick={() => navigate("User/ChangePassword")}
                    >
                        <EditOutlined />
                        Đổi mật khẩu
                    </div>

                    <div
                        className={`${styles.item} text-red-500`}
                        onClick={() => {
                            logout()
                            navigate("/")
                        }}
                    >
                        <LoginOutlined />
                        Đăng xuất
                    </div>
                </div>
            )}

        </div>
    )
}