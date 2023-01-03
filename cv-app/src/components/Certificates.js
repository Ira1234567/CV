import React, {useState} from "react";

const Certificates = (props) => {
    const [certificateNumber, setCertificateNumber] = useState(0);
    const [certificateState, setCertificateState] = useState('hide');
    const [buttonText, setButtonText] = useState(props.buttonShowText);
    const certificatesArray = [<img src={require('../img/certificate-react-marathon.jpg')} alt='Fundamentals course certificate'></img>, 
    <img src={require('../img/certificate-fundamentals.jpg')} alt='React Marathon course certificate'></img>]
    const [currentCertificate, setCurrentCertificate] = useState(certificatesArray[0]);
    const showCertificates = () => {
        if (certificateState === 'hide') {
            setCertificateState('show');
            setButtonText(props.buttonHideText)
        } else {
            setCertificateState('hide');
            setButtonText(props.buttonShowText)
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
                <button onClick={showCertificates}>{buttonText}</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={showCertificates}>{buttonText}</button>
                <button onClick={changeCertificate}><span class="material-symbols-outlined">arrow_back_ios</span></button>
                <div>
                    <a href='https://career.softserveinc.com/en-us/certification/verification'>{props.linkText}</a>
                    {currentCertificate}
                </div>
                <button onClick={changeCertificate}><span class="material-symbols-outlined">arrow_forward_ios</span></button>
            </div>
        )
    } 
}

export default Certificates;