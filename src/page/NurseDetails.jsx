import { useParams } from "react-router-dom"
import { useState } from "react"
import DoctorPath1 from "../assets/nurse/doctor.png"
import VideoTest from "../assets/services/videotest.mp4"
import { StarOutlined, StarFilled } from "@ant-design/icons"

export default function NurseDetails() {
    const { id } = useParams();
    const [activeSkill, setActiveSkill] = useState(null)
    const [commentContent, setCommentContent] = useState("")
    const [evaluate, setEvaluate] = useState(5)

    const nurses = [
        {
            id: 1,
            name: "Nguyễn Văn Hưng",
            age: 30,
            experience: 6,
            image: DoctorPath1,
            skills: [
                {
                    id: 1,
                    name: "Tắm rửa",
                    video: VideoTest,
                    comments: [
                        {
                            comment_id: 1,
                            client_id: 10,
                            ch_id: 1,
                            skill_id: 1,
                            content: "Hộ lý làm rất cẩn thận",
                            evaluate: 5,
                            create_at: "2025-01-22T14:00:00",
                        },
                        {
                            comment_id: 2,
                            client_id: 102,
                            ch_id: 1,
                            skill_id: 1,
                            content: "Thao tác nhẹ nhàng",
                            evaluate: 4,
                            create_at: "2025-01-23T09:10:00",
                        },
                    ],
                },
            ],
        },
        
    ]

    const nurse = nurses.find((n) => n.id === Number(id));
    if (!nurse) {
        return <p>Không tìm thấy hộ lý</p>
    }

    const sortedComments = [...(activeSkill?.comments || [])].sort(
        (a, b) => new Date(b.create_at) - new Date(a.create_at)
    )

    const handleSendComment = () => {
        if (!commentContent.trim()) return;

        const newComment = {
            comment_id: Date.now(),
            client_id: 999,
            ch_id: nurse.id,
            skill_id: activeSkill.id,
            content: commentContent,
            evaluate: evaluate,
            create_at: new Date().toISOString(),
        }

        setActiveSkill((prev) => ({
            ...prev,
            comments: [newComment, ...(prev.comments || [])],
        }))

        setCommentContent("")
        setEvaluate(5)
    }

    const StarPicked = ({ value, onChange }) => (
        <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => 
                i <= value ? (
                    <StarFilled 
                        key={i}
                        onClick={() => onChange(i)}
                        className="text-yellow-400 text-xl cursor-pointer"
                    />
                
            ) : (
                <StarOutlined 
                    key={i}
                    onClick={() => onChange(i)}
                    className="text-gray-300 text-xl cursor-pointer hover:text-yellow-300"
                />
            ))}
        </div>
    )

     const styles = {
        pageWrapper: `flex flex-col gap-4`,
        nurseCard: `flex items-center gap-4 bg-white rounded-lg shadow border-2 p-4`,
        nurseImage: `w-[200px] h-[200px] object-cover rounded-md`,
        skillList: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pl-5 `,
        skillItem: `px-4 py-2 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-200 transition`,
       
        modalOverlay:`fixed inset-0 bg-black/70 flex items-center justify-center z-[100]`,
        modalBox: `bg-white w-[95%] md:w-[80%] rounded-xl overflow-hidden`,
        modalContent: `grid grid-cols-1 md:grid-cols-3 gap-4`,
        commentSection: `p-4 bg-gray-50 rounded-lg border-1 max-h-[500px] flex flex-col`,
        commentItem: `border-b pb-3 mb-3`,
        commentTime: `text-xs text-gray-400 mt-1`,
        commentList: `bg-white rounded-md border p-3 flex-1 overflow-y-auto mb-4`,
        commentInputBox: `bg-white border rounded-md p-3`
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.nurseCard}>
                <img 
                    src={nurse.image} 
                    alt={nurse.name}
                    className={styles.nurseImage}
                />

                <div className={styles.nurseInfo}>
                    <h2 className="text-lg font-semibold">{nurse.name}</h2>
                    <p className="text-sm text-gray-600">Tuổi: {nurse.age}</p>
                    <p className="text-sm text-gray-600">Kinh nghiệm: {nurse.experience} năm</p>
                </div>
            </div>

            <h3 className="pl-5 font-semibold">Kỹ năng</h3>
            <div className={styles.skillList}>
                {nurse.skills.map((skill) => (
                    <div
                        key={skill.id}
                        className={styles.skillItem}
                        onClick={() => setActiveSkill(skill)}
                    >
                        {skill.name}
                    </div>
                ))}
            </div>

            {activeSkill && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setActiveSkill(null)}
                > 
                    <div
                        className={styles.modalBox}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalContent}>
                            <div className="md:col-span-2 bg-black">
                                <div className="p-2 text-white text-center font-semibold">
                                    Kỹ năng: {activeSkill.name}
                                </div>
                                <video 
                                    src={activeSkill.video}
                                    controls
                                    autoPlay
                                    className="w-full aspect-video"
                                />
                            </div>

                            {/* Comment */}
                            <div className={styles.commentSection}>
                                <h4 className="font-semibold mb-3">
                                    Bình luận
                                </h4>

                                <div className={styles.commentList}>
                                    {sortedComments.length ? (
                                        sortedComments.map((c) => (
                                            <div 
                                                key={c.comment_id} 
                                                className={styles.commentItem}
                                            >
                                                <div className="flex gap-1 mb-1">
                                                    {[1, 2, 3, 4, 5].map((i) => 
                                                        i <= c.evaluate ? (
                                                            <StarFilled key={i} className="text-yellow-400" />
                                                        ) : (
                                                            <StarOutlined key={i} className="text-gray-300" />
                                                        )
                                                    )}
                                                </div>

                                                <p className="text-sm">{c.content}</p>
                                                <div className={styles.commentTime}>
                                                    {new Date(
                                                        c.create_at
                                                    ).toLocaleString()}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-400 italic text-sm">
                                            Chưa có bình luận
                                        </p>
                                    )}
                                </div>
                                
                                <div className={styles.commentInputBox}>
                                    <StarPicked 
                                        value={evaluate}
                                        onChange={setEvaluate}
                                    />

                                    <textarea 
                                        className="border rounded w-full p-2 text-sm mt-3"
                                        placeholder="Nhập bình luận..."
                                        value={commentContent}
                                        onChange={(e) => setCommentContent(e.target.value)}
                                    />

                                    <button
                                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                        onClick={handleSendComment}
                                        disabled={!commentContent}
                                    >
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            )}  
        </div>
    )
}