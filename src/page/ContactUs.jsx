import { div } from "framer-motion/client"
import imagePath from "../assets/contactus/contactus.png"

export default function ContactUs() {
    const styles = {
        mainContainer: `flex w-full items-center justify-center bg-blue-100 md:p-[40px]`,
        wrapper: `flex flex-col md:flex-row w-full items-center justify-center bg-white p-[10px] md:p-[70px] rounded-2xl shadow-md`,
        image: `w-[90%] md:w-[600px] h-auto md:mr-8`,

        container6: `flex flex-col items-center w-full justify-center md:items-start md:pl-[70px]`,
        inputCard: `flex flex-col w-full max-w-[550px] items-center justify-center bg-white border-2 border-black p-6 mx-auto rounded-lg md:mx-0`,
        infoBox: `w-full max-w-[550px] text-left mb-6`,
        input: `w-full p-3 mb-4 rounded-lg border border-black outline-none text-black focus:ring-2 focus:ring-blue-300`,
        submitButton: `w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 uppercase`,
        title: `text-3xl font-bold mb-1`,
        content: `text-base text-black leading-relaxed`,
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapper}>
                <img 
                    src={imagePath} 
                    alt="" 
                    className={styles.image}
                />

                <div className={styles.container6}>
                    <div className={styles.infoBox}>
                        <h2 className={styles.title}>Liên hệ</h2>
                        <p className={styles.content}>Liên hệ ngay với chúng tôi để được hỗ trợ</p>
                        <p className={styles.content}>Địa chỉ: Số..., phường.........., quận.............., Thành phố Hà Nội</p>
                        <p className={styles.content}>Email: dvhealthcare@gmail.com</p>
                        <p className={styles.content}>Hotline: 0000 000 000</p>
                    </div>

                    <div className={styles.inputCard}>
                        <h2 className={styles.title}>Đăng kí nhận tư vấn dịch vụ</h2>
                        <p className={styles.content}>Vui lòng để lại thông tin để được tư vấn</p>
                        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="text"
                                placeholder="Họ và tên"
                                className={styles.input}
                                required 
                            />
                            <input 
                                type="text"
                                placeholder="Số điện thoại"
                                className={styles.input}
                                required 
                            />
                            <input 
                                type="text"
                                placeholder="Email"
                                className={styles.input}
                                required 
                            />
                            <input 
                                type="text"
                                placeholder="Nội dung"
                                className={`${styles.input} h-32 `}
                                required 
                            />
                        </form>
                        <button type="submit" className={styles.submitButton}>
                            Đặt lịch ngay
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    )
}