import { useState, useRef, useEffect, useDebugValue } from "react";
import { BellOutlined, DollarOutlined, ReconciliationOutlined } from "@ant-design/icons";
import { style } from "framer-motion/client";

export default function NotificationBell() {
    const [open, setOpen] = useState(false)
    const bellRef = useRef(null)

    const [notifications, setNotifications] = useState([
       {
            notification_id: 1,
            user_id: 9,
            content: "Bạn đã thanh toán đơn hàng #123",
            isRead: false,
            created_at: "2025-12-25T10:30:00",
        },
        {
            notification_id: 2,
            user_id: 10,
            content: "Hộ lý Nguyễn Văn A vừa đăng tải kỹ năng mới",
            isRead: false,
            created_at: "2025-12-25T09:00:00",
        },
    ])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (bellRef.current && !bellRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const unreadCount = notifications.filter(n => !n.isRead).length;

    const markAsRead = (id) => {
        setNotifications(prev =>
            prev.map(n => 
                n.notification_id === id
                    ? {...n, isRead: true}
                    : n
            )
        )
    }

    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(n => ({...n, isRead: true}))
        )
    }

    const styles = {
        bell: `relative cursor-pointer text-xl select-none`,
        badge: `absolute -top-1 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center`,
        dropdown: `absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-xl border z-50 select-one`,
        item: `px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-none`,
        time: `text-xs text-gray-400 mt-1`,
    }

    return (
        <div className="relative" ref={bellRef}>
            {/* Bell icon */}
            <div
                className={styles.bell}
                onClick={() => setOpen(!open)}
            >
                <BellOutlined />
                {unreadCount > 0 && (
                    <span className={styles.badge}>
                        {unreadCount}
                    </span>
                )}
            </div>

            {/* Dropdown */}
            {open && (
                <div className={styles.dropdown}>
                    {/* Header */}
                    <div className="px-4 py-2 border-b text-sm font-medium select-none">
                        <div className="text-center">Thông báo</div>
                        
                        {unreadCount >0 && (
                            <div className="text-right mt-1">
                                <button
                                    onClick={markAllAsRead}
                                    className="text-blue-500 hover:underline text-xs"
                                >
                                    Đánh dấu tất cả là đã đọc
                                </button>
                            </div>
                        )}
                    </div>
                    {/* List */}
                    {notifications.length === 0 ? (
                        <div className="p-4 text-sm text-gray-500">
                            Không có thông báo
                        </div>
                    ) : (
                        notifications.map((item) => (
                            <div 
                                key={item.notification_id}
                                onClick={() => markAsRead(item.notification_id)} 
                                className={`${styles.item}
                                            ${
                                                item.isRead
                                                    ? "bg-gray-50 text-gray-400"
                                                    : "bg-white font-medium"
                                            }`
                                        }
                            >
                                <div className="text-sm">
                                    {item.content}
                                </div>

                                <div className={styles.time}>
                                    {new Date(item.created_at).toLocaleDateString("vi-VN")}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}
