import { useState } from "react"

export default function Profile() {
    const [client] = useState({
        fullname: "Nguyễn Đình Hải",
        phone: "0878145177",
        email: "mailfake3012@gmail.com",
        address: "Cầu giấy, Hà Nội"
    })
    
    const maskPhone = (phone) => {
        if (!phone) return ""
        return phone.replace(/^(\d{3})\d+(\d{2})$/, "$1****$2")
    }

    const maskEmail = (email) => {
        if (!email) return ""
        const [name, domain] = email.split("@")
        if (name.length <= 3) return `**@$(domain)`
        return `${name.slice(0,2)}****@${domain}`
    }

    return (
        <div className="flex flex-col items-center py-5">
            <h1 className="text-2xl font-semibold mb-6">
                Thông tin cá nhân
            </h1>

            <div className="w-[50%] bg-white rounded-xl shadow p-6">
                <InfoRow label="Họ và tên" value={client.fullname} />
                <InfoRow label="Số điện thoại" value={maskPhone(client.phone)} />
                <InfoRow label="Email" value={maskEmail(client.email)} />
                <InfoRow label="Địa chỉ" value={client.address} />
            </div>
        </div>
    )
}

function InfoRow({ label, value }) {
    return (
        <div className="flex justify-between py-3 border-b last:border-b-0">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-right">{value}</span>
        </div>
    )
}