import React, {useState} from "react";

const Certificates = (props) => {
    const [certificateNumber, setCertificateNumber] = useState(0);
    const [certificateState, setCertificateState] = useState('hide');
    const certificatesArray = [<img className="mainPageCertificate" src={require('../img/certificate-react-marathon.jpg')} alt='Fundamentals course certificate'></img>, 
    <img className="mainPageCertificate" src={require('../img/certificate-fundamentals.jpg')} alt='React Marathon course certificate'></img>]
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
    console.log(props);
    if (certificateState === 'hide') {
        return (
            <div>
                <button className="mainPageButton" onClick={showCertificates}><span className="mainPageButtonText">{props.buttonShowText}</span></button>
            </div>
        )
    } else {
        return (
            <div className="mainPageContainer">
                <button className="mainPageButton" onClick={showCertificates}><span className="material-symbols-outlined">close</span></button>
                <a className='mainPageCertificatesLink' href='https://career.softserveinc.com/en-us/certification/verification'>{props.linkText}</a>
                    <div className="mainPageCertificatesContainer">
                        <button className="mainPageButton" onClick={changeCertificate}><span class="material-symbols-outlined">chevron_left</span></button>
                            {currentCertificate}
                        <button className="mainPageButton" onClick={changeCertificate}><span class="material-symbols-outlined">chevron_right</span></button>
                    </div>
            </div>
        )
    } 
}

export default Certificates;