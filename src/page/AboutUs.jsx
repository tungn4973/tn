import { motion } from "framer-motion"
import bannerPath from "../assets/aboutus/bannerAboutus.png"
import imagePath1 from "../assets/aboutus/aboutus1.png"
import imagePath2 from "../assets/aboutus/aboutus2.png"
import imagePath3 from "../assets/nurse/doctor3.png"
import { CheckOutlined } from "@ant-design/icons"

export default function AboutUs() {
    const styles = {
        mainContainer: `flex flex-col p-0 bg-white overflow-x-hidden space-y-10`,
        banner: `w-full h-auto`,
        container1: `flex flex-col md:flex-row items-center w-full bg-white justify-center p-[40px] min-h-[300px] gap-5`,
        container3: `flex flex-col md:flex-row items-center w-full bg-green-200 justify-center p-[40px] min-h-[450px] gap-10`,
        container4: `flex flex-col md:flex-row items-center w-full bg-blue-200 justify-center p-[40px] min-h-[450px] gap-10`,
        container5: `flex flex-col md:flex-row items-center w-full bg-yellow-200 justify-center p-[40px] min-h-[450px] gap-10`,
        container6: `flex flex-col md:flex-row items-center w-full justify-center bg-gray-100`,
        
        cardInfo1: `flex flex-col w-full md:w-[500px] justify-center items-center p-5`,
        cardInfo2: `flex flex-col w-full md:w-1/2 justify-center items-center bg-white p-6`,
        inputCard: `flex flex-col w-full max-w-[600px] items-center justify-center bg-blue-500 p-6 mx-auto rounded-lg`,
        input: `w-full p-3 mb-4 rounded-lg border-none outline-none text-black focus:ring-2 focus:ring-blue-300`,
        submitButton: `w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg transition duration-300 uppercase`,

        titleWhite: `text-3xl font-bold mb-2 text-white text-center`,
        contentWhite: `text-base text-blue-100 mb-6 text-center`,
        title: `text-4xl font-bold mb-4 text-center p-2`,
        content: `text-base text-black leading-relaxed`,
        image:`w-[400px] md:w-[450px] h-auto rounded-lg shadow-lg`,
    }
    const slideInLeft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0, transition: { duration :0.8 }}
    }
    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    }

    return (
        <div className={styles.mainContainer}>
            <img 
                src={bannerPath} 
                alt="" 
                className={styles.banner}
            />

            <div className={styles.container1}>
                <div className={styles.cardInfo1}>
                    <h2 className={styles.title}>Vài nét về HEALTHCARE</h2>
                    <p className={styles.content}>Là công ty thành lập trong lĩnh vực “Dịch vụ chăm sóc người bệnh toàn diện” 
                        với đội ngũ điều dưỡng nhiều năm kinh nghiệm, 
                        được đào tạo chính quy, bài bản, 
                        AnCare mang đến cho bạn chất lượng chăm sóc tốt nhất.
                    </p>
                </div>
                <div>
                    <div className={styles.cardInfo1}>
                        <h2 className={styles.title}>Ưu điểm nổi bật</h2>
                        <ul className="gap-5">
                            <li>
                                <CheckOutlined className="text-green-500 mr-3" />
                                <span>Thương hiệu uy tín, hợp đồng điều dưỡng với các tuyến bệnh viện trung ương tại Hà Nội.</span>
                            </li>
                            <li>
                                <CheckOutlined className="text-green-500 mr-3" />
                                <span>Thay thế người nhà, chăm sóc toàn diện cho bệnh nhân từ thể chất đến tinh thần.</span>
                            </li>
                            <li>
                                <CheckOutlined className="text-green-500 mr-3" />
                                <span>Điều dưỡng viên chuyên nghiệp, xuất phát từ các trường đại học/cao đẳng được đào tạo chính quy, bài bản.</span>
                            </li>
                            <li>
                                <CheckOutlined className="text-green-500 mr-3" />
                                <span>Dịch vụ điều dưỡng tại nhà cho người cao tuổi hoặc người bệnh có nhu cầu.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-4xl font-bold">Giá trị cốt lõi</h2>
            <div className={styles.container3}>
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInLeft}
                    src={imagePath1}
                    className={styles.image}
                />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInRight}
                    className={styles.cardInfo2}
                >
                    <h2 className={styles.title}>Đối với chúng tôi</h2>
                    <p className={styles.content}>Khi một người bị bệnh, 
                        họ trở nên yếu đuối, nhạy cảm, cần được quan tâm đến mọi mặt của cuộc sống. 
                        Sứ mệnh của Ancare chính là mang đến cho người bệnh dịch vụ chăm sóc sức khỏe tốt nhất, 
                        từ thể chất đến tinh thần. Như một người thân bên bạn, với tất cả sự chuyên nghiệp và tận tâm, 
                        An Care cam kết bạn sẽ hoàn toàn hài lòng khi sử dụng dịch vụ của chúng tôi.</p>
                </motion.div>
            </div>

            <div className={styles.container4}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInLeft}
                    className={styles.cardInfo2}
                >
                    <h2 className={styles.title}>Đối với khách hàng</h2>
                    <p className={styles.content}>An Care chính là môi trường tuyệt vời cho các điều dưỡng viên 
                        với chế độ đãi ngộ tương xứng với năng lực và đóng góp, 
                        tạo ra các cơ hội làm việc tại các bệnh viện lớn và phát triển công bằng.</p>
                </motion.div>
                 <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInRight}
                    src={imagePath2}
                    className={styles.image}
                />
            </div>

            <div className={styles.container5}>
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInLeft}
                    src={imagePath1}
                    className={styles.image}
                />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInRight}
                    className={styles.cardInfo2}
                >
                    <h2 className={styles.title}>Đối với chúng tôi</h2>
                    <p className={styles.content}>Khi một người bị bệnh, họ trở nên yếu đuối, nhạy cảm, cần được quan tâm đến mọi mặt của cuộc sống. 
                        Sứ mệnh của Ancare chính là mang đến cho người bệnh dịch vụ chăm sóc sức khỏe tốt nhất, 
                        từ thể chất đến tinh thần. Như một người thân bên bạn, với tất cả sự chuyên nghiệp và tận tâm, 
                        An Care cam kết bạn sẽ hoàn toàn hài lòng khi sử dụng dịch vụ của chúng tôi.</p>
                </motion.div>
            </div>

            <div className={styles.container6}>
                <div className="w-full max-w-[500px] p-5">
                    <h2 className={styles.title}>Đội ngũ tư vấn sẵn sàng hỗ trợ bạn</h2>
                    <p className={styles.content}>Sau khi nhận thông tin đăng ký, đội ngũ hỗ trợ sẽ liên hệ với bạn sớm nhất
                        . Vui lòng điền chính xác thông tin để nhận được cuộc gọi tư vấn
                    </p>
                </div>

                <div className={styles.inputCard}>
                    <h2 className={styles.titleWhite}>Đăng kí nhận tư vấn dịch vụ</h2>
                    <p className={styles.contentWhite}>Vui lòng để lại thông tin để được tư vấn</p>
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
    )
}