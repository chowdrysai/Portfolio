import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faSchool,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

function Experience() {
    const timeline = [
        {
            icon: starIcon,
            date: '2019 -2023',
            title: 'Bachelor of Engineering(B.E)',
            subtitle: 'Information Technology',
            desc: 'M.V.S.R ENGINEERING COLLEGE,HYDERABAD',
        },
        {
            icon: workIcon,
            date: '2017 - 2019',
            title: 'Intermediate',
            subtitle: 'State board (Telengana)',
            desc: ' Vishra JUNIOR COLLEGE,HYDERABAD',
        },
        {
            icon: schoolIcon,
            date: '2008 - 2017',
            title: 'Secondary Schoool',
            subtitle: 'State board (Telengana)',
            desc: 'T.R.R HIGH SCHOOL ,HYDERABAD',
        },
    ];

    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> My <b> Education </b> </h1>

            <div className="App" style={{marginTop:'60px',minHeight:'70vh'}}>
                <VerticalTimeline>
                    {timeline.map((t, i) => {
                        const contentStyle =
            i === 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : undefined;
                        const arrowStyle =
            i === 0
                ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                : undefined;

                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                        {t.subtitle && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;
