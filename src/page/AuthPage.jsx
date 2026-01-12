import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/auth.api";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const { login } = useAuth()

    const styles = {
        container: `min-h-screen flex items-center justify-center bg-gray-100`,
        card: `w-full max-w-lg bg-white rounded-2xl shadow-lg p-8`,
        title: `text-2xl font-semibold text-center mb-6`,
        form: `flex flex-col gap-4`,
        input: `border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400`,
        row: `flex gap-2`,
        button: `bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600`,
        switch: `text-center mt-6 text-sm`,
        link: `text-blue-500 hover:underline cursor-pointer`,
        note: `text-xs text-yellow-500`,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Vui lòng nhập đầy đủ thông tin")
            return
        }

        try {
            setLoading(true);

            const res = await loginApi(username, password);

            const {
                user_id,
                username: resUsername,
                role,
                access_token,
            } = res.data;

            login(access_token, {
                user_id,
                username: resUsername,
                role,
            });
            
            if (role === "careHelper") {
                window.open("https://tung1306.onrender.com", "_blank")
                navigate("/", { replace: true })
                return
            }
            navigate("/", { replace: true });
            } catch (err) {
                alert(err.response?.data?.detail || "Đăng nhập thất bại")
            } finally {
                setLoading(false);
            }
        }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    {isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}
                </h1>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* Register */}
                    {!isLogin && (
                        <>
                            <input className={styles.input} placeholder="Họ và tên" />
                            <input className={styles.input} placeholder="Số điện thoại" />
                            <input className={styles.input} placeholder="Email" />

                            <div className={styles.row}>
                                <input className={styles.input} placeholder="Xã" />
                                <input className={styles.input} placeholder="Tỉnh/Thành phố" />
                            </div>

                            <input className={styles.input} placeholder="Tên đăng nhập" />

                            <select className={styles.input}>
                                <option value="">---Loại khách hàng---</option>
                                <option value="personal">Cá nhân</option>
                                <option value="organization">Tổ chức</option>
                            </select>

                            <p className={styles.note}>
                                * Mật khẩu sẽ được tạo tự động và gửi về email đã nhập
                            </p>
                        </>
                    )}

                    {/* Login */}
                    {isLogin && (
                        <>
                            <input 
                                className={styles.input} 
                                placeholder="Tên đăng nhập" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input 
                                className={styles.input} 
                                type="password" 
                                placeholder="Mật khẩu" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </>
                    )}

                    <button 
                        type="submit"
                        className={styles.button}
                        disabled={loading}    
                    >
                        {isLogin ? "Đăng nhập" : "Đăng ký"}
                    </button>
                </form>

                <div className={styles.switch}>
                    {isLogin ? (
                        <span>
                            Chưa có tài khoản?{" "}
                            <button 
                                type="button"
                                onClick={() => setIsLogin(false)} 
                                className={styles.link}
                            >
                                Đăng ký
                            </button>
                        </span>
                    ) : (
                        <span>
                            Đã có tài khoản?{" "}
                            <button 
                                onClick={() => setIsLogin(true)} 
                                className={styles.link}
                            >
                                Đăng nhập
                            </button>
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}