import React, { useState } from 'react';

export default function Career() {
    const [activeView, setActiveView] = useState('info'); // 'info' or 'positions'
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [file, setFile] = useState(null);

    // Data for the "Hộ lý" position
    const hoLyPosition = {
        id: 1,
        name: "Hộ lý",
        department: "KHỐI NGHỈ DƯỠNG & CHĂM SÓC SỨC KHỎE",
        salary: "10 - 18 triệu",
        count: "10",
        deadline: "31/12/2025",
        description: "Chăm sóc sức khỏe toàn diện cho khách hàng tại các cơ sở của Phương Đông Asahi.",
        requirements: [
            "Tốt nghiệp Trung cấp Y trở lên các chuyên ngành: Điều dưỡng, Hộ lý, Y sĩ đa khoa...",
            "Có kinh nghiệm làm việc trong lĩnh vực chăm sóc sức khỏe là một lợi thế.",
            "Nhiệt tình, có tinh thần trách nhiệm cao, yêu nghề và yêu người cao tuổi.",
            "Sức khỏe tốt, có khả năng làm việc theo ca."
        ],
        benefits: [
            "Lương theo năng lực, thưởng theo hiệu quả công việc.",
            "Được đào tạo chuyên môn bài bản về kỹ năng chăm sóc DuPont.",
            "Được cung cấp đồng phục, trang thiết bị làm việc.",
            "Được hưởng đầy đủ chế độ bảo hiểm (BHXH, BHYT, BHTN).",
            "Có cơ hội thăng tiến lên các vị trí quản lý."
        ]
    };

    // General benefits data
    const generalBenefits = [
        "Lương thưởng hấp dẫn",
        "Du lịch nghỉ dưỡng hàng năm",
        "Bảo hiểm sức khỏe cao cấp",
        "Cơ hội thăng tiến rõ ràng",
        "Đào tạo chuyên môn bài bản",
        "Môi trường làm việc chuyên nghiệp"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData, file);
        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
        setFile(null);
        // Show success message
        alert('Cảm ơn bạn đã ứng tuyển! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    };

    const styles = {
        mainContainer: `flex flex-col items-center w-full overflow-x-hidden bg-slate-50`,
        
        // Header section
        headerContainer: `relative w-full h-[400px] bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 flex flex-col items-center justify-center overflow-hidden`,
        headerPattern: `absolute inset-0 opacity-10`,
        title: `text-white text-center font-bold text-6xl mb-4 relative z-10`,
        subtitle: `text-white text-center text-xl max-w-3xl px-4 relative z-10 mb-8`,
        navTabs: `flex bg-white/20 backdrop-blur-md rounded-full p-1 relative z-10 shadow-lg`,
        navTab: `px-8 py-3 rounded-full text-black font-bold transition-all cursor-pointer hover:bg-white/10`,
        activeNavTab: `bg-white text-black font-bold shadow-md`,
        
        // Info section
        infoContainer: `flex flex-col md:flex-row w-full max-w-7xl mx-auto p-8 mt-16 gap-12`,
        infoLeft: `flex-1`,
        infoTitle: `text-4xl font-bold text-cyan-800 mb-6`,
        infoContent: `text-gray-700 leading-relaxed mb-6 text-lg`,
        contactIcons: `flex gap-4 mt-8`,
        iconButton: `w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-all hover:scale-110 shadow-lg`,
        
        // Benefits section
        benefitsContainer: `flex flex-col md:flex-row w-full max-w-7xl mx-auto p-8 mt-16 bg-white rounded-2xl shadow-xl`,
        benefitsLeft: `flex-1 p-6`,
        benefitsTitle: `text-4xl font-bold text-teal-600 mb-8`,
        benefitsList: `space-y-5`,
        benefitItem: `flex items-start gap-4`,
        benefitIcon: `w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md`,
        benefitText: `text-gray-700 text-lg`,
        benefitsRight: `flex-1 flex items-center justify-center p-6`,
        
        // Job detail section
        jobDetailContainer: `w-full max-w-5xl mx-auto p-8 mt-16`,
        jobCard: `bg-white rounded-2xl p-10 shadow-2xl border border-gray-100`,
        jobName: `text-4xl font-bold text-gray-800 mb-2`,
        jobDepartment: `text-xl text-cyan-600 font-medium mb-6`,
        jobDescription: `text-gray-700 mb-8 text-lg`,
        sectionTitle: `text-2xl font-semibold text-gray-800 mb-4 mt-8`,
        list: `list-disc list-inside space-y-3 text-gray-600 ml-4 text-lg`,
        jobDetails: `grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl`,
        jobDetail: `text-center`,
        jobDetailLabel: `block text-sm text-gray-500 mb-2 uppercase tracking-wide`,
        jobDetailValue: `block text-xl font-bold text-cyan-600`,
        applyButton: `mt-10 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1`,
        
        // Application form section
        applicationContainer: `flex flex-col md:flex-row w-full bg-gradient-to-br from-teal-50 to-cyan-100 px-4 py-16 mt-20`,
        applicationLeft: `flex-1 p-8`,
        applicationRight: `flex-1 flex items-center justify-center p-8`,
        inputCard: `flex flex-col w-full md:w-[550px] items-center justify-center bg-white p-8 mx-auto rounded-2xl shadow-2xl`,
        input: `w-full p-4 mb-5 rounded-lg border border-gray-200 outline-none text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`,
        submitButton: `w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition-all uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1`,
        titleWhite: `text-3xl font-bold mb-3 text-cyan-800 text-center`,
        contentWhite: `text-base text-gray-600 mb-8 text-center`,
        title: `text-4xl font-bold mb-6 text-center text-gray-800`,
        content: `text-lg text-gray-700 leading-relaxed text-center`,
        fileLabel: `w-full p-4 mb-5 rounded-lg border-2 border-dashed border-gray-300 text-center cursor-pointer hover:border-teal-500 transition-all flex items-center justify-center`,
        fileName: `text-sm text-gray-500 mt-2`,
        headerShape: `absolute bottom-0 left-0 right-0`,
    };

    return (
        <div className={styles.mainContainer}>
            {/* Header Section with Pattern Background */}
            <div className={styles.headerContainer}>
                {/* Decorative Pattern */}
                <svg className={styles.headerPattern} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" fillOpacity="0.1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                
                <h2 className={styles.title}>TUYỂN DỤNG VỊ TRÍ HỘ LÝ</h2>
                <p className={styles.subtitle}>Phương Đông Asahi đang tìm kiếm những nhân viên Hộ lý tài năng, tận tâm</p>
                
                {/* Navigation Tabs */}
                <div className={styles.navTabs}>
                    <button 
                        className={`${styles.navTab} ${activeView === 'info' ? styles.activeNavTab : ''}`}
                        onClick={() => setActiveView('info')}
                    >
                        Thông tin tuyển dụng
                    </button>
                    <button 
                        className={`${styles.navTab} ${activeView === 'positions' ? styles.activeNavTab : ''}`}
                        onClick={() => setActiveView('positions')}
                    >
                        Vị trí tuyển dụng
                    </button>
                </div>
            </div>

            {/* Content based on active view */}
            {activeView === 'info' ? (
                <>
                    {/* Info Section */}
                    <div className={styles.infoContainer}>
                        <div className={styles.infoLeft}>
                            <h3 className={styles.infoTitle}>THÔNG TIN TUYỂN DỤNG</h3>
                            <p className={styles.infoContent}>
                                Phương Đông Asahi là đơn vị hàng đầu trong lĩnh vực chăm sóc sức khỏe - DuPont. Chúng tôi đang tìm kiếm những chuyên gia Hộ lý tài năng, nhiệt huyết để cùng phát triển và mang đến những dịch vụ chăm sóc tốt nhất cho khách hàng.
                            </p>
                            <p className={styles.infoContent}>
                                Với sự hợp tác cùng các đối tác quốc tế, chúng tôi cam kết mang đến môi trường làm việc chuyên nghiệp, cơ hội phát triển sự nghiệp và chế độ đãi ngộ hấp dẫn cho đội ngũ nhân viên.
                            </p>
                            <div className={styles.contactIcons}>
                                <button className={styles.iconButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </button>
                                <button className={styles.iconButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </button>
                                <button className={styles.iconButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.38-1.13 8.11-1.6 10.76-.2 1.13-.59 1.51-.97 1.55-.82.07-1.45-.54-2.24-1.06-1.24-.82-1.95-1.33-3.15-2.13-1.39-.92-.49-1.43.31-2.26.21-.22 3.86-3.54 3.93-3.84.01-.04.01-.18-.07-.26s-.2-.05-.29-.03c-.12.03-2.09 1.33-5.91 3.91-.56.38-1.06.57-1.52.56-.5-.01-1.46-.28-2.18-.51-.88-.28-1.57-.43-1.51-.91.03-.25.38-.51 1.04-.78 4.07-1.77 6.79-2.94 8.15-3.52 3.88-1.62 4.68-1.9 5.2-1.91.12 0 .37.03.53.17.14.12.18.28.2.44-.01.06 0 .23-.02.34z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <img src={require("../assets/aboutus/aboutus1.png")} alt="aboutus1" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className={styles.benefitsContainer}>
                        <div className={styles.benefitsLeft}>
                            <h3 className={styles.benefitsTitle}>CHẾ ĐỘ ĐÃI NGỘ HẤP DẪN</h3>
                            <div className={styles.benefitsList}>
                                {generalBenefits.map((benefit, index) => (
                                    <div key={index} className={styles.benefitItem}>
                                        <div className={styles.benefitIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className={styles.benefitText}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.benefitsRight}>
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <img src={require("../assets/aboutus/aboutus2.png")} alt="aboutus2" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                /* Job Detail Section */
                <div className={styles.jobDetailContainer}>
                    <div className={styles.jobCard}>
                        <h3 className={styles.jobName}>{hoLyPosition.name}</h3>
                        <p className={styles.jobDepartment}>{hoLyPosition.department}</p>
                        <p className={styles.jobDescription}>{hoLyPosition.description}</p>

                        <h4 className={styles.sectionTitle}>Mô tả công việc:</h4>
                        <ul className={styles.list}>
                            <li>Chăm sóc sức khỏe, vệ sinh cá nhân hàng ngày cho người cần chăm sóc.</li>
                            <li>Theo dõi, đo và ghi lại các chỉ số sinh tồn (huyết áp, nhịp tim, nhiệt độ...).</li>
                            <li>Phân phát thuốc theo đúng chỉ định của bác sĩ.</li>
                            <li>Hỗ trợ người cần chăm sóc trong các hoạt động sinh hoạt hàng ngày (ăn uống, đi lại...).</li>
                            <li>Lập báo cáo tình hình sức khỏe hàng ngày cho gia đình và cấp trên.</li>
                        </ul>

                        <h4 className={styles.sectionTitle}>Yêu cầu công việc:</h4>
                        <ul className={styles.list}>
                            {hoLyPosition.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>

                        <h4 className={styles.sectionTitle}>Quyền lợi được hưởng:</h4>
                        <ul className={styles.list}>
                            {hoLyPosition.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>

                        <div className={styles.jobDetails}>
                            <div className={styles.jobDetail}>
                                <span className={styles.jobDetailLabel}>Mức lương</span>
                                <span className={styles.jobDetailValue}>{hoLyPosition.salary}</span>
                            </div>
                            <div className={styles.jobDetail}>
                                <span className={styles.jobDetailLabel}>Số lượng</span>
                                <span className={styles.jobDetailValue}>{hoLyPosition.count}</span>
                            </div>
                            <div className={styles.jobDetail}>
                                <span className={styles.jobDetailLabel}>Hạn nộp hồ sơ</span>
                                <span className={styles.jobDetailValue}>{hoLyPosition.deadline}</span>
                            </div>
                        </div>

                        <button 
                            className={styles.applyButton}
                            onClick={() => setActiveView('info')}
                        >
                            Ứng tuyển ngay
                        </button>
                    </div>
                </div>
            )}

            {/* Application Form Section - Visible on both views */}
            <div className={styles.applicationContainer}>
                <div className={styles.applicationLeft}>
                    <h2 className={styles.title}>Đội ngũ tuyển dụng sẵn sàng hỗ trợ bạn</h2>
                    <p className={styles.content}>Sau khi nhận thông tin ứng tuyển, đội ngũ chuyên môn sẽ liên hệ với bạn sớm nhất. Vui lòng điền chính xác thông tin để nhận được liên hệ sớm nhất.</p>
                </div>

                <div className={styles.applicationRight}>
                    <div className={styles.inputCard}>
                        <h2 className={styles.titleWhite}>Đăng kí ứng tuyển</h2>
                        <p className={styles.contentWhite}>Vui lòng để lại một số thông tin</p>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="name"
                                placeholder="Họ và tên"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleInputChange}
                                required 
                            />
                            <input 
                                type="text"
                                name="phone"
                                placeholder="Số điện thoại"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleInputChange}
                                required 
                            />
                            <input 
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleInputChange}
                                required 
                            />
                            
                            <label className={styles.fileLabel}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span className="text-gray-700">
                                    {file ? file.name : "Tải CV của bạn lên"}
                                </span>
                                <input 
                                    type="file"
                                    accept=".pdf,.doc,.docs,.png,.jpg"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    required 
                                />
                            </label>
                            
                            <textarea 
                                name="message"
                                placeholder="Nội dung mong muốn"
                                className={`${styles.input} h-32 resize-none`}
                                value={formData.message}
                                onChange={handleInputChange}
                                required 
                            />
                        </form>
                        <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
                            GỬI HỒ SƠ NGAY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}