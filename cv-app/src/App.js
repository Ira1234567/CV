import React, {useState} from 'react';
import SkillsBlock from './components/SkillsBlock';
import Contacts from './components/Contacts';
import Photo from './components/Photo';
import MainInfo from './components/MainInfo';
import Languages from './components/Languages'
import Courses from './components/Courses';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Projects from './components/Projects';

const enCVInfo = {
  contacts: {
    title: 'Contact information',
    phone: {title: 'Phone: ', number: '+38(067)646-13-93'},
    email: {title: 'Email: ', email: 'iryna.smyrnova12@gmail.com'}
  },
  hardSkills: {
    title: 'Hard skills',
    skillsList: ['HTML', 'CSS', 'JavaScript', 'React', 'GIT'],
  },
  softSkills: {
    title: 'Soft skills',
    skillsList: ['Teamwork', 'Time management', 'Critical thinking', 'Communication', 'Creativity', 'Learnability'],
  },
  mainInfo: {
    name: 'Iryna Smyrnova',
    position: 'Junior/Trainee Front-end developer',
    information: 'The beginner in IT who gained professional knowledges by combination of attending courses and self-learning. Have a high level of efficiency and responsible attitude to implementation of work tasks. Willing to learn and improve my skills by working on real projects. Now looking for an opportunity for starting career as a front-end developer.'
  },
  languages: {
    title: 'Languages',
    languagesList: [{title: 'Ukrainian', level: 'Native'}, {title: 'English', level: 'B2'}, {title: 'German', level: 'A1'}]
  },
  courses: {
    title: 'Courses',
    coursesList: [{title: 'React online marathon in Softserve IT Academy', startDate: '10.2022', finishDate: '12.2022'}, {title: 'HTML/CSS/JS Fundamentals course in Softserve IT Academy', startDate: '9.2022 ', finishDate: '10.2022'}]
  },
  extraCourses: {
    title: 'Additional courses',
      coursesList: [
        {title: 'Python Pro in Hillel IT School', startDate: '2.2022', finishDate: '6.2022', 
        checkCert: <a href='https://certificate.ithillel.ua/view/73826253?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
          View certificate</a>}, 
        {title: 'Python Introduction in Hillel IT School', startDate: '10.2021 ', finishDate: '1.2022', 
        checkCert: <a href='https://certificate.ithillel.ua/view/69667245?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
        View certificate</a>}]
  },
  education: {
    title: 'Education',
    univercity: 'Oles Honchar National Univercity',
    specialty: 'Marketing',
    startDate: '2018',
    finishDate: '2022'
  },
  projects: {
    title: 'Projects',
    projectsList: [{description: 'Pet store website', type: 'Team project', technologies: 'HTML, CSS, JS', url: 'https://github.com/koldovsky/714-team-06'}, {description: 'CV Project', type: 'Single project', technologies: 'React', url: 'https://github.com/koldovsky/714-team-06'}]
  },
  certificates: {
    buttonShowText: 'View certificates',
    buttonHideText: 'Close',
    linkText: 'Click to verify'
  }
}

