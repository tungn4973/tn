import { useNavigate } from "react-router-dom";
import DoctorPath1 from "../../assets/nurse/doctor.png"
import NursePath from "../../assets/nurse/nurse.png"
import DoctorPath2 from "../../assets/nurse/doctor2.png"
import DoctorPath3 from "../../assets/nurse/doctor3.png"


export default function NurseCard({ data }) {
    const navigate = useNavigate()
    if (data.length === 0){
        return <p className="text-center text-gray-500 italic">Không tìm thấy hộ lý</p>
    }
    
    const styles = {
        nurseList: `flex flex-col gap-4`,
        nurseCard: `
            flex
            items-center
            gap-4
            bg-white
            rounded-lg
            shadow
            border-2
            border-blue-700
            p-4
            cursor-pointer
            group
            hover:shadow-lg
            transition
        `,
        nurseImage: `w-[200px] h-[200px] object-cover rounded-md`,
        nurseInfo: `flex flex-col gap-1`,
        nurseName: `text-lg font-semibold`,
        nurseAge: `text-sm text-gray-600`,
        nurseExperience: `text-sm text-gray-600`,
        detailButton: `
            hidden 
            group-hover:block
            ml-auto 
            text-blue-500 
            font-medium 
            whitespace-nowrap
        `,
    }

    return (
        <div className={styles.nurseList}>
            {data.map((nurse) => (
                <div
                    key={nurse.id}
                    className={styles.nurseCard}
                    onClick={() => navigate(`/nurses/${nurse.id}`)}
                >
                    <img 
                        src={nurse.image} 
                        alt={nurse.name}
                        className={styles.nurseImage}
                    />
                    <div className={styles.nurseInfo}>
                        <h3 className={styles.nurseName}>{nurse.name}</h3>
                        <p className={styles.nurseAge}>Tuổi: {nurse.age}</p>
                        <p className={styles.nurseExperience}>Kinh nghiệm: {nurse.experience} năm</p>
                    </div>
                    <div className={styles.detailButton}>
                        <h3>Xem chi tiết</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}