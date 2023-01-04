import React, {useState} from "react";

const Certificates = (props) => {
    const [certificateNumber, setCertificateNumber] = useState(0);
    const [certificateState, setCertificateState] = useState('hide');
    const certificatesArray = [<img src={require('../img/certificate-react-marathon.jpg')} alt='Fundamentals course certificate'></img>, 
    <img src={require('../img/certificate-fundamentals.jpg')} alt='React Marathon course certificate'></img>]
    const [currentCertificate, setCurrentCertificate] = useState(certificatesArray[0]);
    const showCertificates = () => {
        if (certificateState === 'hide') {
            setCertificateState('show');
        } else {
            setCertificateState('hide');
        } 
    };

    const changeCertificate = () => {
        if (certificateNumber === 0) {
            setCertificateNumber(1);
            setCurrentCertificate(certificatesArray[1]);
        } else {
            setCertificateNumber(0);
            setCurrentCertificate(certificatesArray[0]);
        } 
    };

    if (certificateState === 'hide') {
        return (
            <div>
                <button onClick={showCertificates}>{props.buttonShowText}</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={showCertificates}><span className="material-symbols-outlined">close</span></button>
                <div>
                    <button onClick={changeCertificate}><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    <div>
                        <a href='https://career.softserveinc.com/en-us/certification/verification'>{props.linkText}</a>
                        {currentCertificate}
                    </div>
                    <button onClick={changeCertificate}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
                </div>
            </div>
        )
    } 
}

export default Certificates;