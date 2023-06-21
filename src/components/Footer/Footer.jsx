import { Link } from "react-router-dom";
import logo from "../../assets/images/Vector.png"
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiInboxOut } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
                <div>
                    <Link to="/" className="text-[#FF8B42] text-[28px] font-semibold flex items-center">
                        <img src={logo} alt="" />
                        <span>Doctor Guide</span>
                    </Link>
                    <p className="mt-[29px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nulla ut cras velit senectus id tellus aliquam enim felis. <br /> Sed commodo cursus tellus sapien, viverra imperdiet <br /> morbi dignissim. Consequat in metus arcu eget.</p>
                    <div className="grid grid-flow-col gap-4 mt-[37px]">
                        <a className="text-[#FF8B42]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a className="text-[#FF8B42]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a className="text-[#FF8B42]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Our Services</span>
                    <a className="link link-hover mt-[24px]">Bills & Insurance</a>
                    <hr className="w-full" />
                    <a className="link link-hover">Cancer Screening</a>
                    <hr className="w-full" />
                    <a className="link link-hover">Cardiac Surgery</a>
                    <hr className="w-full" />
                    <a className="link link-hover">Neurology</a>
                    <hr className="w-full" />
                    <a className="link link-hover">Covid-19 Vaccine</a>
                    <hr className="w-full" />
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <p className="mt-[24px] flex items-center gap-5 text-[#FF8B42]">
                        <span><FaMapMarkerAlt /></span>
                        <span className="text-white">1234 Uttara Khal Pahr, <br /> Image Osman Center, <br /> Sonargao, Janapath,</span>
                    </p>
                    <p className="mt-[14px] flex items-center gap-5 text-[#FF8B42]">
                        <span><BsFillTelephoneFill /></span>
                        <span className="text-white">+09876543211</span>
                    </p>
                    <p className="mt-[14px] flex items-center gap-5 text-[#FF8B42]">
                        <span><FaRegEnvelope /> </span>
                        <span className="text-white">doctorguide@example.com</span>
                    </p>
                </div>
                <div>
                    <span className="footer-title">Dotcors Schedule </span>
                    <p className="mt-[24px]">At vero eos et accusam et justou <br /> dolores et ea rebum tet clita kasd <br /> gubergren no sea takimata.</p>
                    <button className="btn mt-[30px]"><CiInboxOut /> View Schedule</button>
                </div>
            </footer>
            <hr />
            <div className="footer items-center p-8 bg-black text-white">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2022. All Rights Reserved. Made with by Solutya.</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="">Latest news</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;