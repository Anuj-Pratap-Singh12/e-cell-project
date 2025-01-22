import { FaInstagram } from "react-icons/fa6";

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen min-w-full flex justify-center items-center">
      <div className="max-w-7xl w-full bg-amber-50 shadow-lg rounded-lg p-6">
        <div className="flex items-center border-b pb-4 mb-4">
          <img
            src="./photo.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">Anuj Pratap Singh</h1>
            <p className="text-gray-600">Student at MNNIT Allahabad | anujpratap4595@gmail.com | Registration no. 20240010</p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-600 border-b pb-2 mb-4">Education</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Currently in MNNIT Allahabad pursuing B.Tech in Biotechnology</li>
            <li>Higher School Certificate by ICSE - S.J. Education Centre,Kanpur</li>
            <li>Senior School Certificate by ISC - S.J. Education Centre,Kanpur</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-600 border-b pb-2 mb-4">Languages Known</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            <li>Java</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-600 border-b pb-2 mb-4">Activities</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Volunteer at NSS in MNNIT Allahabad</li>
            <li>Performed in various cultural events in MNNIT Allahabad</li>
            <li>Played Interhouse football in Class 11 and 12 as Vice Captain</li>
            <li>Played Interschool Cricket in Class 9</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-600 border-b pb-2 mb-4">Technical Skills</h2>
          <ul className="grid grid-cols-3 gap-4 text-gray-700">
            <li>AutoCAD</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Java</li>
            <li>Python</li>
            <li>Excel</li>
          </ul>
        </section>

        <div className="flex justify-center space-x-4 mt-6">
          <a href="" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://www.instagram.com/anuj_the_ingenious/" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-instagram text-xl"><FaInstagram /></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
