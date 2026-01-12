import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import bannerPath from "../assets/banner.png"
import NurseCard from "../components/nurse/NurseCard";
import DoctorPath1 from "../assets/nurse/doctor.png"
import NursePath from "../assets/nurse/nurse.png"
import DoctorPath2 from "../assets/nurse/doctor2.png"
import DoctorPath3 from "../assets/nurse/doctor3.png"
import { SearchOutlined } from "@ant-design/icons";


export default function NurseList() {

    const nurses = [
        {
            id: 1,
            name: "Nguyễn Văn Hưng",
            age: 30,
            experience: 6,
            services: ["Tắm rửa", "Cho ăn", "Đi lại", "Xoa bóp"],
            image: DoctorPath1,
            skill: [
                {
                    id: 1,
                    name: "Chăm sóc người già",
                    video: "/videos/skill-care.mp4",
                },
                {
                    id: 2,
                    name: "Vật lý trị liệu",
                    video: "/videos/skill-physio.mp4",
                },
            ],
            reviews: [
                { id: 1, star: 5, comment: "Hộ lý rất tận tâm" },
                { id: 2, star: 4, comment: "Làm việc chuyên nghiệp" },
            ],
        },
        {
            id: 2,
            name: "Trần Thị Hương",
            age: 35,
            experience: 10,
            services: ["Tắm rửa", "Đo huyết áp"],
            image: NursePath,
        },
        {
            id: 3,
            name: "Lê Văn Thắng",
            age:40,
            experience: 7,
            services: ["Cho ăn", "Vệ sinh cá nhân", "Thay bỉm"],
            image: DoctorPath2,
        },
        {
            id: 4,
            name: "Nguyễn Đình Hải",
            age: 29,
            experience: 3,
            services: ["Uống thuốc", "Kiểm tra sức khỏe", "Cho ăn"],
            image: DoctorPath3,
        }
    ];

    const navigate = useNavigate()
    const [keyword, setKeyword] = useState("")
    const [findNurse, setFindNurse] = useState(nurses)
    const searchRef = useRef(null)

    const handleSearch = () => {
        const lower = keyword.trim().toLowerCase();
        if (lower === "") {
            setFindNurse(nurses);
            return;
        }
        const find = nurses.filter(item =>
            item.name.toLowerCase().includes(lower) ||
            item.services.some(s => s.toLowerCase().includes(lower))
        );
        setFindNurse(find)
    }

    const styles = {
        bannerHome: `
            w-full
            h-auto
        `,
        titleSection: `
            text-3xl 
            font-bold 
            text-blue-800
            mb-1
            mt-1
            text-center
        `,
        contentSection: `
            flex
            flex-col
            justify-center
            bg-white
        `,
        contentContainer: `
            w-full
            md:w-2/3
            py-1
            mx-auto
        `,
        searchBox: `
            relative
            flex
            py-2
            pl-2
        `,
        searchIcon: `
            absolute
            left-0
            pl-3
            text-gray-500
            cursor-pointer
            z-10
            top-1/2
            -translate-y-1/2
        `,
        searchInput: `
            border
            p-3
            rounded-full
            w-[350px]
            bg-gray-300
            shadow
            pl-10
            h-[48px]
        `,
    }

    return (
        <>
            <img 
                src={bannerPath} 
                alt="Banner" 
                className={styles.bannerHome}
            />

            <h1 className={styles.titleSection}>
                    DỊCH VỤ HỘ LÝ UY TÍN 
                
            </h1>

            <section className={styles.contentSection}>

                <div className={styles.searchBox} ref={searchRef}>
                    <SearchOutlined 
                        className={styles.searchIcon} 
                        style={{fontSize: "20px"}}
                        onClick={handleSearch}
                    />
                    
                    <input 
                        type="text"
                        className={styles.searchInput}
                        placeholder="Nhập tên hộ lý hoặc dịch vụ cần tìm kiếm"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                </div>  

                
                <div className={styles.contentContainer}>
                    <NurseCard data={findNurse}/>
                </div>
            </section>
        </>
    )
}