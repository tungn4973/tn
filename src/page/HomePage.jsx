import { Helmet } from "react-helmet-async"
import imgService1 from "../assets/services/dv1.jpg"
import imgService2 from "../assets/services/dv2.png"
import imgService3 from "../assets/services/dv3.png"
import imgService4 from "../assets/services/dv4.png"
import imgService5 from "../assets/services/dv5.png"
import imgService6 from "../assets/services/dv6.png"

import imgPartner1 from "../assets/partner/BVDHY.png"
import imgPartner2 from "../assets/partner/BVK.png"
import imgPartner3 from "../assets/partner/BV_xanhpon.png"
import imgPartner4 from "../assets/partner/BVvietduc.png"
import imgPartner5 from "../assets/partner/cao-dang-y-te-asean.png"
import imgPartner6 from "../assets/partner/cao-dang-y-te-ha-dong.png"
import imgPartner7 from "../assets/partner/logo1.png"
import { useNavigate } from "react-router-dom"



export default function HomePage() {
    const services = [
        {id: 1, name: "Chăm sóc bệnh nhân 24/24", img: imgService1},
        {id: 2, name: "Chăm sóc bệnh nhân tại nhà", img: imgService2},
        {id: 3, name: "Chăm sóc người cao tuổi", img: imgService3},
        {id: 4, name: "Chăm sóc bệnh nhân tại bệnh viện", img: imgService4},
        {id: 5, name: "Chăm sóc bệnh nhân ung thư", img: imgService5},
        {id: 6, name: "Chăm sóc bệnh nhân tại Hà Nội", img: imgService6},
    ]

    const partners = [
        {id: 1, name:"Bệnh viện Đại học Y", img: imgPartner1},
        {id: 2, name:"Bệnh viện K", img: imgPartner2},
        {id: 3, name:"Bệnh viện Xanh-pon", img: imgPartner3},
        {id: 4, name:"Bệnh viện Việt Đức", img: imgPartner4},
        {id: 5, name:"Cao đẳng y tế Asean", img: imgPartner5},
        {id: 6, name:"Cao đẳng y tế Hà Đông", img: imgPartner6},
        {id: 7, name:"Phòng khám đa khoa Tre Việt", img: imgPartner7},
    ]

    const styles = {
        mainContainer: `
            w-full
            flex-grow
            p-0
            bg-blue-100
        `,
        container1: `
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            py-16
            px-5
            md:px-10
            pt-[90px]
        `,
        titleColumn: `
            w-full
            md:w-2/5
            pr-0
            md:pr-8
            mb-8
            text-center
            md:text-left
            
        `,
        subTitle: `
            text-5xl
            font-light
            text-blue-700
            block
            leading-tight
        `,
        mainTitle: `
            text-5xl 
            md:text-7xl 
            font-extrabold 
            text-blue-600 
            block 
            mt-2
        `,
        contentColumn: `
            w-3/5 
            pl-0
            md:pl-8
            border-l-0 
            md:border-l-2 
            border-black
        `,
        mainText: `
            text-lg 
            text-gray-800 
            mb-4 
            leading-relaxed
        `,
        subText: `
            text-lg 
            text-gray-600 
            leading-relaxed
        `,

        container2: `
            grid
            grid-cols-1
            sm:grid-cols-3
            lg:grid-cols-3
            gap-6
            p-[50px]
        `,
        itemCard: `
            flex
            flex-col
            items-center
            bg-gray-100
            rounded-2xl
        `,
        imageBox: `
            w-full
            aspect-square
            overflow-hidden
            rounded-2xl
            border
            border-gray-100

        `,
        image: `
            w-full
            h-full
            object-cover

        `,
        serviceName: `
            p-3
            flex items-center justify-center
            text-center
            text-lg
            font-bold
            text-green-500
        `,
        container3: `
            grid
            grid-cols-[repeat(auto-fit,minmax(140px,1fr))]
            gap-4
            place-items-center
            p-[50px]
        `,
        logoParner: `max-w-[130px] h-auto select-none`,
        partnerBox: `
            flex items-center justify-center
            w-[130px]
            aspect-square
            overflow-hidden
            rounded-2xl
            border
            border-blue-500
        `,
    }

    return (
        <>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>

            <div className={styles.mainContainer}>
                <div className={styles.container1}>
                    <div className={styles.titleColumn}>
                        <h2>
                            <span className={styles.subTitle}>
                                Giới thiệu về
                            </span>

                            <span className={styles.mainTitle}>
                                HealthCare
                            </span>
                        </h2>
                    </div>

                    <div className={styles.contentColumn}>
                        <p className={styles.mainText}>
                            Bất cứ người bệnh nào cũng xứng đáng có được sự chăm sóc tốt nhất cả về thể chất và tinh thần. Đó chính là nền tảng tạo nên những nhân viên chăm sóc bệnh nhân thay người nhà tuyệt vời tại AnCare
                            Nhân viên Chăm sóc tại AnCare đều xuất phát từ các trường đại học/cao đẳng được đào tạo chính quy, lành nghề, chuyên nghiệp, mang tới dịch vụ chăm sóc tốt hơn cả người thân của bạn.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-center text-2xl text-blue-700 font-bold">DỊCH VỤ CHĂM SÓC BỆNH NHÂN THAY NGƯỜI NHÀ</h3>
                    <div className="w-1/3 h-[2px] bg-black mt-5"></div>
                </div>

                <ul className={styles.container2}>
                    {services.map((service) => (
                        <li key={service.id} className={styles.itemCard}>
                            <div className={styles.imageBox}>
                                <img 
                                    src={service.img} 
                                    alt={service.name}
                                    className={styles.image} 
                                />
                            </div>
                            <span className={styles.serviceName}>
                                {service.name}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col items-center">
                    <h3 className="text-center text-2xl font-bold text-blue-500">
                        Đối tác của chúng tôi
                    </h3>
                    <div className="w-1/3 h-[1px] bg-black mt-5"></div>
                </div>

                <ul className={styles.container3}>
                    {partners.map((partner) => (
                        <li key={partner.id} className={styles.partnerBox}>
                                <img 
                                    src={partner.img}
                                    alt={partner.name}
                                    className={styles.logoParner}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}