const ukrCVInfo = {
  contacts: {
    title: 'Контактна інформація',
    phone: { title: 'Телефон: ', number: '+38(067)646-13-93'},
    email: {title: 'Електронна пошта: ', email: 'iryna.smyrnova12@gmail.com'}
  },
  hardSkills: {
    title: 'Хард-скіли',
    skillsList: ['HTML', 'CSS', 'JavaScript', 'React', 'GIT'],
  },
  softSkills: {
    title: 'Софт-скіли',
    skillsList: ['Командна робота', 'Управління часом', 'Критичне мислення', 'Комунікабельність', 'Креативність', 'Здатність'],
  },
  mainInfo: {
    name: 'Ірина Смирнова',
    position: 'Джуніор/Трейні Фронт-енд розробник',
    information: 'Тут типу переклад'
  },
  languages: {
    title: 'Мови',
    languagesList: [{title: 'Українська', level: 'носій'}, {title: 'Англійська', level: 'B2'}, {title: 'Німецька', level: 'A1'}]
  },
  courses: {
    title: 'Курси',
    coursesList: [{title: 'React онлайн марафон у Softserve IT Академії', startDate: '10.2022', finishDate: '12.2022'}, {title: 'HTML/CSS/JS Fundamentals курс у Softserve IT Академії', startDate: '9.2022 ', finishDate: '10.2022'}]
  },
  extraCourses: {
    title: 'Додаткові курси',
    coursesList: [
      {title: 'Python Pro у Hillel IT School', startDate: '2.2022', finishDate: '6.2022', 
      checkCert: <a href='https://certificate.ithillel.ua/view/73826253?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
      Переглянути сертифікат</a>}, 
      {title: 'Python Introduction у Hillel IT School', startDate: '10.2021 ', finishDate: '1.2022', 
      checkCert: <a href='https://certificate.ithillel.ua/view/69667245?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
      Переглянути сертифікат</a>}]
  },
  education: {
    title: 'Освіта',
    univercity: 'Дніпровський Національний Університет імені Олеся Гончара',
    specialty: 'Маркетинг',
    startDate: '2018',
    finishDate: '2022'
  },
  projects: {
    title: 'Проєкти',
    projectsList: [{description: 'Сайт товарів для тварин', type: 'Командний проект', technologies: 'HTML, CSS, JS', url: 'https://github.com/koldovsky/714-team-06'}, {description: 'Резюме', type: 'Самостійний проект', technologies: 'React', url: 'https://github.com/koldovsky/714-team-06'}]
  },
  certificates: {
    buttonShowText: 'Переглянути сертифікати',
    buttonHideText: 'Закрити',
    linkText: 'Натисність для перевірки'
  }
}

function App() {
  const [cvArr, setCvArr] = useState(enCVInfo);
  const [enButtonText, setEnButtonText] = useState('EN');
  const [ukrButtonText, setUkrButtonText] = useState('UKR');
  const setEnLanguege = () => {
      setCvArr(enCVInfo);
      setEnButtonText('EN');
      setUkrButtonText('UKR')
  }
  const setUkrLanguege = () => {
    setCvArr(ukrCVInfo);
    setEnButtonText('АНГЛ');
    setUkrButtonText('УКР')
}
  return (
    <div>
      <button onClick={setEnLanguege}>{enButtonText}</button>
      <button onClick={setUkrLanguege}>{ukrButtonText}</button>
      <Photo />
      <Contacts title={cvArr.contacts.title} phoneTitle={cvArr.contacts.phone.title} emailTitle={cvArr.contacts.email.title} phoneNumber={cvArr.contacts.phone.number} email={cvArr.contacts.email.email} />
      <SkillsBlock type={cvArr.hardSkills.title} skillsList={cvArr.hardSkills.skillsList} />
      <SkillsBlock type={cvArr.softSkills.title} skillsList={cvArr.softSkills.skillsList} />
      <MainInfo name={cvArr.mainInfo.name} position={cvArr.mainInfo.position} information={cvArr.mainInfo.information} />
      <Projects title={cvArr.projects.title} projectsList={cvArr.projects.projectsList}/>
      <Languages title={cvArr.languages.title} languagesList={cvArr.languages.languagesList} />
      <Courses title={cvArr.courses.title} coursesList={cvArr.courses.coursesList}/>
      <Certificates buttonShowText={cvArr.certificates.buttonShowText} buttonHideText={cvArr.certificates.buttonHideText} linkText={cvArr.certificates.linkText} />
      <Courses title={cvArr.extraCourses.title} coursesList={cvArr.extraCourses.coursesList}/>
      <Education title={cvArr.education.title} univercity={cvArr.education.univercity} specialty={cvArr.education.specialty} startDate={cvArr.education.startDate} finishDate={cvArr.education.finishDate} />
    </div>
  );
}

export default App;

//correct translation
//url to project 2
