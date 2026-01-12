import mapImage from '../../assets/map.png'
export default function Footer() {
    const MAP_IMAGE = mapImage
    return (
        <div className="w-full bg-blue-500">
            <div className="container px-5 py-7 text-white">
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <p className="mb-1 font-bold">
                        Viện dưỡng lão ABCD
                    </p>
                    <p className="mb-1 font-bold">
                        Website: 
                        <a className="font-normal" href="http://localhost:3000/homepage"> http://localhost:3000</a>
                    </p>
                    <p className="mb-1 font-bold">
                        Facebook:
                        <a className="font-normal" href=""> facebook.com/holy88/</a>
                    </p>
                    <p className="mb-1 font-bold">
                        Hotline: 0000 000 000
                    </p>
                    <p className="mb-1">
                        Địa chỉ: Số... ngõ... Cầu Giấy, Hà Nội
                    </p>
                </div>

                <div className="md:w-2/3 md:ml-12">
                    <a 
                      href={"https://maps.app.goo.gl/1rBDFz5Rf8J8tBCN7"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full"
                      title="Xem vị trí trên Google Maps"
                    >
                        <div className="
                          w-[350px] 
                          h-[300px]                     /* Chiều cao của khung bản đồ */
                          text-center
                    
                          cursor-pointer 
                          relative
                          rounded-lg shadow-xl     /* Thêm bo góc và bóng đổ */
                        ">
                            {/* Placeholder: Bạn có thể thay bằng ảnh tĩnh của bản đồ */}
                            <img 
                                src={MAP_IMAGE}
                                alt="Bản đồ vị trí Viện dưỡng lão ABCD" 
                                className="w-full h-full object-cover"
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-bold text-lg opacity-0 bg-gray-200 hover:opacity-50 transition duration-300">
                                Nhấp để xem Bản đồ Google
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}