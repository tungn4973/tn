import { useNavigate } from "react-router-dom"
import imgPartner1 from "../assets/partner/BVDHY.png"
import imgPartner2 from "../assets/partner/BVK.png"
import imgPartner3 from "../assets/partner/BV_xanhpon.png"
import imgPartner4 from "../assets/partner/BVvietduc.png"
import imgPartner5 from "../assets/partner/cao-dang-y-te-asean.png"
import imgPartner6 from "../assets/partner/cao-dang-y-te-ha-dong.png"
import imgPartner7 from "../assets/partner/logo1.png"

export default function Partner() {
    const partners = [
        {id: 1, name:"Bệnh viện Đại học Y", img: imgPartner1},
        {id: 2, name:"Bệnh viện K", img: imgPartner2},
        {id: 3, name:"Bệnh viện Xanh-pon", img: imgPartner3},
        {id: 4, name:"Bệnh viện Việt Đức", img: imgPartner4},
        {id: 5, name:"Cao đẳng y tế Asean", img: imgPartner5},
        {id: 6, name:"Cao đẳng y tế Hà Đông", img: imgPartner6},
        {id: 7, name:"Phòng khám đa khoa Tre Việt", img: imgPartner7},
    ]
    const navigate = useNavigate()

    const styles = {
        mainContainer: `flex flex-col w-full items-center`,
        mainTitle: `text-center text-2xl font-bold text-blue-700 pt-5`,
        container1: `w-[90%] md:w-[600px] p-5`,
        partnerList: `flex flex-col gap-4`,
        itemCard: `grid grid-cols-[130px_1fr] items-center h-[130px] border-2 border-blue-700 cursor-pointer overflow-hidden hover:shadow-lg transition-shadow px-5`,
        logoImage: `max-w-[130px] h-auto`,
    }

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>CÁC ĐỐI TÁC CỦA CHÚNG TÔI</h1>
            <div className="w-1/3 h-[2px] bg-black mt-5"></div>
            <h2 className="p-3 text-blue-500">Hãy bấm vào để xem chi tiết</h2>

            <div className={styles.container1}>
                <div className={styles.partnerList}>
                    {partners.map((partner) => (
                        <div 
                            key={partner.id} 
                            className={styles.itemCard}
                            onClick={() => navigate(`/partner/${partner.id}`)}
                        >
                            <img 
                                src={partner.img}
                                alt={partner.name} 
                                className={styles.logoImage}
                            />
                            
                            <div className="text-center">
                                {partner.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}